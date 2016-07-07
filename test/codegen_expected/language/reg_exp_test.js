dart_library.library('language/reg_exp_test', null, /* Imports */[
  'dart_sdk',
  'expect'
], function load__reg_exp_test(exports, dart_sdk, expect) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const expect$ = expect.expect;
  const reg_exp_test = Object.create(null);
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let IterableOfMatch = () => (IterableOfMatch = dart.constFn(core.Iterable$(core.Match)))();
  let MatchToString = () => (MatchToString = dart.constFn(dart.definiteFunctionType(core.String, [core.Match])))();
  let VoidToIterableOfMatch = () => (VoidToIterableOfMatch = dart.constFn(dart.definiteFunctionType(IterableOfMatch(), [])))();
  let VoidToMatch = () => (VoidToMatch = dart.constFn(dart.definiteFunctionType(core.Match, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [])))();
  reg_exp_test.main = function() {
    let exp = core.RegExp.new("(\\w+)");
    let str = "Parse my string";
    let matches = exp.allMatches(str)[dartx.toList]();
    expect$.Expect.equals(3, matches[dartx.length]);
    expect$.Expect.equals("Parse", matches[dartx.get](0).group(0));
    expect$.Expect.equals("my", matches[dartx.get](1).group(0));
    expect$.Expect.equals("string", matches[dartx.get](2).group(0));
    exp = core.RegExp.new("a?");
    str = "babba";
    expect$.Expect.listEquals(JSArrayOfString().of(["", "a", "", "", "a", ""]), exp.allMatches(str)[dartx.map](core.String)(dart.fn(x => x.get(0), MatchToString()))[dartx.toList]());
    exp = core.RegExp.new("as{2}");
    str = "assassin";
    expect$.Expect.equals(2, exp.allMatches(str)[dartx.length]);
    expect$.Expect.equals(2, exp.allMatches(str, 0)[dartx.length]);
    expect$.Expect.equals(1, exp.allMatches(str, 1)[dartx.length]);
    expect$.Expect.equals(0, exp.allMatches(str, 4)[dartx.length]);
    expect$.Expect.equals(0, exp.allMatches(str, str[dartx.length])[dartx.length]);
    expect$.Expect.throws(dart.fn(() => exp.allMatches(str, -1), VoidToIterableOfMatch()));
    expect$.Expect.throws(dart.fn(() => exp.allMatches(str, dart.notNull(str[dartx.length]) + 1), VoidToIterableOfMatch()));
    exp = core.RegExp.new(".*");
    expect$.Expect.equals("", exp.allMatches(str, str[dartx.length])[dartx.single].get(0));
    exp = core.RegExp.new("^ass");
    expect$.Expect.equals(1, exp.allMatches(str, 0)[dartx.length]);
    expect$.Expect.equals(0, exp.allMatches(str, 3)[dartx.length]);
    exp = core.RegExp.new("^", {multiLine: true});
    str = "foo\nbar\nbaz";
    expect$.Expect.equals(" foo\n bar\n baz", str[dartx.replaceAll](exp, " "));
    exp = core.RegExp.new("(\\w+)");
    expect$.Expect.isNull(exp.matchAsPrefix(" xyz ab"));
    expect$.Expect.isNull(exp.matchAsPrefix(" xyz ab", 0));
    let m = exp.matchAsPrefix(" xyz ab", 1);
    expect$.Expect.equals("xyz", m.get(0));
    expect$.Expect.equals("xyz", m.get(1));
    expect$.Expect.equals(1, m.groupCount);
    m = exp.matchAsPrefix(" xyz ab", 2);
    expect$.Expect.equals("yz", m.get(0));
    expect$.Expect.equals("yz", m.get(1));
    expect$.Expect.equals(1, m.groupCount);
    m = exp.matchAsPrefix(" xyz ab", 3);
    expect$.Expect.equals("z", m.get(0));
    expect$.Expect.equals("z", m.get(1));
    expect$.Expect.equals(1, m.groupCount);
    expect$.Expect.isNull(exp.matchAsPrefix(" xyz ab", 4));
    m = exp.matchAsPrefix(" xyz ab", 5);
    expect$.Expect.equals("ab", m.get(0));
    expect$.Expect.equals("ab", m.get(1));
    expect$.Expect.equals(1, m.groupCount);
    m = exp.matchAsPrefix(" xyz ab", 6);
    expect$.Expect.equals("b", m.get(0));
    expect$.Expect.equals("b", m.get(1));
    expect$.Expect.equals(1, m.groupCount);
    expect$.Expect.isNull(exp.matchAsPrefix(" xyz ab", 7));
    expect$.Expect.throws(dart.fn(() => exp.matchAsPrefix(" xyz ab", -1), VoidToMatch()));
    expect$.Expect.throws(dart.fn(() => exp.matchAsPrefix(" xyz ab", 8), VoidToMatch()));
  };
  dart.fn(reg_exp_test.main, VoidTovoid());
  // Exports:
  exports.reg_exp_test = reg_exp_test;
});
