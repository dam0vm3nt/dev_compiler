dart_library.library('language/field_override4_test_01_multi', null, /* Imports */[
  'dart_sdk',
  'expect'
], function load__field_override4_test_01_multi(exports, dart_sdk, expect) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const expect$ = expect.expect;
  const field_override4_test_01_multi = Object.create(null);
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  field_override4_test_01_multi.A = class A extends core.Object {
    get foo() {
      return 42;
    }
  };
  field_override4_test_01_multi.B = class B extends field_override4_test_01_multi.A {
    new() {
      this[foo] = 42;
    }
    get foo() {
      return this[foo];
    }
    set foo(value) {
      this[foo] = value;
    }
  };
  const foo = Symbol(field_override4_test_01_multi.B.name + "." + 'foo'.toString());
  field_override4_test_01_multi.main = function() {
    expect$.Expect.equals(42, new field_override4_test_01_multi.B().foo);
  };
  dart.fn(field_override4_test_01_multi.main, VoidTodynamic());
  // Exports:
  exports.field_override4_test_01_multi = field_override4_test_01_multi;
});
