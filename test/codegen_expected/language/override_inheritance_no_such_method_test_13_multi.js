dart_library.library('language/override_inheritance_no_such_method_test_13_multi', null, /* Imports */[
  'dart_sdk'
], function load__override_inheritance_no_such_method_test_13_multi(exports, dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const override_inheritance_no_such_method_test_13_multi = Object.create(null);
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  override_inheritance_no_such_method_test_13_multi.A = class A extends core.Object {};
  override_inheritance_no_such_method_test_13_multi.I = class I extends core.Object {};
  override_inheritance_no_such_method_test_13_multi.Class1 = class Class1 extends override_inheritance_no_such_method_test_13_multi.A {};
  override_inheritance_no_such_method_test_13_multi.Class1[dart.implements] = () => [override_inheritance_no_such_method_test_13_multi.I];
  override_inheritance_no_such_method_test_13_multi.B = class B extends core.Object {
    noSuchMethod(_) {
      return null;
    }
    method13(...args) {
      return this.noSuchMethod(new dart.InvocationImpl('method13', args, {isMethod: true}));
    }
  };
  override_inheritance_no_such_method_test_13_multi.Class2 = class Class2 extends override_inheritance_no_such_method_test_13_multi.B {
    method13(...args) {
      return this.noSuchMethod(new dart.InvocationImpl('method13', args, {isMethod: true}));
    }
  };
  override_inheritance_no_such_method_test_13_multi.main = function() {
    new override_inheritance_no_such_method_test_13_multi.Class1();
    new override_inheritance_no_such_method_test_13_multi.Class2();
  };
  dart.fn(override_inheritance_no_such_method_test_13_multi.main, VoidTodynamic());
  // Exports:
  exports.override_inheritance_no_such_method_test_13_multi = override_inheritance_no_such_method_test_13_multi;
});
