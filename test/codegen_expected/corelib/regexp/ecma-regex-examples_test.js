dart_library.library('corelib/regexp/ecma-regex-examples_test', null, /* Imports */[
  'dart_sdk',
  'expect'
], function load__ecma$45regex$45examples_test(exports, dart_sdk, expect) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const expect$ = expect.expect;
  const ecma$45regex$45examples_test = Object.create(null);
  const v8_regexp_utils = Object.create(null);
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.functionType(dart.void, [])))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let MatchToString = () => (MatchToString = dart.constFn(dart.definiteFunctionType(core.String, [core.Match])))();
  let VoidTovoid$ = () => (VoidTovoid$ = dart.constFn(dart.definiteFunctionType(dart.void, [])))();
  let dynamicAnddynamic__Tovoid = () => (dynamicAnddynamic__Tovoid = dart.constFn(dart.definiteFunctionType(dart.void, [dart.dynamic, dart.dynamic], [core.String])))();
  let dynamic__Tovoid = () => (dynamic__Tovoid = dart.constFn(dart.definiteFunctionType(dart.void, [dart.dynamic], [core.String])))();
  let dynamic__Tovoid$ = () => (dynamic__Tovoid$ = dart.constFn(dart.definiteFunctionType(dart.void, [dart.dynamic], [core.num])))();
  let dynamicAnddynamicAndnumTovoid = () => (dynamicAnddynamicAndnumTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [dart.dynamic, dart.dynamic, core.num])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [dart.dynamic])))();
  let StringAndRegExpToMatch = () => (StringAndRegExpToMatch = dart.constFn(dart.definiteFunctionType(core.Match, [core.String, core.RegExp])))();
  let StringAndRegExpToListOfString = () => (StringAndRegExpToListOfString = dart.constFn(dart.definiteFunctionType(ListOfString(), [core.String, core.RegExp])))();
  ecma$45regex$45examples_test.main = function() {
    v8_regexp_utils.description("This page tests the regex examples from the ECMA-262 specification.");
    let regex01 = core.RegExp.new("a|ab");
    v8_regexp_utils.shouldBe(regex01.firstMatch("abc"), JSArrayOfString().of(["a"]));
    let regex02 = core.RegExp.new("((a)|(ab))((c)|(bc))");
    v8_regexp_utils.shouldBe(regex02.firstMatch("abc"), JSArrayOfString().of(["abc", "a", "a", null, "bc", null, "bc"]));
    let regex03 = core.RegExp.new("a[a-z]{2,4}");
    v8_regexp_utils.shouldBe(regex03.firstMatch("abcdefghi"), JSArrayOfString().of(["abcde"]));
    let regex04 = core.RegExp.new("a[a-z]{2,4}?");
    v8_regexp_utils.shouldBe(regex04.firstMatch("abcdefghi"), JSArrayOfString().of(["abc"]));
    let regex05 = core.RegExp.new("(aa|aabaac|ba|b|c)*");
    v8_regexp_utils.shouldBe(regex05.firstMatch("aabaac"), JSArrayOfString().of(["aaba", "ba"]));
    let regex06 = core.RegExp.new("^(a+)\\1*,\\1+$");
    expect$.Expect.equals("aaaaaaaaaa,aaaaaaaaaaaaaaa"[dartx.replaceAllMapped](regex06, dart.fn(m => m.group(1), MatchToString())), "aaaaa");
    let regex07 = core.RegExp.new("(z)((a+)?(b+)?(c))*");
    v8_regexp_utils.shouldBe(regex07.firstMatch("zaacbbbcac"), JSArrayOfString().of(["zaacbbbcac", "z", "ac", "a", null, "c"]));
    let regex08 = core.RegExp.new("(a*)*");
    v8_regexp_utils.shouldBe(regex08.firstMatch("b"), JSArrayOfString().of(["", null]));
    let regex09 = core.RegExp.new("(a*)b\\1+");
    v8_regexp_utils.shouldBe(regex09.firstMatch("baaaac"), JSArrayOfString().of(["b", ""]));
    let regex10 = core.RegExp.new("(?=(a+))");
    v8_regexp_utils.shouldBe(regex10.firstMatch("baaabac"), JSArrayOfString().of(["", "aaa"]));
    let regex11 = core.RegExp.new("(?=(a+))a*b\\1");
    v8_regexp_utils.shouldBe(regex11.firstMatch("baaabac"), JSArrayOfString().of(["aba", "a"]));
    let regex12 = core.RegExp.new("(.*?)a(?!(a+)b\\2c)\\2(.*)");
    v8_regexp_utils.shouldBe(regex12.firstMatch("baaabaac"), JSArrayOfString().of(["baaabaac", "ba", null, "abaac"]));
  };
  dart.fn(ecma$45regex$45examples_test.main, VoidTovoid$());
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
  exports.ecma$45regex$45examples_test = ecma$45regex$45examples_test;
  exports.v8_regexp_utils = v8_regexp_utils;
});
