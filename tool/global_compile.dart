#!/usr/bin/env dart
// Copyright (c) 2016, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'dart:io';

import 'package:analyzer/src/generated/engine.dart' show AnalysisContext;
import 'package:args/args.dart' show ArgParser;
import 'package:dev_compiler/src/analyzer/context.dart'
    show createAnalysisContextWithSources;
import 'package:dev_compiler/src/analyzer/context.dart'
    show createAnalysisContextWithSources, AnalyzerOptions;
import 'package:path/path.dart' as path;

const ENTRY = "main";

void main(List<String> args) {
  // Parse flags.
  var parser = new ArgParser()
    ..addOption('out', abbr: 'o', defaultsTo: 'out.js')
    ..addFlag('unsafe-force-compile', negatable: false)
    ..addOption('package-root', abbr: 'p', defaultsTo: 'packages/');

  var options = parser.parse(args);
  if (options.rest.length != 1) {
    throw 'Expected a single dart entrypoint.';
  }
  var entry = options.rest.first;
  var outfile = options['out'] as String;
  var packageRoot = options['package-root'] as String;
  var unsafe = options['unsafe-force-compile'];

  // Build an invocation to dartdevc.
  var dartPath = Platform.resolvedExecutable;
  var ddcPath = path.dirname(path.dirname(Platform.script.toFilePath()));
  var template = [
    '$ddcPath/bin/dartdevc.dart',
    'compile',
    '--no-source-map', // Invalid as we're just concatenating files below
    '-p',
    packageRoot
  ];
  if (unsafe) {
    template.add('--unsafe-force-compile');
  }

  // Compute the transitive closure
  var watch = new Stopwatch()..start();
  var context = createAnalysisContextWithSources(new AnalyzerOptions());

  transitiveFiles(context, entry, Directory.current.path);
  orderModules();

  // Prepend Dart runtime files to the output.
  var out = new File(outfile);
  var dartLibrary =
      new File(path.join(ddcPath, 'lib', 'runtime', 'dart_library.js'))
          .readAsStringSync();
  out.writeAsStringSync(dartLibrary);
  var dartSdk = new File(path.join(ddcPath, 'lib', 'runtime', 'dart_sdk.js'))
      .readAsStringSync();
  out.writeAsStringSync(dartSdk, mode: FileMode.APPEND);

  // Build modules
  var tmpdir = Directory.systemTemp.createTempSync(outfile.replaceAll(path.separator, '__'));
  for (var module in orderedModules) {
    var file = tmpdir.path + path.separator + module + '.js';
    var command = new List.from(template)
      ..addAll(['-o', file]);
    var dependences = new Set<String>();
    computeDependences(module, dependences);
    for (var dependence in dependences) {
      var summary = tmpdir.path + path.separator + dependence + '.sum';
      command.addAll(['-s', summary]);
    }
    var infiles = fileMap[module];
    command.addAll(infiles);
    var result = Process.runSync(dartPath, command);
    if (result.exitCode != 0) {
      print('ERROR: compiling $module');
      print(result.stdout);
      print(result.stderr);
      out.deleteSync();
      exit(1);
    }
    print('Compiled $module (${infiles.length} files)');
    print(result.stdout);

    // Append module
    var codefile = new File(file);
    var code = codefile.readAsStringSync();
    out.writeAsStringSync(code, mode: FileMode.APPEND);
  }

  var time = watch.elapsedMilliseconds / 1000;
  print('Successfully compiled ${inputSet.length} files in $time seconds');

  // Append the entry point invocation.
  var libraryName =
      path.withoutExtension(entry).replaceAll(path.separator, '__');
  out.writeAsStringSync('dart_library.start("$ENTRY", "$libraryName");\n',
      mode: FileMode.APPEND);
}

final inputSet = new Set<String>();
final dependenceMap = new Map<String, Set<String>>();
final fileMap = new Map<String, Set<String>>();

final orderedModules = new List<String>();

void orderModules([String module = ENTRY, Set<String> stack]) {
  if (stack == null) {
    stack = new Set<String>();
  }
  if (stack.contains(module)) {
    throw 'Circular dependence on $module';
  }
  stack.add(module);
  var dependences = dependenceMap[module];
  if (dependences != null) {
    for (var dependence in dependences) {
      orderModules(dependence, stack);
    }
  }
  orderedModules.add(module);
  stack.remove(module);
}

void computeDependences(String module, Set<String> allDependences) {
  if (dependenceMap.containsKey(module)) {
    for (var dependence in dependenceMap[module]) {
      if (allDependences.add(dependence)) {
        computeDependences(dependence, allDependences);
      }
    }
  }
}

String getModule(String uri) {
  var sourceUri = Uri.parse(uri);
  if (sourceUri.scheme == 'dart') {
    return 'dart';
  } else if (sourceUri.scheme == 'package') {
    return path.split(sourceUri.path)[0];
  } else {
    return ENTRY;
  }
}

bool processFile(String file) {
  inputSet.add(file);

  var module = getModule(file);
  fileMap.putIfAbsent(module, () => new Set<String>());
  return fileMap[module].add(file);
}

void processDependence(String from, String to) {
  var fromModule = getModule(from);
  var toModule = getModule(to);
  if (fromModule == toModule || toModule == 'dart') return;
  dependenceMap.putIfAbsent(fromModule, () => new Set<String>());
  dependenceMap[fromModule].add(toModule);
}

String canonicalize(String uri, String root) {
  var sourceUri = Uri.parse(uri);
  if (sourceUri.scheme == '') {
    sourceUri = path.toUri(
        path.isAbsolute(uri) ? path.absolute(uri) : path.join(root, uri));
  }
  return sourceUri.toString();
}

void transitiveFiles(AnalysisContext context, String entryPoint, String root) {
  entryPoint = canonicalize(entryPoint, root);
  if (entryPoint.startsWith('dart:')) return;
  var entryDir = path.dirname(entryPoint);
  if (processFile(entryPoint)) {
    // Process this
    var source = context.sourceFactory.forUri(entryPoint);
    if (source == null) {
      throw new Exception('could not create a source for $entryPoint.'
          ' The file name is in the wrong format or was not found.');
    }
    var library = context.computeLibraryElement(source);
    for (var entry in library.imports) {
      if (entry.uri == null) continue;
      processDependence(entryPoint, canonicalize(entry.uri, entryDir));
      transitiveFiles(context, entry.uri, entryDir);
    }
    for (var entry in library.exports) {
      processDependence(entryPoint, canonicalize(entry.uri, entryDir));
      transitiveFiles(context, entry.uri, entryDir);
    }
    for (var part in library.parts) {
      processFile(canonicalize(part.uri, entryDir));
    }
  }
}
