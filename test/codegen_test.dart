// Copyright (c) 2016, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

/// Tests code generation.
///
/// Runs Dart Dev Compiler on all input in the `codegen` directory and checks
/// that the output is what we expected.
library dev_compiler.test.codegen_test;

// TODO(rnystrom): This doesn't actually run any tests any more. It just
// compiles stuff. This should be changed to not use unittest and just be a
// regular program that outputs files.

import 'dart:convert' show JSON;
import 'dart:io' show Directory, File, Platform;
import 'package:args/args.dart' show ArgParser, ArgResults;
import 'package:path/path.dart' as path;
import 'package:test/test.dart' show group, test;

import 'package:analyzer/analyzer.dart'
    show
        ExportDirective,
        ImportDirective,
        StringLiteral,
        UriBasedDirective,
        parseDirectives;
import 'package:analyzer/src/generated/source.dart' show Source;
import 'package:dev_compiler/src/analyzer/context.dart' show AnalyzerOptions;
import 'package:dev_compiler/src/compiler/compiler.dart'
    show BuildUnit, CompilerOptions, ModuleCompiler;
import 'testing.dart' show repoDirectory, testDirectory;
import 'multitest.dart' show extractTestsFromMultitest, isMultiTest;
import '../tool/build_sdk.dart' as build_sdk;
import 'package:dev_compiler/src/compiler/compiler.dart';

final ArgParser argParser = new ArgParser()
  ..addOption('dart-sdk', help: 'Dart SDK Path', defaultsTo: null);

/// The `test/codegen` directory.
final codegenDir = path.join(testDirectory, 'codegen');

/// The `test/codegen/expect` directory.
final codegenExpectDir = path.join(testDirectory, 'codegen_expected');

/// The generated directory where tests, expanded multitests, and other test
/// support libraries are copied to.
///
/// The tests sometimes import utility libraries using a relative path.
/// Likewise, the multitests do too, and one multitest even imports its own
/// non-expanded form (!). To make that simpler, we copy the entire test tree
/// to a generated directory and expand that multitests in there too.
final codegenTestDir = path.join(repoDirectory, 'gen', 'codegen_tests');

/// The generated directory where tests and packages compiled to JS are
/// output.
final codegenOutputDir = path.join(repoDirectory, 'gen', 'codegen_output');

// TODO(jmesserly): switch this to a .packages file.
final packageUrlMappings = {
  'package:expect/expect.dart': path.join(codegenDir, 'expect.dart'),
  'package:async_helper/async_helper.dart':
      path.join(codegenDir, 'async_helper.dart'),
  'package:js/js.dart': path.join(codegenDir, 'packages', 'js', 'js.dart')
};

final codeCoverage = Platform.environment.containsKey('COVERALLS_TOKEN');

RegExp filePattern;

