dart_library.library('language/static_getter_no_setter2_test_none_multi', null, /* Imports */[
  'dart_sdk'
], function load__static_getter_no_setter2_test_none_multi(exports, dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const static_getter_no_setter2_test_none_multi = Object.create(null);
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  static_getter_no_setter2_test_none_multi.Class = class Class extends core.Object {
    static get getter() {
      return 0;
    }
    method() {
      try {
      } catch (e) {
        if (core.NoSuchMethodError.is(e)) {
          return;
        } else
          throw e;
      }

    }
    noSuchMethod(i) {
      return 42;
    }
  };
  dart.setSignature(static_getter_no_setter2_test_none_multi.Class, {
    methods: () => ({method: dart.definiteFunctionType(dart.dynamic, [])})
  });
  static_getter_no_setter2_test_none_multi.Subclass = class Subclass extends static_getter_no_setter2_test_none_multi.Class {
    method() {
      super.method();
    }
  };
  static_getter_no_setter2_test_none_multi.main = function() {
    new static_getter_no_setter2_test_none_multi.Subclass().method();
  };
  dart.fn(static_getter_no_setter2_test_none_multi.main, VoidTodynamic());
  // Exports:
  exports.static_getter_no_setter2_test_none_multi = static_getter_no_setter2_test_none_multi;
});
