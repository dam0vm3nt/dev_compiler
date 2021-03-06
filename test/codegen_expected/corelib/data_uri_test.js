dart_library.library('corelib/data_uri_test', null, /* Imports */[
  'dart_sdk',
  'expect'
], function load__data_uri_test(exports, dart_sdk, expect) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const _interceptors = dart_sdk._interceptors;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const expect$ = expect.expect;
  const data_uri_test = Object.create(null);
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [])))();
  let String__Tovoid = () => (String__Tovoid = dart.constFn(dart.definiteFunctionType(dart.void, [core.String], [convert.Encoding])))();
  let StringTovoid = () => (StringTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [core.String])))();
  let ListOfintTovoid = () => (ListOfintTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [ListOfint()])))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.definiteFunctionType(core.bool, [dart.dynamic])))();
  let VoidToUriData = () => (VoidToUriData = dart.constFn(dart.definiteFunctionType(core.UriData, [])))();
  let UriAndUriTodynamic = () => (UriAndUriTodynamic = dart.constFn(dart.definiteFunctionType(dart.dynamic, [core.Uri, core.Uri])))();
  data_uri_test.main = function() {
    data_uri_test.testMediaType();
    data_uri_test.testRoundTrip("");
    data_uri_test.testRoundTrip("a");
    data_uri_test.testRoundTrip("ab");
    data_uri_test.testRoundTrip("abc");
    data_uri_test.testRoundTrip("abcd");
    data_uri_test.testRoundTrip("Content with special%25 characters: # ? = % # ? = %");
    data_uri_test.testRoundTrip("blåbærgrød", convert.UTF8);
    data_uri_test.testRoundTrip("blåbærgrød", convert.LATIN1);
    data_uri_test.testUtf8Encoding("က￿");
    data_uri_test.testBytes();
    data_uri_test.testInvalidCharacters();
    data_uri_test.testErrors();
  };
  dart.fn(data_uri_test.main, VoidTodynamic());
  data_uri_test.testMediaType = function() {
    for (let mimeType of JSArrayOfString().of(["", "text/plain", "text/javascript"])) {
      for (let charset of JSArrayOfString().of(["", ";charset=US-ASCII", ";charset=UTF-8"])) {
        for (let base64 of JSArrayOfString().of(["", ";base64"])) {
          let isBase64 = base64[dartx.isNotEmpty];
          let text = dart.str`data:${mimeType}${charset}${base64},`;
          let uri = core.UriData.parse(text);
          let expectedCharset = dart.test(charset[dartx.isEmpty]) ? "US-ASCII" : charset[dartx.substring](9);
          let expectedMimeType = dart.test(mimeType[dartx.isEmpty]) ? "text/plain" : mimeType;
          expect$.Expect.equals(text, dart.str`${uri}`);
          expect$.Expect.equals(expectedMimeType, uri.mimeType);
          expect$.Expect.equals(expectedCharset, uri.charset);
          expect$.Expect.equals(isBase64, uri.isBase64);
        }
      }
    }
  };
  dart.fn(data_uri_test.testMediaType, VoidTovoid());
  data_uri_test.testRoundTrip = function(content, encoding) {
    if (encoding === void 0) encoding = null;
    let dataUri = core.UriData.fromString(content, {encoding: encoding});
    expect$.Expect.isFalse(dataUri.isBase64);
    let uri = dataUri.uri;
    data_uri_test.expectUriEquals(core.Uri.dataFromString(content, {encoding: encoding}), uri);
    if (encoding != null) {
      let dataUriParams = core.UriData.fromString(content, {parameters: dart.map({charset: encoding.name})});
      expect$.Expect.equals(dart.str`${dataUri}`, dart.str`${dataUriParams}`);
    }
    expect$.Expect.equals((encoding != null ? encoding : convert.ASCII), convert.Encoding.getByName(dataUri.charset));
    expect$.Expect.equals(content, dataUri.contentAsString({encoding: encoding}));
    expect$.Expect.equals(content, dataUri.contentAsString());
    expect$.Expect.equals(content, (encoding != null ? encoding : convert.ASCII).decode(dataUri.contentAsBytes()));
    uri = dataUri.uri;
    expect$.Expect.equals(dart.toString(uri), dataUri.toString());
    expect$.Expect.equals(dataUri.toString(), core.UriData.fromUri(uri).toString());
    dataUri = core.UriData.fromBytes(content[dartx.codeUnits]);
    expect$.Expect.listEquals(content[dartx.codeUnits], dataUri.contentAsBytes());
    expect$.Expect.equals(content, dataUri.contentAsString({encoding: convert.LATIN1}));
    uri = dataUri.uri;
    expect$.Expect.equals(dart.toString(uri), dataUri.toString());
    expect$.Expect.equals(dataUri.toString(), core.UriData.fromUri(uri).toString());
    data_uri_test.expectUriEquals(uri, core.Uri.parse(dart.str`${uri}`));
  };
  dart.fn(data_uri_test.testRoundTrip, String__Tovoid());
  data_uri_test.testUtf8Encoding = function(content) {
    let uri = core.UriData.fromString(content, {encoding: convert.UTF8});
    expect$.Expect.equals(content, uri.contentAsString({encoding: convert.UTF8}));
    expect$.Expect.listEquals(convert.UTF8.encode(content), uri.contentAsBytes());
  };
  dart.fn(data_uri_test.testUtf8Encoding, StringTovoid());
  data_uri_test.testInvalidCharacters = function() {
    let invalid = ' \b\t\n\v\f\r' + ' ()<>@,;:"/[]?=%#က𐀀';
    let invalidNoSlash = invalid[dartx.replaceAll]('/', '');
    let dataUri = core.UriData.fromString(invalid, {encoding: convert.UTF8, mimeType: dart.str`${invalidNoSlash}/${invalidNoSlash}`, parameters: dart.map([invalid, invalid])});
    expect$.Expect.equals(invalid, dataUri.contentAsString());
    expect$.Expect.equals(dart.str`${invalidNoSlash}/${invalidNoSlash}`, dataUri.mimeType);
    expect$.Expect.equals(invalid, dataUri.parameters[dartx.get](invalid));
    let uri = dataUri.uri;
    expect$.Expect.equals(dart.str`${uri}`, dart.str`${dataUri}`);
    data_uri_test.expectUriEquals(uri, core.Uri.parse(dart.str`${uri}`));
    expect$.Expect.equals(dart.str`${dataUri}`, core.UriData.fromUri(uri).toString());
  };
  dart.fn(data_uri_test.testInvalidCharacters, VoidTovoid());
  data_uri_test.testBytes = function() {
    function testList(list) {
      let dataUri = core.UriData.fromBytes(list);
      expect$.Expect.equals("application/octet-stream", dataUri.mimeType);
      expect$.Expect.isTrue(dataUri.isBase64);
      expect$.Expect.listEquals(list, dataUri.contentAsBytes());
      dataUri = core.UriData.fromBytes(list, {percentEncoded: true});
      expect$.Expect.equals("application/octet-stream", dataUri.mimeType);
      expect$.Expect.isFalse(dataUri.isBase64);
      expect$.Expect.listEquals(list, dataUri.contentAsBytes());
      let string = core.String.fromCharCodes(list);
      dataUri = core.UriData.fromString(string, {encoding: convert.LATIN1});
      expect$.Expect.equals("text/plain", dataUri.mimeType);
      expect$.Expect.isFalse(dataUri.isBase64);
      expect$.Expect.listEquals(list, dataUri.contentAsBytes());
      dataUri = core.UriData.fromString(string, {encoding: convert.LATIN1, base64: true});
      expect$.Expect.equals("text/plain", dataUri.mimeType);
      expect$.Expect.isTrue(dataUri.isBase64);
      expect$.Expect.listEquals(list, dataUri.contentAsBytes());
    }
    dart.fn(testList, ListOfintTovoid());
    function testLists(list) {
      testList(list);
      for (let i = 0; i < 27; i++) {
        testList(list[dartx.sublist](i, i + i));
      }
    }
    dart.fn(testLists, ListOfintTovoid());
    let bytes = typed_data.Uint8List.new(512);
    for (let i = 0; i < dart.notNull(bytes[dartx.length]); i++) {
      bytes[dartx.set](i, i);
    }
    testLists(bytes);
    testLists(ListOfint().from(bytes));
    testLists(ListOfint().unmodifiable(bytes));
  };
  dart.fn(data_uri_test.testBytes, VoidTovoid());
  data_uri_test.badArgument = function(e) {
    return core.ArgumentError.is(e);
  };
  dart.fn(data_uri_test.badArgument, dynamicTobool());
  data_uri_test.badFormat = function(e) {
    return core.FormatException.is(e);
  };
  dart.fn(data_uri_test.badFormat, dynamicTobool());
  data_uri_test.testErrors = function() {
    expect$.Expect.throws(dart.fn(() => {
      core.UriData.fromBytes(JSArrayOfint().of([]), {mimeType: "noslash"});
    }, VoidTovoid()), data_uri_test.badArgument);
    expect$.Expect.throws(dart.fn(() => {
      core.UriData.fromBytes(JSArrayOfint().of([257]));
    }, VoidTovoid()), data_uri_test.badArgument);
    expect$.Expect.throws(dart.fn(() => {
      core.UriData.fromBytes(JSArrayOfint().of([-1]));
    }, VoidTovoid()), data_uri_test.badArgument);
    expect$.Expect.throws(dart.fn(() => {
      core.UriData.fromBytes(JSArrayOfint().of([268435456]));
    }, VoidTovoid()), data_uri_test.badArgument);
    expect$.Expect.throws(dart.fn(() => {
      core.UriData.fromString("", {mimeType: "noslash"});
    }, VoidTovoid()), data_uri_test.badArgument);
    expect$.Expect.throws(dart.fn(() => {
      core.Uri.dataFromBytes(JSArrayOfint().of([]), {mimeType: "noslash"});
    }, VoidTovoid()), data_uri_test.badArgument);
    expect$.Expect.throws(dart.fn(() => {
      core.Uri.dataFromBytes(JSArrayOfint().of([257]));
    }, VoidTovoid()), data_uri_test.badArgument);
    expect$.Expect.throws(dart.fn(() => {
      core.Uri.dataFromBytes(JSArrayOfint().of([-1]));
    }, VoidTovoid()), data_uri_test.badArgument);
    expect$.Expect.throws(dart.fn(() => {
      core.Uri.dataFromBytes(JSArrayOfint().of([268435456]));
    }, VoidTovoid()), data_uri_test.badArgument);
    expect$.Expect.throws(dart.fn(() => {
      core.Uri.dataFromString("", {mimeType: "noslash"});
    }, VoidTovoid()), data_uri_test.badArgument);
    let uri = core.UriData.fromString("", {mimeType: "", parameters: dart.map()});
    expect$.Expect.equals("data:,", dart.str`${uri}`);
    expect$.Expect.throws(dart.fn(() => core.UriData.fromString("", {parameters: dart.map({"": "X"})}), VoidToUriData()), data_uri_test.badArgument);
    expect$.Expect.throws(dart.fn(() => core.UriData.fromString("", {parameters: dart.map({X: ""})}), VoidToUriData()), data_uri_test.badArgument);
    uri = core.UriData.parse("data:;charset=arglebargle,X");
    expect$.Expect.throws(dart.fn(() => {
      uri.contentAsString();
    }, VoidTovoid()));
    expect$.Expect.equals("X", uri.contentAsString({encoding: convert.ASCII}));
    expect$.Expect.throws(dart.fn(() => {
      core.UriData.parse("notdata:,");
    }, VoidTovoid()), data_uri_test.badFormat);
    expect$.Expect.throws(dart.fn(() => {
      core.UriData.parse("text/plain,noscheme");
    }, VoidTovoid()), data_uri_test.badFormat);
    expect$.Expect.throws(dart.fn(() => {
      core.UriData.parse("data:noseparator");
    }, VoidTovoid()), data_uri_test.badFormat);
    expect$.Expect.throws(dart.fn(() => {
      core.UriData.parse("data:noslash,text");
    }, VoidTovoid()), data_uri_test.badFormat);
    expect$.Expect.throws(dart.fn(() => {
      core.UriData.parse("data:type/sub;noequals,text");
    }, VoidTovoid()), data_uri_test.badFormat);
    expect$.Expect.throws(dart.fn(() => {
      core.UriData.parse("data:type/sub;knocomma=");
    }, VoidTovoid()), data_uri_test.badFormat);
    expect$.Expect.throws(dart.fn(() => {
      core.UriData.parse("data:type/sub;k=v;nocomma");
    }, VoidTovoid()), data_uri_test.badFormat);
    expect$.Expect.throws(dart.fn(() => {
      core.UriData.parse("data:type/sub;k=nocomma");
    }, VoidTovoid()), data_uri_test.badFormat);
    expect$.Expect.throws(dart.fn(() => {
      core.UriData.parse("data:type/sub;k=v;base64");
    }, VoidTovoid()), data_uri_test.badFormat);
    for (let a = 0; a <= 4; a++) {
      for (let p = 0; p <= 4; p++) {
        if (p < 3 && (a + p)[dartx['%']](4) == 0) continue;
        uri = core.UriData.parse("data:;base64," + "A"[dartx['*']](a) + "="[dartx['*']](p));
        expect$.Expect.throws(dart.bind(uri, 'contentAsBytes'), data_uri_test.badFormat);
      }
    }
    uri = core.UriData.parse("data:;base64,AA=A");
    expect$.Expect.throws(dart.bind(uri, 'contentAsBytes'), data_uri_test.badFormat);
    uri = core.UriData.parse("data:;base64,A=AA");
    expect$.Expect.throws(dart.bind(uri, 'contentAsBytes'), data_uri_test.badFormat);
    uri = core.UriData.parse("data:;base64,=AAA");
    expect$.Expect.throws(dart.bind(uri, 'contentAsBytes'), data_uri_test.badFormat);
    uri = core.UriData.parse("data:;base64,A==A");
    expect$.Expect.throws(dart.bind(uri, 'contentAsBytes'), data_uri_test.badFormat);
    uri = core.UriData.parse("data:;base64,==AA");
    expect$.Expect.throws(dart.bind(uri, 'contentAsBytes'), data_uri_test.badFormat);
    uri = core.UriData.parse("data:;base64,===A");
    expect$.Expect.throws(dart.bind(uri, 'contentAsBytes'), data_uri_test.badFormat);
  };
  dart.fn(data_uri_test.testErrors, VoidTovoid());
  data_uri_test.expectUriEquals = function(expect, actual) {
    expect$.Expect.equals(expect.scheme, actual.scheme, "scheme");
    expect$.Expect.equals(expect.hasAuthority, actual.hasAuthority, "hasAuthority");
    expect$.Expect.equals(expect.userInfo, actual.userInfo, "userInfo");
    expect$.Expect.equals(expect.host, actual.host, "host");
    expect$.Expect.equals(expect.hasPort, actual.hasPort, "hasPort");
    expect$.Expect.equals(expect.port, actual.port, "port");
    expect$.Expect.equals(expect.port, actual.port, "port");
    expect$.Expect.equals(expect.hasQuery, actual.hasQuery, "hasQuery");
    expect$.Expect.equals(expect.query, actual.query, "query");
    expect$.Expect.equals(expect.hasFragment, actual.hasFragment, "hasFragment");
    expect$.Expect.equals(expect.fragment, actual.fragment, "fragment");
  };
  dart.fn(data_uri_test.expectUriEquals, UriAndUriTodynamic());
  // Exports:
  exports.data_uri_test = data_uri_test;
});
