dart_library.library('language/super_in_async2_test', null, /* Imports */[
  'dart_sdk',
  'expect'
], function load__super_in_async2_test(exports, dart_sdk, expect) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const expect$ = expect.expect;
  const super_in_async2_test = Object.create(null);
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  super_in_async2_test.A = class A extends core.Object {
    foo() {
      return dart.async(function*() {
        return 42;
      }, core.int);
    }
  };
  dart.setSignature(super_in_async2_test.A, {
    methods: () => ({foo: dart.definiteFunctionType(async.Future$(core.int), [])})
  });
  const super$foo = Symbol("super$foo");
  const super$foo$ = Symbol("super$foo");
  super_in_async2_test.B = class B extends super_in_async2_test.A {
    foo() {
      return dart.async((function*() {
        let x = (yield this[super$foo]());
        let y = (yield this[super$foo$]());
        return dart.notNull(x) + dart.notNull(y);
      }).bind(this), core.int);
    }
    [super$foo]() {
      return super.foo();
    }
    [super$foo$]() {
      return super.foo();
    }
  };
  super_in_async2_test.main = function() {
    return dart.async(function*() {
      expect$.Expect.equals(84, yield new super_in_async2_test.B().foo());
    }, dart.dynamic);
  };
  dart.fn(super_in_async2_test.main, VoidTodynamic());
  // Exports:
  exports.super_in_async2_test = super_in_async2_test;
});
