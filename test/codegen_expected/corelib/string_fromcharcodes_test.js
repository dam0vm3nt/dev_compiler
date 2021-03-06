dart_library.library('corelib/string_fromcharcodes_test', null, /* Imports */[
  'dart_sdk',
  'expect'
], function load__string_fromcharcodes_test(exports, dart_sdk, expect) {
  'use strict';
  const core = dart_sdk.core;
  const typed_data = dart_sdk.typed_data;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const expect$ = expect.expect;
  const string_fromcharcodes_test = Object.create(null);
  let IterableOfint = () => (IterableOfint = dart.constFn(core.Iterable$(core.int)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let intTodynamic = () => (intTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [core.int])))();
  let dynamic__Todynamic = () => (dynamic__Todynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [dart.dynamic], [dart.dynamic])))();
  let dynamicAnddynamic__Todynamic = () => (dynamicAnddynamic__Todynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [dart.dynamic, dart.dynamic], [dart.dynamic, dart.dynamic])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [])))();
  let dynamic__Todynamic$ = () => (dynamic__Todynamic$ = dart.constFn(dart.definiteFunctionType(dart.dynamic, [dart.dynamic], [dart.dynamic, dart.dynamic])))();
  let VoidToString = () => (VoidToString = dart.constFn(dart.definiteFunctionType(core.String, [])))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.definiteFunctionType(core.bool, [dart.dynamic])))();
  let dynamic__Tovoid = () => (dynamic__Tovoid = dart.constFn(dart.definiteFunctionType(dart.void, [dart.dynamic], [dart.dynamic, dart.dynamic])))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [dart.dynamic])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  string_fromcharcodes_test.main = function() {
    function iter(count, values) {
      if (values === void 0) values = null;
      return core.List.is(values) ? core.Iterable.generate(core.int._check(count), dart.fn(x => values[dartx.get](x), intTodynamic())) : core.Iterable.generate(core.int._check(count), dart.fn(x => values, intTodynamic()));
    }
    dart.fn(iter, dynamic__Todynamic());
    function test(expect, iter, start, end) {
      if (start === void 0) start = 0;
      if (end === void 0) end = null;
      let actual = core.String.fromCharCodes(IterableOfint()._check(iter), core.int._check(start), core.int._check(end));
      expect$.Expect.equals(expect, actual);
    }
    dart.fn(test, dynamicAnddynamic__Todynamic());
    function testThrows(iterable, start, end) {
      if (start === void 0) start = 0;
      if (end === void 0) end = null;
      expect$.Expect.throws(dart.fn(() => {
        core.String.fromCharCodes(IterableOfint()._check(iterable), core.int._check(start), core.int._check(end));
      }, VoidTovoid()));
    }
    dart.fn(testThrows, dynamic__Todynamic$());
    test("", iter(0));
    test("", []);
    test("", const$ || (const$ = dart.constList([], dart.dynamic)));
    test("", core.List.new(0));
    test("", typed_data.Uint8List.new(0));
    test("", typed_data.Uint16List.new(0));
    test("", typed_data.Uint32List.new(0));
    test("", ""[dartx.codeUnits]);
    test(" ", iter(1, 0));
    test(" ", JSArrayOfint().of([0]));
    test(" ", const$0 || (const$0 = dart.constList([0], core.int)));
    test(" ", (() => {
      let _ = core.List.new(1);
      _[dartx.set](0, 0);
      return _;
    })());
    test(" ", typed_data.Uint8List.new(1));
    test(" ", typed_data.Uint16List.new(1));
    test(" ", typed_data.Uint32List.new(1));
    test(" ", " "[dartx.codeUnits]);
    test("ÿ", iter(1, 255));
    test("ÿ", JSArrayOfint().of([255]));
    test("ÿ", const$1 || (const$1 = dart.constList([255], core.int)));
    test("ÿ", (() => {
      let _ = core.List.new(1);
      _[dartx.set](0, 255);
      return _;
    })());
    test("ÿ", (() => {
      let _ = typed_data.Uint8List.new(1);
      _[dartx.set](0, 255);
      return _;
    })());
    test("ÿ", (() => {
      let _ = typed_data.Uint16List.new(1);
      _[dartx.set](0, 255);
      return _;
    })());
    test("ÿ", (() => {
      let _ = typed_data.Uint32List.new(1);
      _[dartx.set](0, 255);
      return _;
    })());
    test("ÿ", "ÿ"[dartx.codeUnits]);
    test("Ā", iter(1, 256));
    test("Ā", JSArrayOfint().of([256]));
    test("Ā", const$2 || (const$2 = dart.constList([256], core.int)));
    test("Ā", (() => {
      let _ = core.List.new(1);
      _[dartx.set](0, 256);
      return _;
    })());
    test("Ā", (() => {
      let _ = typed_data.Uint16List.new(1);
      _[dartx.set](0, 256);
      return _;
    })());
    test("Ā", (() => {
      let _ = typed_data.Uint32List.new(1);
      _[dartx.set](0, 256);
      return _;
    })());
    test("Ā", "Ā"[dartx.codeUnits]);
    test("￿", iter(1, 65535));
    test("￿", JSArrayOfint().of([65535]));
    test("￿", const$3 || (const$3 = dart.constList([65535], core.int)));
    test("￿", (() => {
      let _ = core.List.new(1);
      _[dartx.set](0, 65535);
      return _;
    })());
    test("￿", (() => {
      let _ = typed_data.Uint16List.new(1);
      _[dartx.set](0, 65535);
      return _;
    })());
    test("￿", (() => {
      let _ = typed_data.Uint32List.new(1);
      _[dartx.set](0, 65535);
      return _;
    })());
    test("￿", "￿"[dartx.codeUnits]);
    test("𐀀", iter(1, 65536));
    test("𐀀", JSArrayOfint().of([65536]));
    test("𐀀", const$4 || (const$4 = dart.constList([65536], core.int)));
    test("𐀀", (() => {
      let _ = core.List.new(1);
      _[dartx.set](0, 65536);
      return _;
    })());
    test("𐀀", (() => {
      let _ = typed_data.Uint32List.new(1);
      _[dartx.set](0, 65536);
      return _;
    })());
    test("𐀀", "𐀀"[dartx.codeUnits]);
    test("􏿿", iter(1, 1114111));
    test("􏿿", JSArrayOfint().of([1114111]));
    test("􏿿", const$5 || (const$5 = dart.constList([1114111], core.int)));
    test("􏿿", (() => {
      let _ = core.List.new(1);
      _[dartx.set](0, 1114111);
      return _;
    })());
    test("􏿿", (() => {
      let _ = typed_data.Uint32List.new(1);
      _[dartx.set](0, 1114111);
      return _;
    })());
    test("􏿿", iter(2, JSArrayOfint().of([56319, 57343])));
    test("􏿿", JSArrayOfint().of([56319, 57343]));
    test("􏿿", const$6 || (const$6 = dart.constList([56319, 57343], core.int)));
    test("􏿿", (() => {
      let _ = core.List.new(2);
      _[dartx.set](0, 56319);
      _[dartx.set](1, 57343);
      return _;
    })());
    test("􏿿", (() => {
      let _ = typed_data.Uint16List.new(2);
      _[dartx.set](0, 56319);
      _[dartx.set](1, 57343);
      return _;
    })());
    test("􏿿", (() => {
      let _ = typed_data.Uint32List.new(2);
      _[dartx.set](0, 56319);
      _[dartx.set](1, 57343);
      return _;
    })());
    test("􏿿", "􏿿"[dartx.codeUnits]);
    let leadSurrogate = "􏿿"[dartx.get](0);
    test(leadSurrogate, iter(1, 56319));
    test(leadSurrogate, JSArrayOfint().of([56319]));
    test(leadSurrogate, const$7 || (const$7 = dart.constList([56319], core.int)));
    test(leadSurrogate, (() => {
      let _ = core.List.new(1);
      _[dartx.set](0, 56319);
      return _;
    })());
    test(leadSurrogate, (() => {
      let _ = typed_data.Uint16List.new(1);
      _[dartx.set](0, 56319);
      return _;
    })());
    test(leadSurrogate, (() => {
      let _ = typed_data.Uint32List.new(1);
      _[dartx.set](0, 56319);
      return _;
    })());
    test(leadSurrogate, leadSurrogate[dartx.codeUnits]);
    let tailSurrogate = "􏿿"[dartx.get](1);
    test(tailSurrogate, iter(1, 57343));
    test(tailSurrogate, JSArrayOfint().of([57343]));
    test(tailSurrogate, const$8 || (const$8 = dart.constList([57343], core.int)));
    test(tailSurrogate, (() => {
      let _ = core.List.new(1);
      _[dartx.set](0, 57343);
      return _;
    })());
    test(tailSurrogate, (() => {
      let _ = typed_data.Uint16List.new(1);
      _[dartx.set](0, 57343);
      return _;
    })());
    test(tailSurrogate, (() => {
      let _ = typed_data.Uint32List.new(1);
      _[dartx.set](0, 57343);
      return _;
    })());
    test(tailSurrogate, tailSurrogate[dartx.codeUnits]);
    testThrows(null);
    testThrows("not an iterable");
    testThrows(42);
    testThrows(JSArrayOfint().of([-1]));
    testThrows((() => {
      let _ = core.List.new(1);
      _[dartx.set](0, -1);
      return _;
    })());
    testThrows(const$9 || (const$9 = dart.constList([-1], core.int)));
    testThrows((() => {
      let _ = typed_data.Int8List.new(1);
      _[dartx.set](0, -1);
      return _;
    })());
    testThrows((() => {
      let _ = typed_data.Int16List.new(1);
      _[dartx.set](0, -1);
      return _;
    })());
    testThrows((() => {
      let _ = typed_data.Int32List.new(1);
      _[dartx.set](0, -1);
      return _;
    })());
    testThrows(JSArrayOfint().of([1114112]));
    testThrows((() => {
      let _ = core.List.new(1);
      _[dartx.set](0, 1114112);
      return _;
    })());
    testThrows(const$10 || (const$10 = dart.constList([1114112], core.int)));
    testThrows((() => {
      let _ = typed_data.Int32List.new(1);
      _[dartx.set](0, 1114112);
      return _;
    })());
    let list = const$11 || (const$11 = dart.constList([65, 66, 67, 68, 69, 70, 71, 72], core.int));
    for (let iterable of [iter(list[dartx.length], list), list[dartx.toList]({growable: true}), list[dartx.toList]({growable: false}), list, (() => {
        let _ = typed_data.Uint8List.new(8);
        _[dartx.setRange](0, 8, list);
        return _;
      })(), (() => {
        let _ = typed_data.Uint16List.new(8);
        _[dartx.setRange](0, 8, list);
        return _;
      })(), (() => {
        let _ = typed_data.Uint32List.new(8);
        _[dartx.setRange](0, 8, list);
        return _;
      })(), "ABCDEFGH"[dartx.codeUnits]]) {
      test("ABCDEFGH", iterable);
      test("ABCDEFGH", iterable, 0);
      test("BCDEFGH", iterable, 1);
      test("H", iterable, 7);
      test("", iterable, 8);
      test("ABCDEFGH", iterable, 0);
      test("A", iterable, 0, 1);
      test("AB", iterable, 0, 2);
      test("ABCDEFG", iterable, 0, 7);
      test("ABCDEFGH", iterable, 0, 8);
      test("", iterable, 0, 0);
      test("ABCDEFGH", iterable, 0, 8);
      test("AB", iterable, 0, 2);
      test("GH", iterable, 6, 8);
      test("DE", iterable, 3, 5);
      test("", iterable, 3, 3);
    }
    test(leadSurrogate, JSArrayOfint().of([56319, 57343]), 0, 1);
    test(tailSurrogate, JSArrayOfint().of([56319, 57343]), 1);
    test("􏿿", JSArrayOfint().of([1114111]), 0, 1);
    function testThrowsRange(iterable, start, end) {
      if (start === void 0) start = 0;
      if (end === void 0) end = null;
      expect$.Expect.throws(dart.fn(() => core.String.fromCharCodes(IterableOfint()._check(iterable), core.int._check(start), core.int._check(end)), VoidToString()), dart.fn(e => core.RangeError.is(e), dynamicTobool()));
    }
    dart.fn(testThrowsRange, dynamic__Tovoid());
    function testSubstring(string) {
      let codes = dart.dload(string, 'codeUnits');
      let length = core.int._check(dart.dload(string, 'length'));
      for (let iterable of [iter(length, codes), dart.dsend(codes, 'toList', {growable: true}), dart.dsend(codes, 'toList', {growable: false}), (() => {
          let _ = typed_data.Uint16List.new(length);
          _[dartx.setRange](0, length, IterableOfint()._check(codes));
          return _;
        })(), (() => {
          let _ = typed_data.Int32List.new(length);
          _[dartx.setRange](0, length, IterableOfint()._check(codes));
          return _;
        })(), (() => {
          let _ = typed_data.Uint32List.new(length);
          _[dartx.setRange](0, length, IterableOfint()._check(codes));
          return _;
        })(), codes]) {
        let newString = core.String.fromCharCodes(IterableOfint()._check(iterable));
        expect$.Expect.equals(string, newString);
        for (let i = 0; i < dart.notNull(length); i = i * 2 + 1) {
          test(dart.dsend(string, 'substring', i), iterable, i);
          test(dart.dsend(string, 'substring', 0, i), iterable, 0, i);
          for (let j = 0; i + j < dart.notNull(length); j = j * 2 + 1) {
            test(dart.dsend(string, 'substring', i, i + j), iterable, i, i + j);
          }
        }
        testThrowsRange(iterable, -1);
        testThrowsRange(iterable, 0, -1);
        testThrowsRange(iterable, 2, 1);
        testThrowsRange(iterable, 0, dart.notNull(length) + 1);
        testThrowsRange(iterable, dart.notNull(length) + 1);
        testThrowsRange(iterable, dart.notNull(length) + 1, dart.notNull(length) + 2);
      }
    }
    dart.fn(testSubstring, dynamicTodynamic());
    testSubstring("");
    testSubstring("ABCDEFGH");
    testSubstring("ABCDEFGH"[dartx['*']](33));
    testSubstring(" "[dartx['*']](357));
    testSubstring("�￾𐀀􏿿c "[dartx['*']](37));
    let megaList = "abcde"[dartx['*']](200000)[dartx.codeUnits][dartx.toList]();
    test("abcde"[dartx['*']](199998), megaList, 5, 999995);
    test("abcde"[dartx['*']](199998), typed_data.Uint8List.fromList(megaList), 5, 999995);
    let cLatin1 = const$12 || (const$12 = dart.constList([0, 255], core.int));
    let cUtf16 = const$13 || (const$13 = dart.constList([0, 65535, 57343, 56319, 57343, 56319], core.int));
    let cCodepoints = const$14 || (const$14 = dart.constList([0, 65535, 57343, 1114111, 56319], core.int));
    let gLatin1 = cLatin1[dartx.toList]({growable: true});
    let gUtf16 = cUtf16[dartx.toList]({growable: true});
    let gCodepoints = cCodepoints[dartx.toList]({growable: true});
    let fLatin1 = cLatin1[dartx.toList]({growable: false});
    let fUtf16 = cUtf16[dartx.toList]({growable: false});
    let fCodepoints = cCodepoints[dartx.toList]({growable: false});
    let bLatin1 = typed_data.Uint8List.new(2);
    bLatin1[dartx.setRange](0, 2, cLatin1);
    let wLatin1 = typed_data.Uint16List.new(2);
    wLatin1[dartx.setRange](0, 2, cLatin1);
    let wUtf16 = typed_data.Uint16List.new(6);
    wUtf16[dartx.setRange](0, 6, cUtf16);
    let lLatin1 = typed_data.Uint32List.new(2);
    lLatin1[dartx.setRange](0, 2, cLatin1);
    let lUtf16 = typed_data.Uint32List.new(6);
    lUtf16[dartx.setRange](0, 6, cUtf16);
    let lCodepoints = typed_data.Uint32List.new(5);
    lCodepoints[dartx.setRange](0, 5, cCodepoints);
    let bvLatin1 = typed_data.Uint8List.view(bLatin1[dartx.buffer]);
    let wvLatin1 = typed_data.Uint16List.view(wLatin1[dartx.buffer]);
    let wvUtf16 = typed_data.Uint16List.view(wUtf16[dartx.buffer]);
    let lvLatin1 = typed_data.Uint32List.view(lLatin1[dartx.buffer]);
    let lvUtf16 = typed_data.Uint32List.view(lUtf16[dartx.buffer]);
    let lvCodepoints = typed_data.Uint32List.view(lCodepoints[dartx.buffer]);
    let buffer = typed_data.Uint8List.new(200)[dartx.buffer];
    let bbLatin1 = typed_data.Uint8List.view(buffer, 3, 2);
    bbLatin1[dartx.setAll](0, bLatin1);
    let wbLatin1 = typed_data.Uint16List.view(buffer, 8, 2);
    wbLatin1[dartx.setAll](0, wLatin1);
    let wbUtf16 = typed_data.Uint16List.view(buffer, 16, 6);
    wbUtf16[dartx.setAll](0, wUtf16);
    let lbLatin1 = typed_data.Uint32List.view(buffer, 32, 2);
    lbLatin1[dartx.setAll](0, lLatin1);
    let lbUtf16 = typed_data.Uint32List.view(buffer, 64, 6);
    lbUtf16[dartx.setAll](0, lUtf16);
    let lbCodepoints = typed_data.Uint32List.view(buffer, 128, 5);
    lbCodepoints[dartx.setAll](0, lCodepoints);
    let sLatin1 = " ÿ";
    let sUnicode = dart.str` ￿${tailSurrogate}${leadSurrogate}${tailSurrogate}${leadSurrogate}`;
    for (let i = 0; i < 2; i++) {
      for (let j = i + 1; j < 2; j++) {
        test(sLatin1[dartx.substring](i, j), cLatin1, i, j);
        test(sLatin1[dartx.substring](i, j), gLatin1, i, j);
        test(sLatin1[dartx.substring](i, j), fLatin1, i, j);
        test(sLatin1[dartx.substring](i, j), bLatin1, i, j);
        test(sLatin1[dartx.substring](i, j), wLatin1, i, j);
        test(sLatin1[dartx.substring](i, j), lLatin1, i, j);
        test(sLatin1[dartx.substring](i, j), bvLatin1, i, j);
        test(sLatin1[dartx.substring](i, j), wvLatin1, i, j);
        test(sLatin1[dartx.substring](i, j), lvLatin1, i, j);
        test(sLatin1[dartx.substring](i, j), bbLatin1, i, j);
        test(sLatin1[dartx.substring](i, j), wbLatin1, i, j);
        test(sLatin1[dartx.substring](i, j), lbLatin1, i, j);
      }
    }
    for (let i = 0; i < 6; i++) {
      for (let j = i + 1; j < 6; j++) {
        test(sUnicode[dartx.substring](i, j), cUtf16, i, j);
        test(sUnicode[dartx.substring](i, j), gUtf16, i, j);
        test(sUnicode[dartx.substring](i, j), fUtf16, i, j);
        test(sUnicode[dartx.substring](i, j), wUtf16, i, j);
        test(sUnicode[dartx.substring](i, j), lUtf16, i, j);
        test(sUnicode[dartx.substring](i, j), wvUtf16, i, j);
        test(sUnicode[dartx.substring](i, j), lvUtf16, i, j);
        test(sUnicode[dartx.substring](i, j), wbUtf16, i, j);
        test(sUnicode[dartx.substring](i, j), lbUtf16, i, j);
      }
    }
    for (let i = 0; i < 5; i++) {
      for (let j = i + 1; j < 5; j++) {
        let stringEnd = j < 4 ? j : j + 1;
        test(sUnicode[dartx.substring](i, stringEnd), cCodepoints, i, j);
        test(sUnicode[dartx.substring](i, stringEnd), gCodepoints, i, j);
        test(sUnicode[dartx.substring](i, stringEnd), fCodepoints, i, j);
        test(sUnicode[dartx.substring](i, stringEnd), lCodepoints, i, j);
        test(sUnicode[dartx.substring](i, stringEnd), lvCodepoints, i, j);
        test(sUnicode[dartx.substring](i, stringEnd), lbCodepoints, i, j);
      }
    }
  };
  dart.fn(string_fromcharcodes_test.main, VoidTodynamic());
  // Exports:
  exports.string_fromcharcodes_test = string_fromcharcodes_test;
});
