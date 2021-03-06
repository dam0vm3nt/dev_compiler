dart_library.library('lib/convert/latin1_test', null, /* Imports */[
  'dart_sdk',
  'expect'
], function load__latin1_test(exports, dart_sdk, expect) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const expect$ = expect.expect;
  const latin1_test = Object.create(null);
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let JSArrayOfLatin1Codec = () => (JSArrayOfLatin1Codec = dart.constFn(_interceptors.JSArray$(convert.Latin1Codec)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let SinkOfListOfint = () => (SinkOfListOfint = dart.constFn(core.Sink$(ListOfint())))();
  let ConverterOfString$ListOfint = () => (ConverterOfString$ListOfint = dart.constFn(convert.Converter$(core.String, ListOfint())))();
  let ConverterOfListOfint$String = () => (ConverterOfListOfint$String = dart.constFn(convert.Converter$(ListOfint(), core.String)))();
  let JSArrayOfLatin1Encoder = () => (JSArrayOfLatin1Encoder = dart.constFn(_interceptors.JSArray$(convert.Latin1Encoder)))();
  let JSArrayOfLatin1Decoder = () => (JSArrayOfLatin1Decoder = dart.constFn(_interceptors.JSArray$(convert.Latin1Decoder)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.definiteFunctionType(dart.void, [])))();
  let StringAndintAndConverterOfString$ListOfintToListOfint = () => (StringAndintAndConverterOfString$ListOfintToListOfint = dart.constFn(dart.definiteFunctionType(ListOfint(), [core.String, core.int, ConverterOfString$ListOfint()])))();
  let ListOfintAndintAndConverterOfListOfint$StringToString = () => (ListOfintAndintAndConverterOfListOfint$StringToString = dart.constFn(dart.definiteFunctionType(core.String, [ListOfint(), core.int, ConverterOfListOfint$String()])))();
  dart.defineLazy(latin1_test, {
    get latin1Strings() {
      return JSArrayOfString().of(["pure ascii", "blåbærgrød", "  edge cases ÿ"]);
    },
    set latin1Strings(_) {}
  });
  dart.defineLazy(latin1_test, {
    get nonLatin1Strings() {
      return JSArrayOfString().of(["Edge case Ā", "Edge case super-BMP 𐀀"]);
    },
    set nonLatin1Strings(_) {}
  });
  latin1_test.main = function() {
    for (let i = 0, n = latin1_test.latin1Strings[dartx.length]; i < dart.notNull(n); i++) {
      let string = latin1_test.latin1Strings[dartx.get](i);
      while (dart.notNull(string[dartx.length]) < 1024) {
        string = dart.notNull(string) + dart.notNull(string);
      }
      latin1_test.latin1Strings[dartx.add](string);
    }
    for (let i = 0, n = latin1_test.nonLatin1Strings[dartx.length]; i < dart.notNull(n); i++) {
      let string = latin1_test.nonLatin1Strings[dartx.get](i);
      while (dart.notNull(string[dartx.length]) < 1024) {
        string = dart.notNull(string) + dart.notNull(string);
      }
      latin1_test.nonLatin1Strings[dartx.add](string);
    }
    latin1_test.testDirectConversions();
    latin1_test.testChunkedConversions();
  };
  dart.fn(latin1_test.main, VoidTovoid());
  latin1_test.testDirectConversions = function() {
    for (let codec of JSArrayOfLatin1Codec().of([convert.LATIN1, new convert.Latin1Codec()])) {
      for (let latin1String of latin1_test.latin1Strings) {
        let bytes = codec.encoder.convert(latin1String);
        expect$.Expect.listEquals(latin1String[dartx.codeUnits][dartx.toList](), bytes, latin1String);
        let roundTripString = codec.decoder.convert(ListOfint()._check(bytes));
        expect$.Expect.equals(latin1String, roundTripString);
        roundTripString = codec.decode(ListOfint()._check(bytes));
        expect$.Expect.equals(latin1String, roundTripString);
      }
      for (let nonLatin1String of latin1_test.nonLatin1Strings) {
        expect$.Expect.throws(dart.fn(() => {
          core.print(codec.encoder.convert(nonLatin1String));
        }, VoidTovoid()), null, nonLatin1String);
      }
      let encode = dart.bind(codec.encoder, 'convert');
      expect$.Expect.listEquals(JSArrayOfint().of([66, 255, 68]), encode("ABÿDE", 1, 4));
      expect$.Expect.listEquals(JSArrayOfint().of([66, 255, 68, 69]), encode("ABÿDE", 1));
      expect$.Expect.listEquals(JSArrayOfint().of([66, 255, 68]), encode("　BÿD　", 1, 4));
      expect$.Expect.throws(dart.fn(() => {
        encode("　BÿD　", 0, 4);
      }, VoidTovoid()));
      expect$.Expect.throws(dart.fn(() => {
        encode("　BÿD　", 1);
      }, VoidTovoid()));
      expect$.Expect.throws(dart.fn(() => {
        encode("　BÿD　", 1, 5);
      }, VoidTovoid()));
      expect$.Expect.throws(dart.fn(() => {
        encode("　BÿD　", -1, 4);
      }, VoidTovoid()));
      expect$.Expect.throws(dart.fn(() => {
        encode("　BÿD　", 1, -1);
      }, VoidTovoid()));
      expect$.Expect.throws(dart.fn(() => {
        encode("　BÿD　", 3, 2);
      }, VoidTovoid()));
      let decode = dart.bind(codec.decoder, 'convert');
      expect$.Expect.equals("BÿD", decode(JSArrayOfint().of([65, 66, 255, 68, 69]), 1, 4));
      expect$.Expect.equals("BÿDE", decode(JSArrayOfint().of([65, 66, 255, 68, 69]), 1));
      expect$.Expect.equals("BÿD", decode(JSArrayOfint().of([255, 66, 255, 68, 255]), 1, 4));
      expect$.Expect.throws(dart.fn(() => {
        decode(JSArrayOfint().of([12288, 66, 255, 68, 12288]), 0, 4);
      }, VoidTovoid()));
      expect$.Expect.throws(dart.fn(() => {
        decode(JSArrayOfint().of([12288, 66, 255, 68, 12288]), 1);
      }, VoidTovoid()));
      expect$.Expect.throws(dart.fn(() => {
        decode(JSArrayOfint().of([12288, 66, 255, 68, 12288]), 1, 5);
      }, VoidTovoid()));
      expect$.Expect.throws(dart.fn(() => {
        decode(JSArrayOfint().of([12288, 66, 255, 68, 12288]), -1, 4);
      }, VoidTovoid()));
      expect$.Expect.throws(dart.fn(() => {
        decode(JSArrayOfint().of([12288, 66, 255, 68, 12288]), 1, -1);
      }, VoidTovoid()));
      expect$.Expect.throws(dart.fn(() => {
        decode(JSArrayOfint().of([12288, 66, 255, 68, 12288]), 3, 2);
      }, VoidTovoid()));
    }
    let allowInvalidCodec = new convert.Latin1Codec({allowInvalid: true});
    let invalidBytes = JSArrayOfint().of([0, 1, 255, 57005, 0]);
    let decoded = allowInvalidCodec.decode(invalidBytes);
    expect$.Expect.equals(" ÿ� ", decoded);
    decoded = allowInvalidCodec.decoder.convert(invalidBytes);
    expect$.Expect.equals(" ÿ� ", decoded);
    decoded = convert.LATIN1.decode(invalidBytes, {allowInvalid: true});
    expect$.Expect.equals(" ÿ� ", decoded);
  };
  dart.fn(latin1_test.testDirectConversions, VoidTovoid());
  latin1_test.encode = function(str, chunkSize, converter) {
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
  dart.fn(latin1_test.encode, StringAndintAndConverterOfString$ListOfintToListOfint());
  latin1_test.decode = function(bytes, chunkSize, converter) {
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
  dart.fn(latin1_test.decode, ListOfintAndintAndConverterOfListOfint$StringToString());
  latin1_test.testChunkedConversions = function() {
    for (let converter of JSArrayOfLatin1Encoder().of([convert.LATIN1.encoder, new convert.Latin1Codec().encoder, new convert.Latin1Encoder()])) {
      for (let chunkSize of JSArrayOfint().of([1, 2, 5, 50])) {
        for (let latin1String of latin1_test.latin1Strings) {
          let units = latin1String[dartx.codeUnits][dartx.toList]();
          let bytes = latin1_test.encode(latin1String, chunkSize, converter);
          expect$.Expect.listEquals(units, bytes);
        }
        for (let nonLatin1String of latin1_test.nonLatin1Strings) {
          expect$.Expect.throws(dart.fn(() => {
            latin1_test.encode(nonLatin1String, chunkSize, converter);
          }, VoidTovoid()));
        }
      }
    }
    for (let converter of JSArrayOfLatin1Decoder().of([convert.LATIN1.decoder, new convert.Latin1Codec().decoder, new convert.Latin1Decoder()])) {
      for (let chunkSize of JSArrayOfint().of([1, 2, 5, 50])) {
        for (let latin1String of latin1_test.latin1Strings) {
          let units = latin1String[dartx.codeUnits][dartx.toList]();
          expect$.Expect.equals(latin1String, latin1_test.decode(units, chunkSize, converter));
        }
        for (let nonLatin1String of latin1_test.nonLatin1Strings) {
          let units = nonLatin1String[dartx.codeUnits][dartx.toList]();
          expect$.Expect.throws(dart.fn(() => {
            latin1_test.decode(units, chunkSize, converter);
          }, VoidTovoid()));
        }
      }
    }
  };
  dart.fn(latin1_test.testChunkedConversions, VoidTovoid());
  // Exports:
  exports.latin1_test = latin1_test;
});
