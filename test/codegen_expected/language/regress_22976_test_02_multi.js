dart_library.library('language/regress_22976_test_02_multi', null, /* Imports */[
  'dart_sdk'
], function load__regress_22976_test_02_multi(exports, dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const regress_22976_test_02_multi = Object.create(null);
  let A = () => (A = dart.constFn(regress_22976_test_02_multi.A$()))();
  let B = () => (B = dart.constFn(regress_22976_test_02_multi.B$()))();
  let C = () => (C = dart.constFn(regress_22976_test_02_multi.C$()))();
  let COfString$int = () => (COfString$int = dart.constFn(regress_22976_test_02_multi.C$(core.String, core.int)))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  regress_22976_test_02_multi.A$ = dart.generic(T => {
    class A extends core.Object {}
    dart.addTypeTests(A);
    return A;
  });
  regress_22976_test_02_multi.A = A();
  regress_22976_test_02_multi.B$ = dart.generic(T => {
    let AOfT = () => (AOfT = dart.constFn(regress_22976_test_02_multi.A$(T)))();
    class B extends core.Object {}
    dart.addTypeTests(B);
    B[dart.implements] = () => [AOfT()];
    return B;
  });
  regress_22976_test_02_multi.B = B();
  regress_22976_test_02_multi.C$ = dart.generic((S, T) => {
    let BOfS = () => (BOfS = dart.constFn(regress_22976_test_02_multi.B$(S)))();
    let AOfT = () => (AOfT = dart.constFn(regress_22976_test_02_multi.A$(T)))();
    class C extends core.Object {}
    dart.addTypeTests(C);
    C[dart.implements] = () => [BOfS(), AOfT()];
    return C;
  });
  regress_22976_test_02_multi.C = C();
  regress_22976_test_02_multi.main = function() {
    let a1 = new (COfString$int())();
  };
  dart.fn(regress_22976_test_02_multi.main, VoidTodynamic());
  // Exports:
  exports.regress_22976_test_02_multi = regress_22976_test_02_multi;
});
