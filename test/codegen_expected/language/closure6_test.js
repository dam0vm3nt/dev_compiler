dart_library.library('language/closure6_test', null, /* Imports */[
  'dart_sdk',
  'expect'
], function load__closure6_test(exports, dart_sdk, expect) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const expect$ = expect.expect;
  const closure6_test = Object.create(null);
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  closure6_test.A = class A extends core.Object {
    foo() {
      function length() {
        return 400;
      }
      dart.fn(length, VoidTodynamic());
      let box_0 = 28;
      let x = 29;
      let f = dart.fn(() => dart.dsend(dart.dsend(dart.dsend(length(), '+', box_0), '+', x), '+', this.bar()), VoidTodynamic());
      return f();
    }
    bar() {
      return 42;
    }
  };
  dart.setSignature(closure6_test.A, {
    methods: () => ({
      foo: dart.definiteFunctionType(dart.dynamic, []),
      bar: dart.definiteFunctionType(dart.dynamic, [])
    })
  });
  closure6_test.main = function() {
    expect$.Expect.equals(499, new closure6_test.A().foo());
  };
  dart.fn(closure6_test.main, VoidTodynamic());
  // Exports:
  exports.closure6_test = closure6_test;
});
