dart_library.library('language/issue14014_2_test', null, /* Imports */[
  'dart_sdk'
], function load__issue14014_2_test(exports, dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const issue14014_2_test = Object.create(null);
  let A = () => (A = dart.constFn(issue14014_2_test.A$()))();
  let B = () => (B = dart.constFn(issue14014_2_test.B$()))();
  let BOfint = () => (BOfint = dart.constFn(issue14014_2_test.B$(core.int)))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  issue14014_2_test.A$ = dart.generic(T => {
    class A extends core.Object {
      new(f) {
      }
    }
    dart.addTypeTests(A);
    dart.setSignature(A, {
      constructors: () => ({new: dart.definiteFunctionType(issue14014_2_test.A$(T), [dart.dynamic])})
    });
    return A;
  });
  issue14014_2_test.A = A();
  issue14014_2_test.B$ = dart.generic(T => {
    let TTovoid = () => (TTovoid = dart.constFn(dart.functionType(dart.void, [T])))();
    let TToint = () => (TToint = dart.constFn(dart.definiteFunctionType(core.int, [T])))();
    let TTodynamic = () => (TTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [T])))();
    class B extends issue14014_2_test.A$(T) {
      new(opts) {
        let f = opts && 'f' in opts ? opts.f : null;
        super.new(dart.fn(a => {
          f = dart.fn(a => 42, TToint());
        }, TTodynamic()));
      }
    }
    dart.setSignature(B, {
      constructors: () => ({new: dart.definiteFunctionType(issue14014_2_test.B$(T), [], {f: TTovoid()})})
    });
    return B;
  });
  issue14014_2_test.B = B();
  issue14014_2_test.main = function() {
    let t = new (BOfint())();
  };
  dart.fn(issue14014_2_test.main, VoidTodynamic());
  // Exports:
  exports.issue14014_2_test = issue14014_2_test;
});