main(List<String> arguments) {
  if (arguments == null) arguments = [];
  ArgResults args = argParser.parse(arguments);
  filePattern = new RegExp(args.rest.length > 0 ? args.rest[0] : '.');

  var sdkDir = path.join(repoDirectory, 'gen', 'patched_sdk');
  var sdkSummaryFile =
      path.join(testDirectory, '..', 'lib', 'runtime', 'dart_sdk.sum');
  var analyzerOptions = new AnalyzerOptions(
      customUrlMappings: packageUrlMappings,
      dartSdkSummaryPath: sdkSummaryFile);
  var compiler = new ModuleCompiler(analyzerOptions);

  // Build packages tests depend on.
  _buildAllPackages(compiler);

  var testDirs = [
    'language',
    'corelib',
    path.join('lib', 'convert'),
    path.join('lib', 'html'),
    path.join('lib', 'math'),
    path.join('lib', 'typed_data'),
  ];

  // Copy all of the test files and expanded multitest files to
  // gen/codegen_tests. We'll compile from there.
  var testFiles = _setUpTests(testDirs);

  // Our default compiler options. Individual tests can override these.
  var defaultOptions = ['--no-source-map', '--no-summarize'];
  var compilerArgParser = CompilerOptions.addArguments(new ArgParser());

  // Compile each test file to JS and put the result in gen/codegen_output.
  for (var testFile in testFiles) {
    var relativePath = path.relative(testFile, from: codegenTestDir);

    // Only compile the top-level files for generating coverage.
    if (codeCoverage && path.dirname(relativePath) != ".") continue;

    var name = path.withoutExtension(relativePath);
    test('dartdevc $name', () {
      var relativeDir = path.dirname(relativePath);
      var outDir = path.join(codegenOutputDir, relativeDir);
      var expectDir = path.join(codegenExpectDir, relativeDir);

      // Check if we need to use special compile options.
      var contents = new File(testFile).readAsStringSync();
      var match =
          new RegExp(r'// compile options: (.*)').matchAsPrefix(contents);

      var args = defaultOptions.toList();
      if (match != null) {
        args.addAll(match.group(1).split(' '));
      }
      var options =
          new CompilerOptions.fromArguments(compilerArgParser.parse(args));

      // Collect any other files we've imported.
      var files = new Set<String>();
      _collectTransitiveImports(contents, files, from: testFile);
      var moduleName =
          path.withoutExtension(path.relative(testFile, from: codegenTestDir));
      var unit = new BuildUnit(moduleName, path.dirname(testFile),
          files.toList(), _moduleForLibrary);
      var module = compiler.compile(unit, options);
      _writeModule(
          path.join(outDir, path.basenameWithoutExtension(testFile)),
          path.join(expectDir, path.basenameWithoutExtension(testFile)),
          module);
    });
  }

  if (codeCoverage) {
    test('build_sdk code coverage', () {
      return build_sdk.main(['--dart-sdk', sdkDir, '-o', codegenOutputDir]);
    });
  }
}

void _writeModule(String outPath, String expectPath, JSModuleFile result) {
  _ensureDirectory(path.dirname(outPath));
  _ensureDirectory(path.dirname(expectPath));

  String errors = result.errors.join('\n');
  if (errors.isNotEmpty && !errors.endsWith('\n')) errors += '\n';
  new File(outPath + '.txt').writeAsStringSync(errors);

  var jsFile = new File(outPath + '.js');
  var expectFile = new File(expectPath + '.js');
  var errorFile = new File(outPath + '.err');

  if (result.isValid) {
    jsFile.writeAsStringSync(result.code);
    if (result.sourceMap != null) {
      var mapPath = outPath + '.js.map';
      new File(mapPath)
          .writeAsStringSync(JSON.encode(result.placeSourceMap(mapPath)));
    }

    expectFile.writeAsStringSync(result.code);

    // There are no errors, so delete any stale ".err" file.
    if (errorFile.existsSync()) {
      errorFile.deleteSync();
    }
  } else {
    // Also write the errors to a '.err' file for easy counting.
    var moduleName = result.name;
    var libraryName = path.split(moduleName).last;
    var count = "[error]".allMatches(errors).length;
    var text = '''
dart_library.library('$moduleName', null, [
  'dart_sdk',
  'expect'
], function(exports, dart_sdk, expect) {
  const message = `DDC Compilation Error: $moduleName has $count errors`;
  const error = new Error(message);
  exports.$libraryName = Object.create(null);
  exports.$libraryName.main = function() {
    throw error;
  }
});
    ''';
    errorFile.writeAsStringSync(text);

    // There are errors, so delete any stale ".js" file.
    if (jsFile.existsSync()) {
      jsFile.deleteSync();
    }

    // There are errors, so delete any stale expect ".js" file.
    if (expectFile.existsSync()) {
      expectFile.deleteSync();
    }
    expectFile.writeAsStringSync("//FAILED TO COMPILE");
  }
}

