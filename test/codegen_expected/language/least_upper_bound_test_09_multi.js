dart_library.library('language/least_upper_bound_test_09_multi', null, /* Imports */[
  'dart_sdk'
], function load__least_upper_bound_test_09_multi(exports, dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const least_upper_bound_test_09_multi = Object.create(null);
  let E = () => (E = dart.constFn(least_upper_bound_test_09_multi.E$()))();
  let F = () => (F = dart.constFn(least_upper_bound_test_09_multi.F$()))();
  let FOfC = () => (FOfC = dart.constFn(least_upper_bound_test_09_multi.F$(least_upper_bound_test_09_multi.C)))();
  let EOfB = () => (EOfB = dart.constFn(least_upper_bound_test_09_multi.E$(least_upper_bound_test_09_multi.B)))();
  let EOfC = () => (EOfC = dart.constFn(least_upper_bound_test_09_multi.E$(least_upper_bound_test_09_multi.C)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [])))();
  let AAndBTovoid = () => (AAndBTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [least_upper_bound_test_09_multi.A, least_upper_bound_test_09_multi.B])))();
  let BAndCTovoid = () => (BAndCTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [least_upper_bound_test_09_multi.B, least_upper_bound_test_09_multi.C])))();
  let CAndDTovoid = () => (CAndDTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [least_upper_bound_test_09_multi.C, least_upper_bound_test_09_multi.D])))();
  let EOfBAndEOfCTovoid = () => (EOfBAndEOfCTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [EOfB(), EOfC()])))();
  let EOfBAndFOfCTovoid = () => (EOfBAndFOfCTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [EOfB(), FOfC()])))();
  least_upper_bound_test_09_multi.A = class A extends core.Object {
    new() {
      this.a = null;
    }
  };
  least_upper_bound_test_09_multi.B = class B extends core.Object {
    new() {
      this.b = null;
    }
  };
  least_upper_bound_test_09_multi.C = class C extends least_upper_bound_test_09_multi.B {
    new() {
      this.c = null;
      super.new();
    }
  };
  least_upper_bound_test_09_multi.D = class D extends least_upper_bound_test_09_multi.B {
    new() {
      this.d = null;
      super.new();
    }
  };
  least_upper_bound_test_09_multi.E$ = dart.generic(T => {
    class E extends core.Object {
      new(e) {
        this.e = e;
      }
    }
    dart.addTypeTests(E);
    dart.setSignature(E, {
      constructors: () => ({new: dart.definiteFunctionType(least_upper_bound_test_09_multi.E$(T), [T])})
    });
    return E;
  });
  least_upper_bound_test_09_multi.E = E();
  least_upper_bound_test_09_multi.F$ = dart.generic(T => {
    class F extends least_upper_bound_test_09_multi.E$(T) {
      new(f) {
        this.f = f;
        super.new(f);
      }
    }
    dart.setSignature(F, {
      constructors: () => ({new: dart.definiteFunctionType(least_upper_bound_test_09_multi.F$(T), [T])})
    });
    return F;
  });
  least_upper_bound_test_09_multi.F = F();
  least_upper_bound_test_09_multi.main = function() {
    least_upper_bound_test_09_multi.testAB(new least_upper_bound_test_09_multi.A(), new least_upper_bound_test_09_multi.B());
    least_upper_bound_test_09_multi.testBC(new least_upper_bound_test_09_multi.C(), new least_upper_bound_test_09_multi.C());
    least_upper_bound_test_09_multi.testCD(new least_upper_bound_test_09_multi.C(), new least_upper_bound_test_09_multi.D());
    least_upper_bound_test_09_multi.testEE(new (FOfC())(new least_upper_bound_test_09_multi.C()), new (FOfC())(new least_upper_bound_test_09_multi.C()));
    least_upper_bound_test_09_multi.testEF(new (FOfC())(new least_upper_bound_test_09_multi.C()), new (FOfC())(new least_upper_bound_test_09_multi.C()));
  };
  dart.fn(least_upper_bound_test_09_multi.main, VoidTovoid());
  least_upper_bound_test_09_multi.testAB = function(a, b) {
    let c = new least_upper_bound_test_09_multi.C();
  };
  dart.fn(least_upper_bound_test_09_multi.testAB, AAndBTovoid());
  least_upper_bound_test_09_multi.testBC = function(b, c) {
    (true ? b : c).b = 0;
    let a = null;
  };
  dart.fn(least_upper_bound_test_09_multi.testBC, BAndCTovoid());
  least_upper_bound_test_09_multi.testCD = function(c, d) {
  };
  dart.fn(least_upper_bound_test_09_multi.testCD, CAndDTovoid());
  least_upper_bound_test_09_multi.testEE = function(e, f) {
    try {
    } catch (e) {
    }

  };
  dart.fn(least_upper_bound_test_09_multi.testEE, EOfBAndEOfCTovoid());
  least_upper_bound_test_09_multi.testEF = function(e, f) {
    try {
    } catch (e) {
    }

    let r5 = null;
  };
  dart.fn(least_upper_bound_test_09_multi.testEF, EOfBAndFOfCTovoid());
  // Exports:
  exports.least_upper_bound_test_09_multi = least_upper_bound_test_09_multi;
});
