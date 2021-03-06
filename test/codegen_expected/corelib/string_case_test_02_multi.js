dart_library.library('corelib/string_case_test_02_multi', null, /* Imports */[
  'dart_sdk',
  'expect'
], function load__string_case_test_02_multi(exports, dart_sdk, expect) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const expect$ = expect.expect;
  const string_case_test_02_multi = Object.create(null);
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [])))();
  string_case_test_02_multi.main = function() {
    string_case_test_02_multi.testLowerUpper();
    string_case_test_02_multi.testSpecialCases();
  };
  dart.fn(string_case_test_02_multi.main, VoidTodynamic());
  string_case_test_02_multi.testLowerUpper = function() {
    let a = "Stop! Smell the Roses.";
    let allLower = "stop! smell the roses.";
    let allUpper = "STOP! SMELL THE ROSES.";
    expect$.Expect.equals(allUpper, a[dartx.toUpperCase]());
    expect$.Expect.equals(allLower, a[dartx.toLowerCase]());
  };
  dart.fn(string_case_test_02_multi.testLowerUpper, VoidTovoid());
  string_case_test_02_multi.testSpecialCases = function() {
    expect$.Expect.equals("ß", "ß"[dartx.toLowerCase]());
    expect$.Expect.equals("Μ", "µ"[dartx.toUpperCase]());
    expect$.Expect.equals("µ", "µ"[dartx.toLowerCase]());
    expect$.Expect.equals("μ", "µ"[dartx.toUpperCase]()[dartx.toLowerCase]());
    expect$.Expect.equals("ÿ", "ÿ"[dartx.toLowerCase]());
    expect$.Expect.equals(" ", " "[dartx.toLowerCase]());
    expect$.Expect.equals(" ", " "[dartx.toUpperCase]());
    expect$.Expect.equals("aaÿ", "Aaÿ"[dartx.toLowerCase]());
    expect$.Expect.equals("aaÿ", "aAÿ"[dartx.toLowerCase]());
    expect$.Expect.equals("aÿa", "Aÿa"[dartx.toLowerCase]());
    expect$.Expect.equals("aÿa", "aÿA"[dartx.toLowerCase]());
    expect$.Expect.equals("ÿaa", "ÿAa"[dartx.toLowerCase]());
    expect$.Expect.equals("ÿaa", "ÿaA"[dartx.toLowerCase]());
  };
  dart.fn(string_case_test_02_multi.testSpecialCases, VoidTovoid());
  // Exports:
  exports.string_case_test_02_multi = string_case_test_02_multi;
});
