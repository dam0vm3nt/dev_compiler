dart_library.library('corelib/double_floor_to_double_test', null, /* Imports */[
  'dart_sdk',
  'expect'
], function load__double_floor_to_double_test(exports, dart_sdk, expect) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const expect$ = expect.expect;
  const double_floor_to_double_test = Object.create(null);
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  double_floor_to_double_test.main = function() {
    expect$.Expect.equals(0.0, 0.0[dartx.floorToDouble]());
    expect$.Expect.equals(0.0, core.double.MIN_POSITIVE[dartx.floorToDouble]());
    expect$.Expect.equals(0.0, (2.0 * dart.notNull(core.double.MIN_POSITIVE))[dartx.floorToDouble]());
    expect$.Expect.equals(0.0, 1.18e-38[dartx.floorToDouble]());
    expect$.Expect.equals(0.0, (1.18e-38 * 2)[dartx.floorToDouble]());
    expect$.Expect.equals(0.0, 0.49999999999999994[dartx.floorToDouble]());
    expect$.Expect.equals(0.0, 0.5[dartx.floorToDouble]());
    expect$.Expect.equals(0.0, 0.9999999999999999[dartx.floorToDouble]());
    expect$.Expect.equals(1.0, 1.0[dartx.floorToDouble]());
    expect$.Expect.equals(1.0, 1.000000000000001[dartx.floorToDouble]());
    expect$.Expect.equals(4503599627370496.0, 4503599627370496.0[dartx.floorToDouble]());
    expect$.Expect.equals(4503599627370497.0, 4503599627370497.0[dartx.floorToDouble]());
    expect$.Expect.equals(4503599627370498.0, 4503599627370498.0[dartx.floorToDouble]());
    expect$.Expect.equals(4503599627370499.0, 4503599627370499.0[dartx.floorToDouble]());
    expect$.Expect.equals(9007199254740991.0, 9007199254740991.0[dartx.floorToDouble]());
    expect$.Expect.equals(9007199254740992.0, 9007199254740992.0[dartx.floorToDouble]());
    expect$.Expect.equals(core.double.MAX_FINITE, core.double.MAX_FINITE[dartx.floorToDouble]());
    expect$.Expect.equals(-1.0, (-dart.notNull(core.double.MIN_POSITIVE))[dartx.floorToDouble]());
    expect$.Expect.equals(-1.0, (2.0 * -dart.notNull(core.double.MIN_POSITIVE))[dartx.floorToDouble]());
    expect$.Expect.equals(-1.0, (-1.18e-38)[dartx.floorToDouble]());
    expect$.Expect.equals(-1.0, (-1.18e-38 * 2)[dartx.floorToDouble]());
    expect$.Expect.equals(-1.0, (-0.49999999999999994)[dartx.floorToDouble]());
    expect$.Expect.equals(-1.0, (-0.5)[dartx.floorToDouble]());
    expect$.Expect.equals(-1.0, (-0.9999999999999999)[dartx.floorToDouble]());
    expect$.Expect.equals(-1.0, (-1.0)[dartx.floorToDouble]());
    expect$.Expect.equals(-2.0, (-1.000000000000001)[dartx.floorToDouble]());
    expect$.Expect.equals(-4503599627370496.0, (-4503599627370496.0)[dartx.floorToDouble]());
    expect$.Expect.equals(-4503599627370497.0, (-4503599627370497.0)[dartx.floorToDouble]());
    expect$.Expect.equals(-4503599627370498.0, (-4503599627370498.0)[dartx.floorToDouble]());
    expect$.Expect.equals(-4503599627370499.0, (-4503599627370499.0)[dartx.floorToDouble]());
    expect$.Expect.equals(-9007199254740991.0, (-9007199254740991.0)[dartx.floorToDouble]());
    expect$.Expect.equals(-9007199254740992.0, (-9007199254740992.0)[dartx.floorToDouble]());
    expect$.Expect.equals(-dart.notNull(core.double.MAX_FINITE), (-dart.notNull(core.double.MAX_FINITE))[dartx.floorToDouble]());
    expect$.Expect.equals(core.double.INFINITY, core.double.INFINITY[dartx.floorToDouble]());
    expect$.Expect.equals(core.double.NEGATIVE_INFINITY, core.double.NEGATIVE_INFINITY[dartx.floorToDouble]());
    expect$.Expect.isTrue(core.double.NAN[dartx.floorToDouble]()[dartx.isNaN]);
    expect$.Expect.isTrue(typeof 0.0[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof core.double.MIN_POSITIVE[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof (2.0 * dart.notNull(core.double.MIN_POSITIVE))[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof 1.18e-38[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof (1.18e-38 * 2)[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof 0.49999999999999994[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof 0.5[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof 0.9999999999999999[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof 1.0[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof 1.000000000000001[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof 4503599627370496.0[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof 4503599627370497.0[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof 4503599627370498.0[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof 4503599627370499.0[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof 9007199254740991.0[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof 9007199254740992.0[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof core.double.MAX_FINITE[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof (-dart.notNull(core.double.MIN_POSITIVE))[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof (2.0 * -dart.notNull(core.double.MIN_POSITIVE))[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof (-1.18e-38)[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof (-1.18e-38 * 2)[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof (-0.49999999999999994)[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof (-0.5)[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof (-0.9999999999999999)[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof (-1.0)[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof (-1.000000000000001)[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof (-4503599627370496.0)[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof (-4503599627370497.0)[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof (-4503599627370498.0)[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof (-4503599627370499.0)[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof (-9007199254740991.0)[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof (-9007199254740992.0)[dartx.floorToDouble]() == 'number');
    expect$.Expect.isTrue(typeof (-dart.notNull(core.double.MAX_FINITE))[dartx.floorToDouble]() == 'number');
  };
  dart.fn(double_floor_to_double_test.main, VoidTodynamic());
  // Exports:
  exports.double_floor_to_double_test = double_floor_to_double_test;
});