void _buildAllPackages(ModuleCompiler compiler) {
  group('dartdevc package', () {
    _buildPackages(compiler, codegenOutputDir, codegenExpectDir);

    var packages = ['matcher', 'path', 'stack_trace'];
    for (var package in packages) {
      if (!filePattern.hasMatch(package)) continue;
      test(package, () {
        _buildPackage(compiler, codegenOutputDir, codegenExpectDir, package);
      });
    }

    if (!filePattern.hasMatch('unittest')) return;

    test('unittest', () {
      // Only build files applicable to the web - html_*.dart and its
      // internal dependences.
      _buildPackage(compiler, codegenOutputDir, codegenExpectDir, "unittest",
          packageFiles: [
            'unittest.dart',
            'html_config.dart',
            'html_individual_config.dart',
            'html_enhanced_config.dart'
          ]);
    });
  });

  if (!filePattern.hasMatch('sunflower')) return;

  test('dartdevc sunflower', () {
    _buildSunflower(compiler, codegenOutputDir, codegenExpectDir);
  });
}

void _buildSunflower(
    ModuleCompiler compiler, String outputDir, String expectDir) {
  var baseDir = path.join(codegenDir, 'sunflower');
  var files = ['sunflower', 'circle', 'painter']
      .map((f) => path.join(baseDir, '$f.dart'))
      .toList();
  var input = new BuildUnit('sunflower', baseDir, files, _moduleForLibrary);
  var options = new CompilerOptions(summarizeApi: false);

  var built = compiler.compile(input, options);
  _writeModule(path.join(outputDir, 'sunflower', 'sunflower'),
      path.join(expectDir, 'sunflower', 'sunflower'), built);
}

void _buildPackages(
    ModuleCompiler compiler, String outputDir, String expectDir) {
  // Note: we don't summarize these, as we're going to rely on our in-memory
  // shared analysis context for caching, and `_moduleForLibrary` below
  // understands these are from other modules.
  var options = new CompilerOptions(sourceMap: false, summarizeApi: false);

  for (var uri in packageUrlMappings.keys) {
    if (!filePattern.hasMatch(uri)) return;

    assert(uri.startsWith('package:'));
    var uriPath = uri.substring('package:'.length);
    var name = path.basenameWithoutExtension(uriPath);
    test(name, () {
      var input = new BuildUnit(name, codegenDir, [uri], _moduleForLibrary);
      var built = compiler.compile(input, options);

      var outPath = path.join(outputDir, path.withoutExtension(uriPath));
      var expectPath = path.join(expectDir, path.withoutExtension(uriPath));
      _writeModule(outPath, expectPath, built);
    });
  }
}

void _buildPackage(
    ModuleCompiler compiler, String outputDir, String expectDir, packageName,
    {List<String> packageFiles}) {
  var options = new CompilerOptions(sourceMap: false, summarizeApi: false);

  var packageRoot = path.join(codegenDir, 'packages');
  var packageInputDir = path.join(packageRoot, packageName);
  List<String> files;
  if (packageFiles != null) {
    // Only collect files transitively reachable from packageFiles.
    var reachable = new Set<String>();
    for (var file in packageFiles) {
      file = path.join(packageInputDir, file);
      _collectTransitiveImports(new File(file).readAsStringSync(), reachable,
          packageRoot: packageRoot, from: file);
    }
    files = reachable.toList();
  } else {
    // Collect all files in the packages directory.
    files = new Directory(packageInputDir)
        .listSync(recursive: true)
        .where((entry) => entry.path.endsWith('.dart'))
        .map((entry) => entry.path)
        .toList();
  }

  var unit =
      new BuildUnit(packageName, packageInputDir, files, _moduleForLibrary);
  var module = compiler.compile(unit, options);

  var outPath = path.join(outputDir, packageName, packageName);
  var expectPath = path.join(expectDir, packageName, packageName);
  _writeModule(outPath, expectPath, module);
}

