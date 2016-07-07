dart_library.library('language/override_inheritance_method_test_26_multi', null, /* Imports */[
  'dart_sdk'
], function load__override_inheritance_method_test_26_multi(exports, dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const override_inheritance_method_test_26_multi = Object.create(null);
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  override_inheritance_method_test_26_multi.A = class A extends core.Object {
    method26() {}
  };
  dart.setSignature(override_inheritance_method_test_26_multi.A, {
    methods: () => ({method26: dart.definiteFunctionType(dart.void, [])})
  });
  override_inheritance_method_test_26_multi.B = class B extends override_inheritance_method_test_26_multi.A {};
  override_inheritance_method_test_26_multi.I = class I extends core.Object {};
  override_inheritance_method_test_26_multi.J = class J extends core.Object {};
  override_inheritance_method_test_26_multi.Class = class Class extends override_inheritance_method_test_26_multi.B {
    method26() {
      return null;
    }
  };
  override_inheritance_method_test_26_multi.Class[dart.implements] = () => [override_inheritance_method_test_26_multi.I, override_inheritance_method_test_26_multi.J];
  dart.setSignature(override_inheritance_method_test_26_multi.Class, {
    methods: () => ({method26: dart.definiteFunctionType(core.int, [])})
  });
  override_inheritance_method_test_26_multi.SubClass = class SubClass extends override_inheritance_method_test_26_multi.Class {};
  override_inheritance_method_test_26_multi.main = function() {
    new override_inheritance_method_test_26_multi.SubClass();
  };
  dart.fn(override_inheritance_method_test_26_multi.main, VoidTodynamic());
  // Exports:
  exports.override_inheritance_method_test_26_multi = override_inheritance_method_test_26_multi;
});
