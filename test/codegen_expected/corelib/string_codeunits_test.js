dart_library.library('corelib/string_codeunits_test', null, /* Imports */[
  'dart_sdk',
  'expect'
], function load__string_codeunits_test(exports, dart_sdk, expect) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const expect$ = expect.expect;
  const string_codeunits_test = Object.create(null);
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let intToString = () => (intToString = dart.constFn(dart.definiteFunctionType(core.String, [core.int])))();
  let VoidToint = () => (VoidToint = dart.constFn(dart.definiteFunctionType(core.int, [])))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.definiteFunctionType(core.bool, [dart.dynamic])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [])))();
  let StringTodynamic = () => (StringTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [core.String])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  string_codeunits_test.main = function() {
    function test(s) {
      let units = s[dartx.codeUnits];
      let expectedUnits = JSArrayOfint().of([]);
      for (let i = 0; i < dart.notNull(s[dartx.length]); i++) {
        expectedUnits[dartx.add](s[dartx.codeUnitAt](i));
      }
      expect$.Expect.equals(s[dartx.length], units[dartx.length]);
      for (let i = 0; i < dart.notNull(s[dartx.length]); i++) {
        expect$.Expect.equals(s[dartx.codeUnitAt](i), units[dartx.elementAt](i));
      }
      let res = [];
      for (let unit of units) {
        res[dartx.add](unit);
      }
      expect$.Expect.listEquals(expectedUnits, res);
      expect$.Expect.listEquals(expectedUnits[dartx.map](core.String)(dart.fn(x => x[dartx.toRadixString](16), intToString()))[dartx.toList](), units[dartx.map](core.String)(dart.fn(x => x[dartx.toRadixString](16), intToString()))[dartx.toList]());
      if (s == "") {
        expect$.Expect.throws(dart.fn(() => units[dartx.first], VoidToint()), dart.fn(e => core.StateError.is(e), dynamicTobool()));
        expect$.Expect.throws(dart.fn(() => units[dartx.last], VoidToint()), dart.fn(e => core.StateError.is(e), dynamicTobool()));
        expect$.Expect.throws(dart.fn(() => units[dartx.get](0), VoidToint()), dart.fn(e => core.RangeError.is(e), dynamicTobool()));
        expect$.Expect.throws(dart.fn(() => units[dartx.set](0, 499), VoidToint()), dart.fn(e => core.UnsupportedError.is(e), dynamicTobool()));
        expect$.Expect.listEquals([], units[dartx.sublist](0, 0));
        expect$.Expect.equals(-1, units[dartx.indexOf](42));
        expect$.Expect.equals(-1, units[dartx.lastIndexOf](499));
      } else {
        expect$.Expect.equals(s[dartx.codeUnitAt](0), units[dartx.first]);
        expect$.Expect.equals(s[dartx.codeUnitAt](dart.notNull(s[dartx.length]) - 1), units[dartx.last]);
        expect$.Expect.equals(s[dartx.codeUnitAt](0), units[dartx.get](0));
        expect$.Expect.throws(dart.fn(() => {
          units[dartx.set](0, 499);
        }, VoidTovoid()), dart.fn(e => core.UnsupportedError.is(e), dynamicTobool()));
        let sub = units[dartx.sublist](1);
        expect$.Expect.listEquals(s[dartx.substring](1, s[dartx.length])[dartx.codeUnits], sub);
        expect$.Expect.equals(-1, units[dartx.indexOf](-1));
        expect$.Expect.equals(0, units[dartx.indexOf](units[dartx.get](0)));
        expect$.Expect.equals(-1, units[dartx.lastIndexOf](-1));
        expect$.Expect.equals(dart.notNull(units[dartx.length]) - 1, units[dartx.lastIndexOf](units[dartx.get](dart.notNull(units[dartx.length]) - 1)));
      }
      let reversed = units[dartx.reversed];
      let i = dart.notNull(units[dartx.length]) - 1;
      for (let codeUnit of reversed) {
        core.int._check(codeUnit);
        expect$.Expect.equals(units[dartx.get](i--), codeUnit);
      }
    }
    dart.fn(test, StringTodynamic());
    test("");
    test("abc");
    test("   ");
    test("￿𐀀􏿿");
    let string = core.String.fromCharCodes(JSArrayOfint().of([56320, 55296, 61, 55723, 55723, 56815, 56815, 62, 56320, 55296]));
    test(string);
    string = " ÿĀ﻿￯￿" + "𐀀𒍅𝠀𝰀🿯🿿";
    test(string);
    let r = "𐀀"[dartx.codeUnits];
    let it = r[dartx.iterator];
    expect$.Expect.isTrue(it.moveNext());
    expect$.Expect.equals(55296, it.current);
    expect$.Expect.isTrue(it.moveNext());
    expect$.Expect.equals(56320, it.current);
  };
  dart.fn(string_codeunits_test.main, VoidTodynamic());
  // Exports:
  exports.string_codeunits_test = string_codeunits_test;
});