String _moduleForLibrary(Source source) {
  var scheme = source.uri.scheme;
  if (scheme == 'package') {
    return source.uri.pathSegments.first;
  }
  throw new Exception('Module not found for library "${source.fullName}"');
}

List<String> _setUpTests(List<String> testDirs) {
  var testFiles = <String>[];

  for (var testDir in testDirs) {
    for (var file
        in _listFiles(path.join(codegenDir, testDir), recursive: true)) {
      var relativePath = path.relative(file, from: codegenDir);
      var outputPath = path.join(codegenTestDir, relativePath);

      _ensureDirectory(path.dirname(outputPath));

      // Copy it over. We do this even for multitests because import_self_test
      // is a multitest, yet imports its own unexpanded form (!).
      new File(file).copySync(outputPath);

      if (file.endsWith("_test.dart")) {
        var contents = new File(file).readAsStringSync();

        if (isMultiTest(contents)) {
          // It's a multitest, so expand it and add all of the variants.
          var tests = <String, String>{};
          var outcomes = <String, Set<String>>{};
          extractTestsFromMultitest(file, contents, tests, outcomes);

          var fileName = path.basenameWithoutExtension(file);
          var outputDir = path.dirname(outputPath);
          tests.forEach((name, contents) {
            var multiFile =
                path.join(outputDir, '${fileName}_${name}_multi.dart');
            testFiles.add(multiFile);

            new File(multiFile).writeAsStringSync(contents);
          });
        } else {
          // It's a single test suite.
          testFiles.add(outputPath);
        }
      }
    }
  }

  // Also include the other special files that live at the top level directory.
  for (var file in _listFiles(codegenDir)) {
    var relativePath = path.relative(file, from: codegenDir);
    var outputPath = path.join(codegenTestDir, relativePath);

    new File(file).copySync(outputPath);
    if (file.endsWith(".dart")) {
      testFiles.add(outputPath);
    }
  }

  return testFiles;
}

/// Recursively creates [dir] if it doesn't exist.
void _ensureDirectory(String dir) {
  new Directory(dir).createSync(recursive: true);
}

/// Lists all of the files within [dir] that match [filePattern].
Iterable<String> _listFiles(String dir, {bool recursive: false}) {
  return new Directory(dir)
      .listSync(recursive: recursive, followLinks: false)
      .where((entry) {
    if (entry is! File) return false;

    var filePath = entry.path;
    if (!filePattern.hasMatch(filePath)) return false;

    return true;
  }).map((file) => file.path);
}

/// Parse directives from [contents] and find the complete set of transitive
/// imports, reading files as needed.
///
/// This will not include dart:* libraries, as those are implicitly available.
void _collectTransitiveImports(String contents, Set<String> libraries,
    {String packageRoot, String from}) {
  var uri = from;
  if (packageRoot != null && path.isWithin(packageRoot, from)) {
    uri = 'package:${path.relative(from, from: packageRoot)}';
  }
  if (!libraries.add(uri)) return;

  var unit = parseDirectives(contents, name: from, suppressErrors: true);
  for (var d in unit.directives) {
    if (d is ImportDirective || d is ExportDirective) {
      String uri = _resolveDirective(d);
      if (uri == null ||
          uri.startsWith('dart:') ||
          uri.startsWith('package:')) {
        continue;
      }

      var f = new File(path.join(path.dirname(from), uri));
      if (f.existsSync()) {
        _collectTransitiveImports(f.readAsStringSync(), libraries,
            packageRoot: packageRoot, from: f.path);
      }
    }
  }
}

/// Simplified from ParseDartTask.resolveDirective.
String _resolveDirective(UriBasedDirective directive) {
  StringLiteral uriLiteral = directive.uri;
  String uriContent = uriLiteral.stringValue;
  if (uriContent != null) {
    uriContent = uriContent.trim();
    directive.uriContent = uriContent;
  }
  return directive.validate() == null ? uriContent : null;
}
