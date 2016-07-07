dart_library.library('corelib/regexp/indexof_test', null, /* Imports */[
  'dart_sdk',
  'expect'
], function load__indexof_test(exports, dart_sdk, expect) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const expect$ = expect.expect;
  const indexof_test = Object.create(null);
  const v8_regexp_utils = Object.create(null);
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let JSArrayOfListOfint = () => (JSArrayOfListOfint = dart.constFn(_interceptors.JSArray$(ListOfint())))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.functionType(dart.void, [])))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let dynamicAnddynamicAnddynamicTodynamic = () => (dynamicAnddynamicAnddynamicTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [dart.dynamic, dart.dynamic, dart.dynamic])))();
  let VoidTovoid$ = () => (VoidTovoid$ = dart.constFn(dart.definiteFunctionType(dart.void, [])))();
  let dynamicAnddynamic__Tovoid = () => (dynamicAnddynamic__Tovoid = dart.constFn(dart.definiteFunctionType(dart.void, [dart.dynamic, dart.dynamic], [core.String])))();
  let dynamic__Tovoid = () => (dynamic__Tovoid = dart.constFn(dart.definiteFunctionType(dart.void, [dart.dynamic], [core.String])))();
  let dynamic__Tovoid$ = () => (dynamic__Tovoid$ = dart.constFn(dart.definiteFunctionType(dart.void, [dart.dynamic], [core.num])))();
  let dynamicAnddynamicAndnumTovoid = () => (dynamicAnddynamicAndnumTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [dart.dynamic, dart.dynamic, core.num])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [dart.dynamic])))();
  let StringAndRegExpToMatch = () => (StringAndRegExpToMatch = dart.constFn(dart.definiteFunctionType(core.Match, [core.String, core.RegExp])))();
  let MatchToString = () => (MatchToString = dart.constFn(dart.definiteFunctionType(core.String, [core.Match])))();
  let StringAndRegExpToListOfString = () => (StringAndRegExpToListOfString = dart.constFn(dart.definiteFunctionType(ListOfString(), [core.String, core.RegExp])))();
  indexof_test.main = function() {
    function CheckMatch(re, str, matches) {
      v8_regexp_utils.assertEquals(dart.dsend(dart.dload(matches, 'length'), '>', 0), dart.dsend(re, 'hasMatch', str));
      let result = dart.dsend(dart.dsend(re, 'allMatches', str), 'toList');
      if (dart.test(dart.dsend(dart.dload(matches, 'length'), '>', 0))) {
        v8_regexp_utils.assertEquals(dart.dload(matches, 'length'), dart.dload(result, 'length'));
        let lastExpected = null;
        let lastFrom = null;
        let lastLength = null;
        for (let idx = 0; idx < dart.notNull(core.num._check(dart.dload(matches, 'length'))); idx++) {
          let from = dart.dindex(dart.dindex(matches, idx), 0);
          let length = dart.dindex(dart.dindex(matches, idx), 1);
          let expected = dart.dsend(str, 'substring', from, dart.dsend(from, '+', length));
          let name = dart.str`${str}[${from}..${dart.dsend(from, '+', length)}]`;
          v8_regexp_utils.assertEquals(expected, dart.dsend(dart.dindex(result, idx), 'group', 0), name);
        }
      } else {
        v8_regexp_utils.assertTrue(dart.dload(result, 'isEmpty'));
      }
    }
    dart.fn(CheckMatch, dynamicAnddynamicAnddynamicTodynamic());
    CheckMatch(core.RegExp.new("abc"), "xxxabcxxxabcxxx", JSArrayOfListOfint().of([JSArrayOfint().of([3, 3]), JSArrayOfint().of([9, 3])]));
    CheckMatch(core.RegExp.new("abc"), "abcabcabc", JSArrayOfListOfint().of([JSArrayOfint().of([0, 3]), JSArrayOfint().of([3, 3]), JSArrayOfint().of([6, 3])]));
    CheckMatch(core.RegExp.new("aba"), "ababababa", JSArrayOfListOfint().of([JSArrayOfint().of([0, 3]), JSArrayOfint().of([4, 3])]));
    CheckMatch(core.RegExp.new("foo"), "ofooofoooofofooofo", JSArrayOfListOfint().of([JSArrayOfint().of([1, 3]), JSArrayOfint().of([5, 3]), JSArrayOfint().of([12, 3])]));
    CheckMatch(core.RegExp.new("foobarbaz"), "xx", []);
    CheckMatch(core.RegExp.new("abc"), "abababa", []);
    v8_regexp_utils.assertEquals("xxxdefxxxdefxxx", "xxxabcxxxabcxxx"[dartx.replaceAll](core.RegExp.new("abc"), "def"));
    v8_regexp_utils.assertEquals("o-o-oofo-ofo", "ofooofoooofofooofo"[dartx.replaceAll](core.RegExp.new("foo"), "-"));
    v8_regexp_utils.assertEquals("deded", "deded"[dartx.replaceAll](core.RegExp.new("x"), "-"));
    v8_regexp_utils.assertEquals("-a-b-c-d-e-f-", "abcdef"[dartx.replaceAll](core.RegExp.new(""), "-"));
    CheckMatch(core.RegExp.new("a(.)"), "xyzzyabxyzzyacxyzzy", JSArrayOfListOfint().of([JSArrayOfint().of([5, 2]), JSArrayOfint().of([12, 2])]));
    CheckMatch(core.RegExp.new("a|(?:)"), "aba", JSArrayOfListOfint().of([JSArrayOfint().of([0, 1]), JSArrayOfint().of([1, 0]), JSArrayOfint().of([2, 1]), JSArrayOfint().of([3, 0])]));
    CheckMatch(core.RegExp.new("a|(?:)"), "baba", JSArrayOfListOfint().of([JSArrayOfint().of([0, 0]), JSArrayOfint().of([1, 1]), JSArrayOfint().of([2, 0]), JSArrayOfint().of([3, 1]), JSArrayOfint().of([4, 0])]));
    CheckMatch(core.RegExp.new("a|(?:)"), "bab", JSArrayOfListOfint().of([JSArrayOfint().of([0, 0]), JSArrayOfint().of([1, 1]), JSArrayOfint().of([2, 0]), JSArrayOfint().of([3, 0])]));
  };
  dart.fn(indexof_test.main, VoidTovoid$());
  v8_regexp_utils.assertEquals = function(actual, expected, message) {
    if (message === void 0) message = null;
    expect$.Expect.equals(actual, expected, message);
  };
  dart.fn(v8_regexp_utils.assertEquals, dynamicAnddynamic__Tovoid());
  v8_regexp_utils.assertTrue = function(actual, message) {
    if (message === void 0) message = null;
    expect$.Expect.isTrue(actual, message);
  };
  dart.fn(v8_regexp_utils.assertTrue, dynamic__Tovoid());
  v8_regexp_utils.assertFalse = function(actual, message) {
    if (message === void 0) message = null;
    expect$.Expect.isFalse(actual, message);
  };
  dart.fn(v8_regexp_utils.assertFalse, dynamic__Tovoid());
  v8_regexp_utils.assertThrows = function(fn, testid) {
    if (testid === void 0) testid = null;
    expect$.Expect.throws(VoidTovoid()._check(fn), null, dart.str`Test ${testid}`);
  };
  dart.fn(v8_regexp_utils.assertThrows, dynamic__Tovoid$());
  v8_regexp_utils.assertNull = function(actual, testid) {
    if (testid === void 0) testid = null;
    expect$.Expect.isNull(actual, dart.str`Test ${testid}`);
  };
  dart.fn(v8_regexp_utils.assertNull, dynamic__Tovoid$());
  v8_regexp_utils.assertToStringEquals = function(str, match, testid) {
    let actual = [];
    for (let i = 0; i <= dart.notNull(core.num._check(dart.dload(match, 'groupCount'))); i++) {
      let g = dart.dsend(match, 'group', i);
      actual[dartx.add](g == null ? "" : g);
    }
    expect$.Expect.equals(str, actual[dartx.join](","), dart.str`Test ${testid}`);
  };
  dart.fn(v8_regexp_utils.assertToStringEquals, dynamicAnddynamicAndnumTovoid());
  v8_regexp_utils.shouldBeTrue = function(actual) {
    expect$.Expect.isTrue(actual);
  };
  dart.fn(v8_regexp_utils.shouldBeTrue, dynamicTovoid());
  v8_regexp_utils.shouldBeFalse = function(actual) {
    expect$.Expect.isFalse(actual);
  };
  dart.fn(v8_regexp_utils.shouldBeFalse, dynamicTovoid());
  v8_regexp_utils.shouldBeNull = function(actual) {
    expect$.Expect.isNull(actual);
  };
  dart.fn(v8_regexp_utils.shouldBeNull, dynamicTovoid());
  v8_regexp_utils.shouldBe = function(actual, expected, message) {
    if (message === void 0) message = null;
    if (expected == null) {
      expect$.Expect.isNull(actual, message);
    } else {
      expect$.Expect.equals(dart.dload(expected, 'length'), dart.dsend(dart.dload(actual, 'groupCount'), '+', 1));
      for (let i = 0; i <= dart.notNull(core.num._check(dart.dload(actual, 'groupCount'))); i++) {
        expect$.Expect.equals(dart.dindex(expected, i), dart.dsend(actual, 'group', i), message);
      }
    }
  };
  dart.fn(v8_regexp_utils.shouldBe, dynamicAnddynamic__Tovoid());
  v8_regexp_utils.firstMatch = function(str, pattern) {
    return pattern.firstMatch(str);
  };
  dart.fn(v8_regexp_utils.firstMatch, StringAndRegExpToMatch());
  v8_regexp_utils.allStringMatches = function(str, pattern) {
    return pattern.allMatches(str)[dartx.map](core.String)(dart.fn(m => m.group(0), MatchToString()))[dartx.toList]();
  };
  dart.fn(v8_regexp_utils.allStringMatches, StringAndRegExpToListOfString());
  v8_regexp_utils.description = function(str) {
  };
  dart.fn(v8_regexp_utils.description, dynamicTovoid());
  // Exports:
  exports.indexof_test = indexof_test;
  exports.v8_regexp_utils = v8_regexp_utils;
});
