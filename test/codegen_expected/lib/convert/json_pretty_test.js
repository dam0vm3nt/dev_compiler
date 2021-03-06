dart_library.library('lib/convert/json_pretty_test', null, /* Imports */[
  'dart_sdk',
  'expect'
], function load__json_pretty_test(exports, dart_sdk, expect) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const expect$ = expect.expect;
  const json_pretty_test = Object.create(null);
  let JSArrayOfList = () => (JSArrayOfList = dart.constFn(_interceptors.JSArray$(core.List)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let JSArrayOfObject = () => (JSArrayOfObject = dart.constFn(_interceptors.JSArray$(core.Object)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [])))();
  let StringToString = () => (StringToString = dart.constFn(dart.definiteFunctionType(core.String, [core.String])))();
  let ObjectAndStringTovoid = () => (ObjectAndStringTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [core.Object, core.String])))();
  let const$;
  json_pretty_test._testIndentWithNullChar = function() {
    let encoder = const$ || (const$ = dart.const(new convert.JsonEncoder.withIndent(' ')));
    let encoded = encoder.convert(JSArrayOfList().of([[], JSArrayOfList().of([[]])]));
    expect$.Expect.equals("[\n [],\n [\n  []\n ]\n]", encoded);
  };
  dart.fn(json_pretty_test._testIndentWithNullChar, VoidTovoid());
  json_pretty_test.main = function() {
    json_pretty_test._testIndentWithNullChar();
    json_pretty_test._expect(null, 'null');
    json_pretty_test._expect(JSArrayOfList().of([[], JSArrayOfList().of([[]])]), '[\n  [],\n  [\n    []\n  ]\n]');
    json_pretty_test._expect(JSArrayOfint().of([1, 2, 3, 4]), '[\n  1,\n  2,\n  3,\n  4\n]');
    json_pretty_test._expect(JSArrayOfObject().of([true, null, 'hello', 42.42]), '[\n  true,\n  null,\n  "hello",\n  42.42\n]');
    json_pretty_test._expect(dart.map({hello: [], goodbye: dart.map()}), '{\n  "hello": [],\n  "goodbye": {}\n}');
    json_pretty_test._expect(JSArrayOfObject().of(["test", 1, 2, 33234.324, true, false, null, dart.map({test1: "test2", test3: "test4", grace: 5, shanna: JSArrayOfint().of([0, 1, 2])}), dart.map({lib: "app.dart", src: JSArrayOfString().of(["foo.dart", "bar.dart"])})]), '[\n  "test",\n  1,\n  2,\n  33234.324,\n  true,\n  false,\n  null,\n  {\n    "test1": "test2",\n    "test3": "test4",\n    "grace": 5,\n    "shanna": [\n      0,\n      1,\n      2\n    ]\n  },\n  {\n    "lib": "app.dart",\n    "src": [\n      "foo.dart",\n      "bar.dart"\n    ]\n  }\n]');
  };
  dart.fn(json_pretty_test.main, VoidTovoid());
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  json_pretty_test._expect = function(object, expected) {
    let encoder = const$0 || (const$0 = dart.const(new convert.JsonEncoder.withIndent('  ')));
    let prettyOutput = encoder.convert(object);
    expect$.Expect.equals(expected, prettyOutput);
    encoder = const$1 || (const$1 = dart.const(new convert.JsonEncoder.withIndent('')));
    let flatOutput = encoder.convert(object);
    let flatExpected = (const$2 || (const$2 = dart.const(new convert.LineSplitter()))).convert(expected)[dartx.map](core.String)(dart.fn(line => line[dartx.trimLeft](), StringToString()))[dartx.join]('\n');
    expect$.Expect.equals(flatExpected, flatOutput);
    let compactOutput = convert.JSON.encode(object);
    encoder = const$3 || (const$3 = dart.const(new convert.JsonEncoder.withIndent(null)));
    expect$.Expect.equals(compactOutput, encoder.convert(object));
    let prettyDecoded = convert.JSON.decode(prettyOutput);
    expect$.Expect.equals(compactOutput, convert.JSON.encode(prettyDecoded));
  };
  dart.fn(json_pretty_test._expect, ObjectAndStringTovoid());
  // Exports:
  exports.json_pretty_test = json_pretty_test;
});
