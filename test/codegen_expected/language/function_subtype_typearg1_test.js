dart_library.library('language/function_subtype_typearg1_test', null, /* Imports */[
  'dart_sdk',
  'expect'
], function load__function_subtype_typearg1_test(exports, dart_sdk, expect) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const expect$ = expect.expect;
  const function_subtype_typearg1_test = Object.create(null);
  let C = () => (C = dart.constFn(function_subtype_typearg1_test.C$()))();
  let COff2 = () => (COff2 = dart.constFn(function_subtype_typearg1_test.C$(function_subtype_typearg1_test.f2)))();
  let COff1 = () => (COff1 = dart.constFn(function_subtype_typearg1_test.C$(function_subtype_typearg1_test.f1)))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  function_subtype_typearg1_test.C$ = dart.generic(T => {
    class C extends core.Object {}
    dart.addTypeTests(C);
    return C;
  });
  function_subtype_typearg1_test.C = C();
  function_subtype_typearg1_test.I = class I extends core.Object {};
  function_subtype_typearg1_test.J = class J extends function_subtype_typearg1_test.I {};
  function_subtype_typearg1_test.f1 = dart.typedef('f1', () => dart.functionType(dart.void, [function_subtype_typearg1_test.C$(function_subtype_typearg1_test.J)]));
  function_subtype_typearg1_test.f2 = dart.typedef('f2', () => dart.functionType(dart.void, [function_subtype_typearg1_test.C$(function_subtype_typearg1_test.I)]));
  function_subtype_typearg1_test.main = function() {
    expect$.Expect.isTrue(COff1().is(new (COff2())()));
  };
  dart.fn(function_subtype_typearg1_test.main, VoidTodynamic());
  // Exports:
  exports.function_subtype_typearg1_test = function_subtype_typearg1_test;
});
