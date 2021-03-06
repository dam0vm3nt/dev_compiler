dart_library.library('corelib/safe_to_string_test', null, /* Imports */[
  'dart_sdk',
  'expect'
], function load__safe_to_string_test(exports, dart_sdk, expect) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const expect$ = expect.expect;
  const safe_to_string_test = Object.create(null);
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  safe_to_string_test.main = function() {
    expect$.Expect.stringEquals('1', core.Error.safeToString(1));
    expect$.Expect.stringEquals('0.5', core.Error.safeToString(0.5));
    expect$.Expect.stringEquals('"1"', core.Error.safeToString("1"));
    expect$.Expect.stringEquals('"\'"', core.Error.safeToString("'"));
    expect$.Expect.stringEquals('"\'\'"', core.Error.safeToString("''"));
    expect$.Expect.stringEquals('"\\""', core.Error.safeToString('"'));
    expect$.Expect.stringEquals('"\\"\\""', core.Error.safeToString('""'));
    expect$.Expect.stringEquals('"\\\\\\"\\n\\r"', core.Error.safeToString('\\"\n\r'));
    expect$.Expect.stringEquals('"\\u0000\\u0001\\u0002\\u0003\\u0004\\u0005\\u0006\\u0007"', core.Error.safeToString(' '));
    expect$.Expect.stringEquals('"\\b\\t\\n\\u000b\\f\\r\\u000e\\u000f"', core.Error.safeToString('\b\t\n\v\f\r'));
    expect$.Expect.stringEquals('"\\u0010\\u0011\\u0012\\u0013\\u0014\\u0015\\u0016\\u0017"', core.Error.safeToString(''));
    expect$.Expect.stringEquals('"\\u0018\\u0019\\u001a\\u001b\\u001c\\u001d\\u001e\\u001f"', core.Error.safeToString(''));
    expect$.Expect.stringEquals('" "', core.Error.safeToString(" "));
    expect$.Expect.stringEquals('null', core.Error.safeToString(null));
    expect$.Expect.stringEquals('true', core.Error.safeToString(true));
    expect$.Expect.stringEquals('false', core.Error.safeToString(false));
    let className = dart.str`${dart.wrapType(core.Object)}`;
    expect$.Expect.stringEquals(dart.str`Instance of '${className}'`, core.Error.safeToString(new core.Object()));
  };
  dart.fn(safe_to_string_test.main, VoidTodynamic());
  // Exports:
  exports.safe_to_string_test = safe_to_string_test;
});
