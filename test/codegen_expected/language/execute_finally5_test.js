dart_library.library('language/execute_finally5_test', null, /* Imports */[
  'dart_sdk',
  'expect'
], function load__execute_finally5_test(exports, dart_sdk, expect) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const expect$ = expect.expect;
  const execute_finally5_test = Object.create(null);
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  execute_finally5_test.Helper = class Helper extends core.Object {
    new() {
      this.i = 0;
    }
    f1(param) {
      if (param == 0) {
        try {
          let j = null;
          j = execute_finally5_test.Helper.func();
          try {
            this.i = 1;
            return this.i;
          } finally {
            this.i = dart.notNull(this.i) + 400;
          }
          this.i = 2;
          return this.i;
        } finally {
          this.i = dart.notNull(this.i) + 800;
        }
        return dart.notNull(this.i) + 200;
      }
      try {
        let j = null;
        j = execute_finally5_test.Helper.func();
        try {
          this.i = 4;
          return this.i;
        } finally {
          this.i = dart.notNull(this.i) + 100;
        }
        this.i = 2;
        return this.i;
      } finally {
        this.i = dart.notNull(this.i) + 200;
      }
      return dart.notNull(this.i) + 200;
    }
    static func() {
      let i = 0;
      while (i < 10) {
        i++;
      }
      return i;
    }
  };
  dart.setSignature(execute_finally5_test.Helper, {
    constructors: () => ({new: dart.definiteFunctionType(execute_finally5_test.Helper, [])}),
    methods: () => ({f1: dart.definiteFunctionType(core.int, [core.int])}),
    statics: () => ({func: dart.definiteFunctionType(core.int, [])}),
    names: ['func']
  });
  execute_finally5_test.ExecuteFinally5Test = class ExecuteFinally5Test extends core.Object {
    static testMain() {
      let obj = new execute_finally5_test.Helper();
      expect$.Expect.equals(1, obj.f1(0));
      expect$.Expect.equals(1201, obj.i);
      expect$.Expect.equals(4, obj.f1(1));
      expect$.Expect.equals(304, obj.i);
    }
  };
  dart.setSignature(execute_finally5_test.ExecuteFinally5Test, {
    statics: () => ({testMain: dart.definiteFunctionType(dart.dynamic, [])}),
    names: ['testMain']
  });
  execute_finally5_test.main = function() {
    execute_finally5_test.ExecuteFinally5Test.testMain();
  };
  dart.fn(execute_finally5_test.main, VoidTodynamic());
  // Exports:
  exports.execute_finally5_test = execute_finally5_test;
});
