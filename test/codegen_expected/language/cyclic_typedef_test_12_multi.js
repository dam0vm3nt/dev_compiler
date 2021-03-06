dart_library.library('language/cyclic_typedef_test_12_multi', null, /* Imports */[
  'dart_sdk'
], function load__cyclic_typedef_test_12_multi(exports, dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const cyclic_typedef_test_12_multi = Object.create(null);
  let ATovoid = () => (ATovoid = dart.constFn(dart.definiteFunctionType(dart.void, [cyclic_typedef_test_12_multi.A])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [])))();
  cyclic_typedef_test_12_multi.A = dart.typedef('A', () => dart.functionType(dart.dynamic, [cyclic_typedef_test_12_multi.Class]));
  cyclic_typedef_test_12_multi.B = dart.typedef('B', () => dart.functionType(dart.dynamic, [cyclic_typedef_test_12_multi.A]));
  cyclic_typedef_test_12_multi.C = dart.typedef('C', () => dart.functionType(dart.dynamic, [cyclic_typedef_test_12_multi.B]));
  cyclic_typedef_test_12_multi.Class = class Class extends core.Object {
    new() {
      this.a = null;
    }
  };
  cyclic_typedef_test_12_multi.testA = function(a) {
  };
  dart.fn(cyclic_typedef_test_12_multi.testA, ATovoid());
  cyclic_typedef_test_12_multi.main = function() {
    cyclic_typedef_test_12_multi.testA(null);
  };
  dart.fn(cyclic_typedef_test_12_multi.main, VoidTovoid());
  // Exports:
  exports.cyclic_typedef_test_12_multi = cyclic_typedef_test_12_multi;
});
