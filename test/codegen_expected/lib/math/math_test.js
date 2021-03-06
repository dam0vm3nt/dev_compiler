dart_library.library('lib/math/math_test', null, /* Imports */[
  'dart_sdk',
  'expect'
], function load__math_test(exports, dart_sdk, expect) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const expect$ = expect.expect;
  const math_test = Object.create(null);
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  math_test.MathTest = class MathTest extends core.Object {
    static testConstants() {
      expect$.Expect.equals(2.718281828459045, math.E);
      expect$.Expect.equals(2.302585092994046, math.LN10);
      expect$.Expect.equals(0.6931471805599453, math.LN2);
      expect$.Expect.equals(1.4426950408889634, math.LOG2E);
      expect$.Expect.equals(0.4342944819032518, math.LOG10E);
      expect$.Expect.equals(3.141592653589793, math.PI);
      expect$.Expect.equals(0.7071067811865476, math.SQRT1_2);
      expect$.Expect.equals(1.4142135623730951, math.SQRT2);
    }
    static checkClose(a, b, EPSILON) {
      expect$.Expect.equals(true, dart.notNull(a) - dart.notNull(core.num._check(EPSILON)) <= dart.notNull(b));
      expect$.Expect.equals(true, dart.notNull(b) <= dart.notNull(a) + dart.notNull(core.num._check(EPSILON)));
    }
    static testSin() {
      let EPSILON = 1e-15;
      math_test.MathTest.checkClose(0.0, math.sin(0.0), EPSILON);
      math_test.MathTest.checkClose(0.0, math.sin(math.PI), EPSILON);
      math_test.MathTest.checkClose(0.0, math.sin(2.0 * math.PI), EPSILON);
      math_test.MathTest.checkClose(1.0, math.sin(math.PI / 2.0), EPSILON);
      math_test.MathTest.checkClose(-1.0, math.sin(math.PI * (3.0 / 2.0)), EPSILON);
    }
    static testCos() {
      let EPSILON = 1e-15;
      math_test.MathTest.checkClose(1.0, math.cos(0.0), EPSILON);
      math_test.MathTest.checkClose(-1.0, math.cos(math.PI), EPSILON);
      math_test.MathTest.checkClose(1.0, math.cos(2.0 * math.PI), EPSILON);
      math_test.MathTest.checkClose(0.0, math.cos(math.PI / 2.0), EPSILON);
      math_test.MathTest.checkClose(0.0, math.cos(math.PI * (3.0 / 2.0)), EPSILON);
    }
    static testTan() {
      let EPSILON = 1e-15;
      math_test.MathTest.checkClose(0.0, math.tan(0.0), EPSILON);
      math_test.MathTest.checkClose(0.0, math.tan(math.PI), EPSILON);
      math_test.MathTest.checkClose(0.0, math.tan(2.0 * math.PI), EPSILON);
      math_test.MathTest.checkClose(1.0, math.tan(math.PI / 4.0), EPSILON);
    }
    static testAsin() {
      let EPSILON = 1e-15;
      math_test.MathTest.checkClose(0.0, math.asin(0.0), EPSILON);
      math_test.MathTest.checkClose(math.PI / 2.0, math.asin(1.0), EPSILON);
      math_test.MathTest.checkClose(-math.PI / 2.0, math.asin(-1.0), EPSILON);
    }
    static testAcos() {
      let EPSILON = 1e-15;
      math_test.MathTest.checkClose(0.0, math.acos(1.0), EPSILON);
      math_test.MathTest.checkClose(math.PI, math.acos(-1.0), EPSILON);
      math_test.MathTest.checkClose(math.PI / 2.0, math.acos(0.0), EPSILON);
    }
    static testAtan() {
      let EPSILON = 1e-15;
      math_test.MathTest.checkClose(0.0, math.atan(0.0), EPSILON);
      math_test.MathTest.checkClose(math.PI / 4.0, math.atan(1.0), EPSILON);
      math_test.MathTest.checkClose(-math.PI / 4.0, math.atan(-1.0), EPSILON);
    }
    static testAtan2() {
      let EPSILON = 1e-15;
      math_test.MathTest.checkClose(0.0, math.atan2(0.0, 5.0), EPSILON);
      math_test.MathTest.checkClose(math.PI / 4.0, math.atan2(2.0, 2.0), EPSILON);
      math_test.MathTest.checkClose(3 * math.PI / 4.0, math.atan2(0.5, -0.5), EPSILON);
      math_test.MathTest.checkClose(-3 * math.PI / 4.0, math.atan2(-2.5, -2.5), EPSILON);
    }
    static checkVeryClose(a, b) {
      if (a == 0.0) {
        let minimalDouble = 5e-324;
        expect$.Expect.equals(true, dart.notNull(b[dartx.abs]()) <= minimalDouble);
        return;
      }
      if (b == 0.0) {
        expect$.Expect.equals(a, b);
      }
      let shiftRightBy52 = 2.220446049250313e-16;
      let shiftedA = (dart.notNull(a) * shiftRightBy52)[dartx.abs]();
      let limitLow = dart.notNull(a) - dart.notNull(shiftedA);
      let limitHigh = dart.notNull(a) + dart.notNull(shiftedA);
      expect$.Expect.equals(false, a == limitLow);
      expect$.Expect.equals(false, a == limitHigh);
      expect$.Expect.equals(true, limitLow <= dart.notNull(b));
      expect$.Expect.equals(true, dart.notNull(b) <= limitHigh);
    }
    static testSqrt() {
      math_test.MathTest.checkVeryClose(2.0, math.sqrt(4.0));
      math_test.MathTest.checkVeryClose(math.SQRT2, math.sqrt(2.0));
      math_test.MathTest.checkVeryClose(math.SQRT1_2, math.sqrt(0.5));
      math_test.MathTest.checkVeryClose(1e+50, math.sqrt(1e+100));
      math_test.MathTest.checkVeryClose(1.1111111061110855e+56, math.sqrt(1.2345678901234e+112));
    }
    static testExp() {
      math_test.MathTest.checkVeryClose(math.E, math.exp(1.0));
      let EPSILON = 1e-15;
      math_test.MathTest.checkClose(10.0, math.exp(math.LN10), EPSILON);
      math_test.MathTest.checkClose(2.0, math.exp(math.LN2), EPSILON);
    }
    static testLog() {
      math_test.MathTest.checkClose(1.0, math.log(math.E), 1e-16);
      math_test.MathTest.checkVeryClose(math.LN10, math.log(10.0));
      math_test.MathTest.checkVeryClose(math.LN2, math.log(2.0));
    }
    static parseIntThrowsFormatException(str) {
      try {
        core.int.parse(core.String._check(str));
        return false;
      } catch (e) {
        if (core.FormatException.is(e)) {
          return true;
        } else
          throw e;
      }

    }
    static testParseInt() {
      expect$.Expect.equals(499, core.int.parse("499"));
      expect$.Expect.equals(499, core.int.parse("+499"));
      expect$.Expect.equals(-499, core.int.parse("-499"));
      expect$.Expect.equals(499, core.int.parse("   499   "));
      expect$.Expect.equals(499, core.int.parse("   +499   "));
      expect$.Expect.equals(-499, core.int.parse("   -499   "));
      expect$.Expect.equals(0, core.int.parse("0"));
      expect$.Expect.equals(0, core.int.parse("+0"));
      expect$.Expect.equals(0, core.int.parse("-0"));
      expect$.Expect.equals(0, core.int.parse("   0   "));
      expect$.Expect.equals(0, core.int.parse("   +0   "));
      expect$.Expect.equals(0, core.int.parse("   -0   "));
      expect$.Expect.equals(78187493520, core.int.parse("0x1234567890"));
      expect$.Expect.equals(-78187493520, core.int.parse("-0x1234567890"));
      expect$.Expect.equals(78187493520, core.int.parse("   0x1234567890   "));
      expect$.Expect.equals(-78187493520, core.int.parse("   -0x1234567890   "));
      expect$.Expect.equals(256, core.int.parse("0x100"));
      expect$.Expect.equals(-256, core.int.parse("-0x100"));
      expect$.Expect.equals(256, core.int.parse("   0x100   "));
      expect$.Expect.equals(-256, core.int.parse("   -0x100   "));
      expect$.Expect.equals(11259375, core.int.parse("0xabcdef"));
      expect$.Expect.equals(11259375, core.int.parse("0xABCDEF"));
      expect$.Expect.equals(11259375, core.int.parse("0xabCDEf"));
      expect$.Expect.equals(-11259375, core.int.parse("-0xabcdef"));
      expect$.Expect.equals(-11259375, core.int.parse("-0xABCDEF"));
      expect$.Expect.equals(11259375, core.int.parse("   0xabcdef   "));
      expect$.Expect.equals(11259375, core.int.parse("   0xABCDEF   "));
      expect$.Expect.equals(-11259375, core.int.parse("   -0xabcdef   "));
      expect$.Expect.equals(-11259375, core.int.parse("   -0xABCDEF   "));
      expect$.Expect.equals(11259375, core.int.parse("0x00000abcdef"));
      expect$.Expect.equals(11259375, core.int.parse("0x00000ABCDEF"));
      expect$.Expect.equals(-11259375, core.int.parse("-0x00000abcdef"));
      expect$.Expect.equals(-11259375, core.int.parse("-0x00000ABCDEF"));
      expect$.Expect.equals(11259375, core.int.parse("   0x00000abcdef   "));
      expect$.Expect.equals(11259375, core.int.parse("   0x00000ABCDEF   "));
      expect$.Expect.equals(-11259375, core.int.parse("   -0x00000abcdef   "));
      expect$.Expect.equals(-11259375, core.int.parse("   -0x00000ABCDEF   "));
      expect$.Expect.equals(10, core.int.parse("010"));
      expect$.Expect.equals(-10, core.int.parse("-010"));
      expect$.Expect.equals(10, core.int.parse("   010   "));
      expect$.Expect.equals(-10, core.int.parse("   -010   "));
      expect$.Expect.equals(9, core.int.parse("09"));
      expect$.Expect.equals(9, core.int.parse(" 09 "));
      expect$.Expect.equals(-9, core.int.parse("-09"));
      expect$.Expect.equals(78187493520, core.int.parse("+0x1234567890"));
      expect$.Expect.equals(78187493520, core.int.parse("   +0x1234567890   "));
      expect$.Expect.equals(256, core.int.parse("+0x100"));
      expect$.Expect.equals(256, core.int.parse("   +0x100   "));
      expect$.Expect.equals(true, math_test.MathTest.parseIntThrowsFormatException("1b"));
      expect$.Expect.equals(true, math_test.MathTest.parseIntThrowsFormatException(" 1b "));
      expect$.Expect.equals(true, math_test.MathTest.parseIntThrowsFormatException(" 1 b "));
      expect$.Expect.equals(true, math_test.MathTest.parseIntThrowsFormatException("1e2"));
      expect$.Expect.equals(true, math_test.MathTest.parseIntThrowsFormatException(" 1e2 "));
      expect$.Expect.equals(true, math_test.MathTest.parseIntThrowsFormatException("00x12"));
      expect$.Expect.equals(true, math_test.MathTest.parseIntThrowsFormatException(" 00x12 "));
      expect$.Expect.equals(true, math_test.MathTest.parseIntThrowsFormatException("-1b"));
      expect$.Expect.equals(true, math_test.MathTest.parseIntThrowsFormatException(" -1b "));
      expect$.Expect.equals(true, math_test.MathTest.parseIntThrowsFormatException(" -1 b "));
      expect$.Expect.equals(true, math_test.MathTest.parseIntThrowsFormatException("-1e2"));
      expect$.Expect.equals(true, math_test.MathTest.parseIntThrowsFormatException(" -1e2 "));
      expect$.Expect.equals(true, math_test.MathTest.parseIntThrowsFormatException("-00x12"));
      expect$.Expect.equals(true, math_test.MathTest.parseIntThrowsFormatException(" -00x12 "));
      expect$.Expect.equals(true, math_test.MathTest.parseIntThrowsFormatException("  -00x12 "));
      expect$.Expect.equals(true, math_test.MathTest.parseIntThrowsFormatException("0x0x12"));
      expect$.Expect.equals(true, math_test.MathTest.parseIntThrowsFormatException("0.1"));
      expect$.Expect.equals(true, math_test.MathTest.parseIntThrowsFormatException("0x3.1"));
      expect$.Expect.equals(true, math_test.MathTest.parseIntThrowsFormatException("5."));
      expect$.Expect.equals(true, math_test.MathTest.parseIntThrowsFormatException("+-5"));
      expect$.Expect.equals(true, math_test.MathTest.parseIntThrowsFormatException("-+5"));
      expect$.Expect.equals(true, math_test.MathTest.parseIntThrowsFormatException("--5"));
      expect$.Expect.equals(true, math_test.MathTest.parseIntThrowsFormatException("++5"));
      expect$.Expect.equals(true, math_test.MathTest.parseIntThrowsFormatException("+ 5"));
      expect$.Expect.equals(true, math_test.MathTest.parseIntThrowsFormatException("- 5"));
      expect$.Expect.equals(true, math_test.MathTest.parseIntThrowsFormatException(""));
      expect$.Expect.equals(true, math_test.MathTest.parseIntThrowsFormatException("  "));
    }
    static testMain() {
      math_test.MathTest.testConstants();
      math_test.MathTest.testSin();
      math_test.MathTest.testCos();
      math_test.MathTest.testTan();
      math_test.MathTest.testAsin();
      math_test.MathTest.testAcos();
      math_test.MathTest.testAtan();
      math_test.MathTest.testAtan2();
      math_test.MathTest.testSqrt();
      math_test.MathTest.testLog();
      math_test.MathTest.testExp();
      math_test.MathTest.testParseInt();
    }
  };
  dart.setSignature(math_test.MathTest, {
    statics: () => ({
      testConstants: dart.definiteFunctionType(dart.void, []),
      checkClose: dart.definiteFunctionType(dart.dynamic, [core.double, core.double, dart.dynamic]),
      testSin: dart.definiteFunctionType(dart.void, []),
      testCos: dart.definiteFunctionType(dart.void, []),
      testTan: dart.definiteFunctionType(dart.void, []),
      testAsin: dart.definiteFunctionType(dart.void, []),
      testAcos: dart.definiteFunctionType(dart.void, []),
      testAtan: dart.definiteFunctionType(dart.void, []),
      testAtan2: dart.definiteFunctionType(dart.void, []),
      checkVeryClose: dart.definiteFunctionType(dart.dynamic, [core.double, core.double]),
      testSqrt: dart.definiteFunctionType(dart.void, []),
      testExp: dart.definiteFunctionType(dart.void, []),
      testLog: dart.definiteFunctionType(dart.void, []),
      parseIntThrowsFormatException: dart.definiteFunctionType(core.bool, [dart.dynamic]),
      testParseInt: dart.definiteFunctionType(dart.void, []),
      testMain: dart.definiteFunctionType(dart.dynamic, [])
    }),
    names: ['testConstants', 'checkClose', 'testSin', 'testCos', 'testTan', 'testAsin', 'testAcos', 'testAtan', 'testAtan2', 'checkVeryClose', 'testSqrt', 'testExp', 'testLog', 'parseIntThrowsFormatException', 'testParseInt', 'testMain']
  });
  math_test.main = function() {
    math_test.MathTest.testMain();
  };
  dart.fn(math_test.main, VoidTodynamic());
  // Exports:
  exports.math_test = math_test;
});
