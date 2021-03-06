dart_library.library('lib/convert/ascii_test', null, /* Imports */[
  'dart_sdk',
  'expect'
], function load__ascii_test(exports, dart_sdk, expect) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const expect$ = expect.expect;
  const ascii_test = Object.create(null);
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let JSArrayOfAsciiCodec = () => (JSArrayOfAsciiCodec = dart.constFn(_interceptors.JSArray$(convert.AsciiCodec)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let SinkOfListOfint = () => (SinkOfListOfint = dart.constFn(core.Sink$(ListOfint())))();
  let ConverterOfString$ListOfint = () => (ConverterOfString$ListOfint = dart.constFn(convert.Converter$(core.String, ListOfint())))();
  let ConverterOfListOfint$String = () => (ConverterOfListOfint$String = dart.constFn(convert.Converter$(ListOfint(), core.String)))();
  let JSArrayOfAsciiEncoder = () => (JSArrayOfAsciiEncoder = dart.constFn(_interceptors.JSArray$(convert.AsciiEncoder)))();
  let JSArrayOfAsciiDecoder = () => (JSArrayOfAsciiDecoder = dart.constFn(_interceptors.JSArray$(convert.AsciiDecoder)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [])))();
  let StringAndintAndConverterOfString$ListOfintToListOfint = () => (StringAndintAndConverterOfString$ListOfintToListOfint = dart.constFn(dart.definiteFunctionType(ListOfint(), [core.String, core.int, ConverterOfString$ListOfint()])))();
  let ListOfintAndintAndConverterOfListOfint$StringToString = () => (ListOfintAndintAndConverterOfListOfint$StringToString = dart.constFn(dart.definiteFunctionType(core.String, [ListOfint(), core.int, ConverterOfListOfint$String()])))();
  dart.defineLazy(ascii_test, {
    get asciiStrings() {
      return JSArrayOfString().of(["pure ascii", "  with control characters \n", " edge cases "]);
    },
    set asciiStrings(_) {}
  });
  dart.defineLazy(ascii_test, {
    get nonAsciiStrings() {
      return JSArrayOfString().of([" edge case first", "Edge case ASCII ", "Edge case byte ÿ", "Edge case super-BMP 𐀀"]);
    },
    set nonAsciiStrings(_) {}
  });
  ascii_test.main = function() {
    for (let i = 0, n = ascii_test.asciiStrings[dartx.length]; i < dart.notNull(n); i++) {
      let string = ascii_test.asciiStrings[dartx.get](i);
      while (dart.notNull(string[dartx.length]) < 1024) {
        string = dart.notNull(string) + dart.notNull(string);
      }
      ascii_test.asciiStrings[dartx.add](string);
    }
    for (let i = 0, n = ascii_test.nonAsciiStrings[dartx.length]; i < dart.notNull(n); i++) {
      let string = ascii_test.nonAsciiStrings[dartx.get](i);
      while (dart.notNull(string[dartx.length]) < 1024) {
        string = dart.notNull(string) + dart.notNull(string);
      }
      ascii_test.nonAsciiStrings[dartx.add](string);
    }
    ascii_test.testDirectConversions();
    ascii_test.testChunkedConversions();
  };
  dart.fn(ascii_test.main, VoidTovoid());
  ascii_test.testDirectConversions = function() {
    for (let codec of JSArrayOfAsciiCodec().of([convert.ASCII, new convert.AsciiCodec()])) {
      for (let asciiString of ascii_test.asciiStrings) {
        let bytes = codec.encoder.convert(asciiString);
        expect$.Expect.listEquals(asciiString[dartx.codeUnits][dartx.toList](), bytes, asciiString);
        let roundTripString = codec.decoder.convert(ListOfint()._check(bytes));
        expect$.Expect.equals(asciiString, roundTripString);
        roundTripString = codec.decode(ListOfint()._check(bytes));
        expect$.Expect.equals(asciiString, roundTripString);
      }
      for (let nonAsciiString of ascii_test.nonAsciiStrings) {
        expect$.Expect.throws(dart.fn(() => {
          core.print(codec.encoder.convert(nonAsciiString));
        }, VoidTovoid()), null, nonAsciiString);
      }
      let encode = dart.bind(codec.encoder, 'convert');
      expect$.Expect.listEquals(JSArrayOfint().of([66, 67, 68]), encode("ABCDE", 1, 4));
      expect$.Expect.listEquals(JSArrayOfint().of([66, 67, 68, 69]), encode("ABCDE", 1));
      expect$.Expect.listEquals(JSArrayOfint().of([66, 67, 68]), encode("ÿBCDÿ", 1, 4));
      expect$.Expect.throws(dart.fn(() => {
        encode("ÿBCDÿ", 0, 4);
      }, VoidTovoid()));
      expect$.Expect.throws(dart.fn(() => {
        encode("ÿBCDÿ", 1);
      }, VoidTovoid()));
      expect$.Expect.throws(dart.fn(() => {
        encode("ÿBCDÿ", 1, 5);
      }, VoidTovoid()));
      expect$.Expect.throws(dart.fn(() => {
        encode("ÿBCDÿ", -1, 4);
      }, VoidTovoid()));
      expect$.Expect.throws(dart.fn(() => {
        encode("ÿBCDÿ", 1, -1);
      }, VoidTovoid()));
      expect$.Expect.throws(dart.fn(() => {
        encode("ÿBCDÿ", 3, 2);
      }, VoidTovoid()));
      let decode = dart.bind(codec.decoder, 'convert');
      expect$.Expect.equals("BCD", decode(JSArrayOfint().of([65, 66, 67, 68, 69]), 1, 4));
      expect$.Expect.equals("BCDE", decode(JSArrayOfint().of([65, 66, 67, 68, 69]), 1));
      expect$.Expect.equals("BCD", decode(JSArrayOfint().of([255, 66, 67, 68, 255]), 1, 4));
      expect$.Expect.throws(dart.fn(() => {
        decode(JSArrayOfint().of([255, 66, 67, 68, 255]), 0, 4);
      }, VoidTovoid()));
      expect$.Expect.throws(dart.fn(() => {
        decode(JSArrayOfint().of([255, 66, 67, 68, 255]), 1);
      }, VoidTovoid()));
      expect$.Expect.throws(dart.fn(() => {
        decode(JSArrayOfint().of([255, 66, 67, 68, 255]), 1, 5);
      }, VoidTovoid()));
      expect$.Expect.throws(dart.fn(() => {
        decode(JSArrayOfint().of([255, 66, 67, 68, 255]), -1, 4);
      }, VoidTovoid()));
      expect$.Expect.throws(dart.fn(() => {
        decode(JSArrayOfint().of([255, 66, 67, 68, 255]), 1, -1);
      }, VoidTovoid()));
      expect$.Expect.throws(dart.fn(() => {
        decode(JSArrayOfint().of([255, 66, 67, 68, 255]), 3, 2);
      }, VoidTovoid()));
    }
    let allowInvalidCodec = new convert.AsciiCodec({allowInvalid: true});
    let invalidBytes = JSArrayOfint().of([0, 1, 255, 57005, 0]);
    let decoded = allowInvalidCodec.decode(invalidBytes);
    expect$.Expect.equals(" �� ", decoded);
    decoded = allowInvalidCodec.decoder.convert(invalidBytes);
    expect$.Expect.equals(" �� ", decoded);
    decoded = convert.ASCII.decode(invalidBytes, {allowInvalid: true});
    expect$.Expect.equals(" �� ", decoded);
  };
  dart.fn(ascii_test.testDirectConversions, VoidTovoid());
  ascii_test.encode = function(str, chunkSize, converter) {
    let bytes = JSArrayOfint().of([]);
    let byteSink = convert.ByteConversionSink.withCallback(dart.bind(bytes, dartx.addAll));
    let stringConversionSink = converter.startChunkedConversion(SinkOfListOfint()._check(byteSink));
    for (let i = 0; dart.notNull(i) < dart.notNull(str[dartx.length]); i = dart.notNull(i) + dart.notNull(chunkSize)) {
      if (dart.notNull(i) + dart.notNull(chunkSize) <= dart.notNull(str[dartx.length])) {
        stringConversionSink.add(str[dartx.substring](i, dart.notNull(i) + dart.notNull(chunkSize)));
      } else {
        stringConversionSink.add(str[dartx.substring](i));
      }
    }
    stringConversionSink.close();
    return bytes;
  };
  dart.fn(ascii_test.encode, StringAndintAndConverterOfString$ListOfintToListOfint());
  ascii_test.decode = function(bytes, chunkSize, converter) {
    let buf = new core.StringBuffer();
    let stringSink = convert.StringConversionSink.fromStringSink(buf);
    let byteConversionSink = converter.startChunkedConversion(stringSink);
    for (let i = 0; dart.notNull(i) < dart.notNull(bytes[dartx.length]); i = dart.notNull(i) + dart.notNull(chunkSize)) {
      if (dart.notNull(i) + dart.notNull(chunkSize) <= dart.notNull(bytes[dartx.length])) {
        byteConversionSink.add(bytes[dartx.sublist](i, dart.notNull(i) + dart.notNull(chunkSize)));
      } else {
        byteConversionSink.add(bytes[dartx.sublist](i));
      }
    }
    byteConversionSink.close();
    return buf.toString();
  };
  dart.fn(ascii_test.decode, ListOfintAndintAndConverterOfListOfint$StringToString());
  ascii_test.testChunkedConversions = function() {
    for (let converter of JSArrayOfAsciiEncoder().of([convert.ASCII.encoder, new convert.AsciiCodec().encoder, new convert.AsciiEncoder()])) {
      for (let chunkSize of JSArrayOfint().of([1, 2, 5, 50])) {
        for (let asciiString of ascii_test.asciiStrings) {
          let units = asciiString[dartx.codeUnits][dartx.toList]();
          let bytes = ascii_test.encode(asciiString, chunkSize, converter);
          expect$.Expect.listEquals(units, bytes);
        }
        for (let nonAsciiString of ascii_test.nonAsciiStrings) {
          expect$.Expect.throws(dart.fn(() => {
            ascii_test.encode(nonAsciiString, chunkSize, converter);
          }, VoidTovoid()));
        }
      }
    }
    for (let converter of JSArrayOfAsciiDecoder().of([convert.ASCII.decoder, new convert.AsciiCodec().decoder, new convert.AsciiDecoder()])) {
      for (let chunkSize of JSArrayOfint().of([1, 2, 5, 50])) {
        for (let asciiString of ascii_test.asciiStrings) {
          let units = asciiString[dartx.codeUnits][dartx.toList]();
          expect$.Expect.equals(asciiString, ascii_test.decode(units, chunkSize, converter));
        }
        for (let nonAsciiString of ascii_test.nonAsciiStrings) {
          let units = nonAsciiString[dartx.codeUnits][dartx.toList]();
          expect$.Expect.throws(dart.fn(() => {
            ascii_test.decode(units, chunkSize, converter);
          }, VoidTovoid()));
        }
      }
    }
  };
  dart.fn(ascii_test.testChunkedConversions, VoidTovoid());
  // Exports:
  exports.ascii_test = ascii_test;
});
