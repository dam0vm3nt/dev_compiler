dart_library.library('corelib/string_runes_test', null, /* Imports */[
  'dart_sdk',
  'expect'
], function load__string_runes_test(exports, dart_sdk, expect) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const expect$ = expect.expect;
  const string_runes_test = Object.create(null);
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let intToString = () => (intToString = dart.constFn(dart.definiteFunctionType(core.String, [core.int])))();
  let StringAndListOfintTodynamic = () => (StringAndListOfintTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [core.String, ListOfint()])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [])))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.definiteFunctionType(core.bool, [dart.dynamic])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  string_runes_test.main = function() {
    function test(s, expectedRunes) {
      let runes = s[dartx.runes];
      expect$.Expect.identical(s, runes.string);
      let res = [];
      for (let rune of runes) {
        res[dartx.add](rune);
      }
      expect$.Expect.listEquals(expectedRunes, res);
      res = [];
      for (let it = (() => {
        let _ = runes.iterator;
        _.reset(s[dartx.length]);
        return _;
      })(); dart.test(it.movePrevious());) {
        res[dartx.add](it.current);
      }
      expect$.Expect.listEquals(expectedRunes[dartx.reversed][dartx.toList](), res);
      let it = runes.iterator;
      it.rawIndex = 1;
      expect$.Expect.equals(expectedRunes[dartx.get](1), it.current);
      it = runes.iterator;
      it.moveNext();
      expect$.Expect.equals(0, it.rawIndex);
      it.moveNext();
      expect$.Expect.equals(1, it.rawIndex);
      it.moveNext();
      expect$.Expect.isTrue(1 < dart.notNull(it.rawIndex));
      it.rawIndex = 1;
      expect$.Expect.equals(1, it.rawIndex);
      expect$.Expect.equals(expectedRunes[dartx.get](1), it.current);
      it.reset(1);
      expect$.Expect.equals(null, it.rawIndex);
      expect$.Expect.equals(null, it.current);
      it.moveNext();
      expect$.Expect.equals(1, it.rawIndex);
      expect$.Expect.equals(expectedRunes[dartx.get](1), it.current);
      it.reset(1);
      expect$.Expect.equals(null, it.rawIndex);
      expect$.Expect.equals(null, it.current);
      it.movePrevious();
      expect$.Expect.equals(0, it.rawIndex);
      expect$.Expect.equals(expectedRunes[dartx.get](0), it.current);
      expect$.Expect.listEquals(expectedRunes[dartx.map](core.String)(dart.fn(x => x[dartx.toRadixString](16), intToString()))[dartx.toList](), runes.map(core.String)(dart.fn(x => x[dartx.toRadixString](16), intToString()))[dartx.toList]());
    }
    dart.fn(test, StringAndListOfintTodynamic());
    test("abc", JSArrayOfint().of([97, 98, 99]));
    test("   ", JSArrayOfint().of([0, 0, 0]));
    test("￿𐀀􏿿", JSArrayOfint().of([65535, 65536, 1114111]));
    let string = core.String.fromCharCodes(JSArrayOfint().of([56320, 55296, 61, 55296, 56320, 62, 56320, 55296]));
    test(string, JSArrayOfint().of([56320, 55296, 61, 65536, 62, 56320, 55296]));
    let r = new core.Runes("𐀀");
    let it = r.iterator;
    it.moveNext();
    expect$.Expect.equals(65536, it.current);
    expect$.Expect.throws(dart.fn(() => {
      it.rawIndex = 1;
    }, VoidTovoid()), dart.fn(e => core.Error.is(e), dynamicTobool()));
    expect$.Expect.throws(dart.fn(() => {
      it.reset(1);
    }, VoidTovoid()), dart.fn(e => core.Error.is(e), dynamicTobool()));
  };
  dart.fn(string_runes_test.main, VoidTodynamic());
  // Exports:
  exports.string_runes_test = string_runes_test;
});
