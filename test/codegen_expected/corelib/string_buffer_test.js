dart_library.library('corelib/string_buffer_test', null, /* Imports */[
  'dart_sdk',
  'expect'
], function load__string_buffer_test(exports, dart_sdk, expect) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const expect$ = expect.expect;
  const string_buffer_test = Object.create(null);
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [])))();
  let intAndStringBufferTovoid = () => (intAndStringBufferTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [core.int, core.StringBuffer])))();
  string_buffer_test.testConstructor = function() {
    let bf = new core.StringBuffer("");
    string_buffer_test.testBufferLength(0, bf);
    bf = new core.StringBuffer("abc");
    string_buffer_test.testBufferLength(3, bf);
    expect$.Expect.equals("abc", bf.toString());
    bf = new core.StringBuffer(" ");
  };
  dart.fn(string_buffer_test.testConstructor, VoidTovoid());
  string_buffer_test.testWrite = function() {
    let bf = new core.StringBuffer("");
    expect$.Expect.equals(true, bf.isEmpty);
    bf.write("a");
    string_buffer_test.testBufferLength(1, bf);
    expect$.Expect.equals("a", bf.toString());
    bf = new core.StringBuffer("");
    bf.write("a");
    bf.write("b");
    expect$.Expect.equals("ab", bf.toString());
    bf = new core.StringBuffer("abc");
    bf.write("d");
    bf.write("e");
    bf.write("f");
    bf.write("g");
    bf.write("h");
    bf.write("i");
    bf.write("j");
    bf.write("k");
    bf.write("l");
    bf.write("m");
    bf.write("n");
    bf.write("o");
    bf.write("p");
    bf.write("q");
    bf.write("r");
    bf.write("s");
    bf.write("t");
    bf.write("u");
    bf.write("v");
    bf.write("w");
    bf.write("x");
    bf.write("y");
    bf.write("z");
    bf.write("\n");
    bf.write("thequickbrownfoxjumpsoverthelazydog");
    expect$.Expect.equals("abcdefghijklmnopqrstuvwxyz\n" + "thequickbrownfoxjumpsoverthelazydog", bf.toString());
    bf = new core.StringBuffer("");
    for (let i = 0; i < 100000; i++) {
      bf.write('');
      bf.write("");
    }
    expect$.Expect.equals("", bf.toString());
  };
  dart.fn(string_buffer_test.testWrite, VoidTovoid());
  string_buffer_test.testLength = function() {
    let bf = new core.StringBuffer("");
    string_buffer_test.testBufferLength(0, bf);
    bf.write("foo");
    string_buffer_test.testBufferLength(3, bf);
    bf.write("bar");
    string_buffer_test.testBufferLength(6, bf);
    bf.write("");
    string_buffer_test.testBufferLength(6, bf);
  };
  dart.fn(string_buffer_test.testLength, VoidTovoid());
  string_buffer_test.testIsEmpty = function() {
    let bf = new core.StringBuffer("");
    expect$.Expect.equals(true, bf.isEmpty);
    bf.write("foo");
    expect$.Expect.equals(false, bf.isEmpty);
  };
  dart.fn(string_buffer_test.testIsEmpty, VoidTovoid());
  string_buffer_test.testWriteAll = function() {
    let bf = new core.StringBuffer("");
    bf.writeAll(JSArrayOfString().of(["foo", "bar", "a", "b", "c"]));
    expect$.Expect.equals("foobarabc", bf.toString());
    bf.writeAll([]);
    expect$.Expect.equals("foobarabc", bf.toString());
    bf.writeAll(JSArrayOfString().of(["", "", ""]));
    expect$.Expect.equals("foobarabc", bf.toString());
    bf.writeAll(JSArrayOfString().of(["", "", ""]), "");
    expect$.Expect.equals("foobarabc", bf.toString());
    let bf2 = new core.StringBuffer("");
    bf2.writeAll([], "s");
    expect$.Expect.equals("", bf2.toString());
    let bf3 = new core.StringBuffer("");
    bf3.writeAll(JSArrayOfString().of(["a"]), "s");
    expect$.Expect.equals("a", bf3.toString());
    let bf4 = new core.StringBuffer("");
    bf4.writeAll(JSArrayOfString().of(["a", "b"]), "s");
    expect$.Expect.equals("asb", bf4.toString());
  };
  dart.fn(string_buffer_test.testWriteAll, VoidTovoid());
  string_buffer_test.testWriteAll2 = function() {
    let bf1 = new core.StringBuffer("");
    bf1.writeAll([], null);
    expect$.Expect.equals("", bf1.toString());
    let bf2 = new core.StringBuffer("");
    expect$.Expect.throws(dart.fn(() => {
      bf2.writeAll(JSArrayOfint().of([1]), null);
    }, VoidTovoid()));
  };
  dart.fn(string_buffer_test.testWriteAll2, VoidTovoid());
  string_buffer_test.testWriteln = function() {
    let bf1 = new core.StringBuffer("");
    bf1.writeln("Hello");
    expect$.Expect.equals("Hello\n", bf1.toString());
    let bf2 = new core.StringBuffer("");
    bf2.writeln();
    expect$.Expect.equals("\n", bf2.toString());
    let bf3 = new core.StringBuffer("");
    bf3.writeln("\n");
    bf3.writeln(null);
    bf3.writeln(1);
    expect$.Expect.equals("\n\nnull\n1\n", bf3.toString());
  };
  dart.fn(string_buffer_test.testWriteln, VoidTovoid());
  string_buffer_test.testClear = function() {
    let bf = new core.StringBuffer("");
    bf.write("foo");
    bf.clear();
    expect$.Expect.equals("", bf.toString());
    string_buffer_test.testBufferLength(0, bf);
    bf.write("bar");
    expect$.Expect.equals("bar", bf.toString());
    string_buffer_test.testBufferLength(3, bf);
    bf.clear();
    expect$.Expect.equals("", bf.toString());
    string_buffer_test.testBufferLength(0, bf);
  };
  dart.fn(string_buffer_test.testClear, VoidTovoid());
  string_buffer_test.testToString = function() {
    let bf = new core.StringBuffer("");
    expect$.Expect.equals("", bf.toString());
    bf = new core.StringBuffer("foo");
    expect$.Expect.equals("foo", bf.toString());
    bf = new core.StringBuffer("foo");
    bf.write("bar");
    expect$.Expect.equals("foobar", bf.toString());
  };
  dart.fn(string_buffer_test.testToString, VoidTovoid());
  string_buffer_test.testChaining = function() {
    let bf = new core.StringBuffer("");
    let bf2 = new core.StringBuffer("");
    bf2.write("bf2");
    bf.write("foo");
    bf.write("bar");
    bf.write(bf2);
    bf.write(bf2);
    bf.write("toto");
    expect$.Expect.equals("foobarbf2bf2toto", bf.toString());
  };
  dart.fn(string_buffer_test.testChaining, VoidTovoid());
  string_buffer_test.testWriteCharCode = function() {
    let bf1 = new core.StringBuffer();
    let bf2 = new core.StringBuffer();
    bf1.write("a");
    bf2.writeCharCode(97);
    bf1.write("b");
    bf2.writeCharCode(98);
    bf1.write("c");
    bf2.writeCharCode(99);
    bf1.write(core.String.fromCharCode(55331));
    bf2.writeCharCode(55331);
    bf1.write(core.String.fromCharCode(56355));
    bf2.writeCharCode(56355);
    bf1.write("𝒞");
    bf2.writeCharCode(119966);
    bf1.write(" ");
    bf2.writeCharCode(0);
    expect$.Expect.equals(bf1.toString(), bf2.toString());
    expect$.Expect.equals("abc𘰣𝒞 ", bf2.toString());
    bf1.clear();
    bf1.write("abcde");
    bf1.writeCharCode(97);
    bf1.writeCharCode(98);
    bf1.writeCharCode(99);
    bf1.write("d");
    bf1.writeCharCode(101);
    expect$.Expect.equals("abcdeabcde", bf1.toString());
    expect$.Expect.throws(dart.fn(() => {
      bf2.writeCharCode(-1);
    }, VoidTovoid()));
    expect$.Expect.throws(dart.fn(() => {
      bf2.writeCharCode(1114112);
    }, VoidTovoid()));
  };
  dart.fn(string_buffer_test.testWriteCharCode, VoidTovoid());
  string_buffer_test.testBufferLength = function(length, bf) {
    expect$.Expect.equals(length, bf.length);
    dart.dcall(length == 0 ? expect$.Expect.isTrue : expect$.Expect.isFalse, bf.isEmpty);
    dart.dcall(length != 0 ? expect$.Expect.isTrue : expect$.Expect.isFalse, bf.isNotEmpty);
  };
  dart.fn(string_buffer_test.testBufferLength, intAndStringBufferTovoid());
  string_buffer_test.main = function() {
    string_buffer_test.testToString();
    string_buffer_test.testConstructor();
    string_buffer_test.testLength();
    string_buffer_test.testIsEmpty();
    string_buffer_test.testWrite();
    string_buffer_test.testWriteCharCode();
    string_buffer_test.testWriteAll();
    string_buffer_test.testWriteAll2();
    string_buffer_test.testWriteln();
    string_buffer_test.testClear();
    string_buffer_test.testChaining();
  };
  dart.fn(string_buffer_test.main, VoidTovoid());
  // Exports:
  exports.string_buffer_test = string_buffer_test;
});
