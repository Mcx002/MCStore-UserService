// source: customer.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.customer.CustomerDto', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.customer.CustomerDto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.customer.CustomerDto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.customer.CustomerDto.displayName = 'proto.customer.CustomerDto';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.customer.CustomerDto.prototype.toObject = function(opt_includeInstance) {
  return proto.customer.CustomerDto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.customer.CustomerDto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.customer.CustomerDto.toObject = function(includeInstance, msg) {
  var f, obj = {
    xid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    firstname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    lastname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    phone: jspb.Message.getFieldWithDefault(msg, 4, ""),
    email: jspb.Message.getFieldWithDefault(msg, 5, ""),
    photo: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.customer.CustomerDto}
 */
proto.customer.CustomerDto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.customer.CustomerDto;
  return proto.customer.CustomerDto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.customer.CustomerDto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.customer.CustomerDto}
 */
proto.customer.CustomerDto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setXid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhone(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhoto(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.customer.CustomerDto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.customer.CustomerDto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.customer.CustomerDto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.customer.CustomerDto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getXid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFirstname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLastname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPhone();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPhoto();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string xid = 1;
 * @return {string}
 */
proto.customer.CustomerDto.prototype.getXid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.customer.CustomerDto} returns this
 */
proto.customer.CustomerDto.prototype.setXid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string firstName = 2;
 * @return {string}
 */
proto.customer.CustomerDto.prototype.getFirstname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.customer.CustomerDto} returns this
 */
proto.customer.CustomerDto.prototype.setFirstname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string lastName = 3;
 * @return {string}
 */
proto.customer.CustomerDto.prototype.getLastname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.customer.CustomerDto} returns this
 */
proto.customer.CustomerDto.prototype.setLastname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string phone = 4;
 * @return {string}
 */
proto.customer.CustomerDto.prototype.getPhone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.customer.CustomerDto} returns this
 */
proto.customer.CustomerDto.prototype.setPhone = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string email = 5;
 * @return {string}
 */
proto.customer.CustomerDto.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.customer.CustomerDto} returns this
 */
proto.customer.CustomerDto.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string photo = 6;
 * @return {string}
 */
proto.customer.CustomerDto.prototype.getPhoto = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.customer.CustomerDto} returns this
 */
proto.customer.CustomerDto.prototype.setPhoto = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


goog.object.extend(exports, proto.customer);