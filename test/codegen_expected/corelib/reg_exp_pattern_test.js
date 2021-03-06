dart_library.library('corelib/reg_exp_pattern_test', null, /* Imports */[
  'dart_sdk',
  'expect'
], function load__reg_exp_pattern_test(exports, dart_sdk, expect) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const expect$ = expect.expect;
  const reg_exp_pattern_test = Object.create(null);
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  reg_exp_pattern_test.main = function() {
    for (let s of JSArrayOfString().of(["a", "a|b", "(?:)", "^", "$", "^$", "$^", "", "\\\\", "/", "[^]", " "])) {
      expect$.Expect.equals(s, core.RegExp.new(s).pattern);
    }
  };
  dart.fn(reg_exp_pattern_test.main, VoidTodynamic());
  // Exports:
  exports.reg_exp_pattern_test = reg_exp_pattern_test;
});
