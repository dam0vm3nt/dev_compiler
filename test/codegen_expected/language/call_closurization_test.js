dart_library.library('language/call_closurization_test', null, /* Imports */[
  'dart_sdk',
  'expect'
], function load__call_closurization_test(exports, dart_sdk, expect) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const expect$ = expect.expect;
  const call_closurization_test = Object.create(null);
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [dart.dynamic])))();
  let __Todynamic = () => (__Todynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [], [dart.dynamic])))();
  let __Todynamic$ = () => (__Todynamic$ = dart.constFn(dart.definiteFunctionType(dart.dynamic, [], {x: dart.dynamic, y: dart.dynamic})))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [])))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.definiteFunctionType(core.bool, [dart.dynamic])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  call_closurization_test.main = function() {
    function bar(a) {
      return typeof a == 'string';
    }
    dart.fn(bar, dynamicTodynamic());
    let bar_tearOff = dart.dload(bar, 'call');
    for (let i = 0; i < 20; i++) {
      expect$.Expect.isFalse(dart.dcall(bar_tearOff, 1));
      expect$.Expect.isTrue(dart.dsend(bar_tearOff, 'call', 'foo'));
      expect$.Expect.isFalse(dart.dsend(bar_tearOff, 'call', 1));
      expect$.Expect.isTrue(dart.dcall(bar_tearOff, 'foo'));
    }
    function opt_arg(a) {
      if (a === void 0) a = "a";
      return typeof a == 'string';
    }
    dart.fn(opt_arg, __Todynamic());
    let opt_arg_tearOff = dart.dload(opt_arg, 'call');
    for (let i = 0; i < 20; i++) {
      expect$.Expect.isFalse(dart.dcall(opt_arg_tearOff, 1));
      expect$.Expect.isFalse(dart.dsend(opt_arg_tearOff, 'call', 1));
      expect$.Expect.isTrue(dart.dcall(opt_arg_tearOff));
      expect$.Expect.isTrue(dart.dsend(opt_arg_tearOff, 'call'));
      expect$.Expect.isTrue(dart.dcall(opt_arg_tearOff, "b"));
      expect$.Expect.isTrue(dart.dsend(opt_arg_tearOff, 'call', "b"));
    }
    function named_arg(opts) {
      let x = opts && 'x' in opts ? opts.x : 11;
      let y = opts && 'y' in opts ? opts.y : 22;
      return dart.str`${x}${y}`;
    }
    dart.fn(named_arg, __Todynamic$());
    let named_arg_tearOff = dart.dload(named_arg, 'call');
    for (let i = 0; i < 20; i++) {
      expect$.Expect.equals("1122", dart.dcall(named_arg_tearOff));
      expect$.Expect.equals("1122", dart.dsend(named_arg_tearOff, 'call'));
      expect$.Expect.equals("4455", dart.dcall(named_arg_tearOff, {y: 55, x: 44}));
      expect$.Expect.equals("4455", dart.dsend(named_arg_tearOff, 'call', {y: 55, x: 44}));
      expect$.Expect.equals("4455", dart.dcall(named_arg_tearOff, {x: 44, y: 55}));
      expect$.Expect.equals("4455", dart.dsend(named_arg_tearOff, 'call', {x: 44, y: 55}));
    }
    expect$.Expect.throws(dart.fn(() => dart.dsend(bar_tearOff, 'call'), VoidTovoid()), dart.fn(e => core.NoSuchMethodError.is(e), dynamicTobool()));
    expect$.Expect.throws(dart.fn(() => dart.dsend(opt_arg_tearOff, 'call', {x: "p"}), VoidTovoid()), dart.fn(e => core.NoSuchMethodError.is(e), dynamicTobool()));
    expect$.Expect.throws(dart.fn(() => dart.dsend(named_arg_tearOff, 'call', "p", "q"), VoidTovoid()), dart.fn(e => core.NoSuchMethodError.is(e), dynamicTobool()));
  };
  dart.fn(call_closurization_test.main, VoidTodynamic());
  // Exports:
  exports.call_closurization_test = call_closurization_test;
});
