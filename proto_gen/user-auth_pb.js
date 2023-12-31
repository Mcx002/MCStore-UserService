// source: user-auth.proto
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

var auth_pb = require('./auth_pb.js');
goog.object.extend(proto, auth_pb);
goog.exportSymbol('proto.userAuth.EditPasswordDto', null, global);
goog.exportSymbol('proto.userAuth.RegisterDto', null, global);
goog.exportSymbol('proto.userAuth.SendEmailVerificationDto', null, global);
goog.exportSymbol('proto.userAuth.UserAuthDto', null, global);
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
proto.userAuth.UserAuthDto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.userAuth.UserAuthDto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.userAuth.UserAuthDto.displayName = 'proto.userAuth.UserAuthDto';
}
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
proto.userAuth.RegisterDto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.userAuth.RegisterDto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.userAuth.RegisterDto.displayName = 'proto.userAuth.RegisterDto';
}
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
proto.userAuth.SendEmailVerificationDto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.userAuth.SendEmailVerificationDto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.userAuth.SendEmailVerificationDto.displayName = 'proto.userAuth.SendEmailVerificationDto';
}
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
proto.userAuth.EditPasswordDto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.userAuth.EditPasswordDto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.userAuth.EditPasswordDto.displayName = 'proto.userAuth.EditPasswordDto';
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
proto.userAuth.UserAuthDto.prototype.toObject = function(opt_includeInstance) {
  return proto.userAuth.UserAuthDto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.userAuth.UserAuthDto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.userAuth.UserAuthDto.toObject = function(includeInstance, msg) {
  var f, obj = {
    email: jspb.Message.getFieldWithDefault(msg, 2, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 3, 0),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 4, 0),
    version: jspb.Message.getFieldWithDefault(msg, 5, 0),
    password: jspb.Message.getFieldWithDefault(msg, 6, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    subjectType: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.userAuth.UserAuthDto}
 */
proto.userAuth.UserAuthDto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.userAuth.UserAuthDto;
  return proto.userAuth.UserAuthDto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.userAuth.UserAuthDto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.userAuth.UserAuthDto}
 */
proto.userAuth.UserAuthDto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreatedAt(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdatedAt(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVersion(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 8:
      var value = /** @type {!proto.auth.SubjectType} */ (reader.readEnum());
      msg.setSubjectType(value);
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
proto.userAuth.UserAuthDto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.userAuth.UserAuthDto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.userAuth.UserAuthDto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.userAuth.UserAuthDto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCreatedAt();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSubjectType();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.userAuth.UserAuthDto.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.userAuth.UserAuthDto} returns this
 */
proto.userAuth.UserAuthDto.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 created_at = 3;
 * @return {number}
 */
proto.userAuth.UserAuthDto.prototype.getCreatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.userAuth.UserAuthDto} returns this
 */
proto.userAuth.UserAuthDto.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 updated_at = 4;
 * @return {number}
 */
proto.userAuth.UserAuthDto.prototype.getUpdatedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.userAuth.UserAuthDto} returns this
 */
proto.userAuth.UserAuthDto.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 version = 5;
 * @return {number}
 */
proto.userAuth.UserAuthDto.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.userAuth.UserAuthDto} returns this
 */
proto.userAuth.UserAuthDto.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string password = 6;
 * @return {string}
 */
proto.userAuth.UserAuthDto.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.userAuth.UserAuthDto} returns this
 */
proto.userAuth.UserAuthDto.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string user_id = 7;
 * @return {string}
 */
proto.userAuth.UserAuthDto.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.userAuth.UserAuthDto} returns this
 */
proto.userAuth.UserAuthDto.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional auth.SubjectType subject_type = 8;
 * @return {!proto.auth.SubjectType}
 */
proto.userAuth.UserAuthDto.prototype.getSubjectType = function() {
  return /** @type {!proto.auth.SubjectType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.auth.SubjectType} value
 * @return {!proto.userAuth.UserAuthDto} returns this
 */
proto.userAuth.UserAuthDto.prototype.setSubjectType = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};





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
proto.userAuth.RegisterDto.prototype.toObject = function(opt_includeInstance) {
  return proto.userAuth.RegisterDto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.userAuth.RegisterDto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.userAuth.RegisterDto.toObject = function(includeInstance, msg) {
  var f, obj = {
    userAuth: (f = msg.getUserAuth()) && proto.userAuth.UserAuthDto.toObject(includeInstance, f),
    subject: (f = msg.getSubject()) && auth_pb.Subject.toObject(includeInstance, f)
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
 * @return {!proto.userAuth.RegisterDto}
 */
proto.userAuth.RegisterDto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.userAuth.RegisterDto;
  return proto.userAuth.RegisterDto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.userAuth.RegisterDto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.userAuth.RegisterDto}
 */
proto.userAuth.RegisterDto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.userAuth.UserAuthDto;
      reader.readMessage(value,proto.userAuth.UserAuthDto.deserializeBinaryFromReader);
      msg.setUserAuth(value);
      break;
    case 2:
      var value = new auth_pb.Subject;
      reader.readMessage(value,auth_pb.Subject.deserializeBinaryFromReader);
      msg.setSubject(value);
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
proto.userAuth.RegisterDto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.userAuth.RegisterDto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.userAuth.RegisterDto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.userAuth.RegisterDto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserAuth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.userAuth.UserAuthDto.serializeBinaryToWriter
    );
  }
  f = message.getSubject();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      auth_pb.Subject.serializeBinaryToWriter
    );
  }
};


/**
 * optional UserAuthDto user_auth = 1;
 * @return {?proto.userAuth.UserAuthDto}
 */
proto.userAuth.RegisterDto.prototype.getUserAuth = function() {
  return /** @type{?proto.userAuth.UserAuthDto} */ (
    jspb.Message.getWrapperField(this, proto.userAuth.UserAuthDto, 1));
};


/**
 * @param {?proto.userAuth.UserAuthDto|undefined} value
 * @return {!proto.userAuth.RegisterDto} returns this
*/
proto.userAuth.RegisterDto.prototype.setUserAuth = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.userAuth.RegisterDto} returns this
 */
proto.userAuth.RegisterDto.prototype.clearUserAuth = function() {
  return this.setUserAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.userAuth.RegisterDto.prototype.hasUserAuth = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional auth.Subject subject = 2;
 * @return {?proto.auth.Subject}
 */
proto.userAuth.RegisterDto.prototype.getSubject = function() {
  return /** @type{?proto.auth.Subject} */ (
    jspb.Message.getWrapperField(this, auth_pb.Subject, 2));
};


/**
 * @param {?proto.auth.Subject|undefined} value
 * @return {!proto.userAuth.RegisterDto} returns this
*/
proto.userAuth.RegisterDto.prototype.setSubject = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.userAuth.RegisterDto} returns this
 */
proto.userAuth.RegisterDto.prototype.clearSubject = function() {
  return this.setSubject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.userAuth.RegisterDto.prototype.hasSubject = function() {
  return jspb.Message.getField(this, 2) != null;
};





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
proto.userAuth.SendEmailVerificationDto.prototype.toObject = function(opt_includeInstance) {
  return proto.userAuth.SendEmailVerificationDto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.userAuth.SendEmailVerificationDto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.userAuth.SendEmailVerificationDto.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 2, ""),
    subjectType: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.userAuth.SendEmailVerificationDto}
 */
proto.userAuth.SendEmailVerificationDto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.userAuth.SendEmailVerificationDto;
  return proto.userAuth.SendEmailVerificationDto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.userAuth.SendEmailVerificationDto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.userAuth.SendEmailVerificationDto}
 */
proto.userAuth.SendEmailVerificationDto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 3:
      var value = /** @type {!proto.auth.SubjectType} */ (reader.readEnum());
      msg.setSubjectType(value);
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
proto.userAuth.SendEmailVerificationDto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.userAuth.SendEmailVerificationDto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.userAuth.SendEmailVerificationDto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.userAuth.SendEmailVerificationDto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeviceid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSubjectType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string deviceId = 1;
 * @return {string}
 */
proto.userAuth.SendEmailVerificationDto.prototype.getDeviceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.userAuth.SendEmailVerificationDto} returns this
 */
proto.userAuth.SendEmailVerificationDto.prototype.setDeviceid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.userAuth.SendEmailVerificationDto.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.userAuth.SendEmailVerificationDto} returns this
 */
proto.userAuth.SendEmailVerificationDto.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional auth.SubjectType subject_type = 3;
 * @return {!proto.auth.SubjectType}
 */
proto.userAuth.SendEmailVerificationDto.prototype.getSubjectType = function() {
  return /** @type {!proto.auth.SubjectType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.auth.SubjectType} value
 * @return {!proto.userAuth.SendEmailVerificationDto} returns this
 */
proto.userAuth.SendEmailVerificationDto.prototype.setSubjectType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





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
proto.userAuth.EditPasswordDto.prototype.toObject = function(opt_includeInstance) {
  return proto.userAuth.EditPasswordDto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.userAuth.EditPasswordDto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.userAuth.EditPasswordDto.toObject = function(includeInstance, msg) {
  var f, obj = {
    email: jspb.Message.getFieldWithDefault(msg, 1, ""),
    oldPassword: jspb.Message.getFieldWithDefault(msg, 2, ""),
    newPassword: jspb.Message.getFieldWithDefault(msg, 3, ""),
    subjectType: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.userAuth.EditPasswordDto}
 */
proto.userAuth.EditPasswordDto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.userAuth.EditPasswordDto;
  return proto.userAuth.EditPasswordDto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.userAuth.EditPasswordDto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.userAuth.EditPasswordDto}
 */
proto.userAuth.EditPasswordDto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOldPassword(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewPassword(value);
      break;
    case 4:
      var value = /** @type {!proto.auth.SubjectType} */ (reader.readEnum());
      msg.setSubjectType(value);
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
proto.userAuth.EditPasswordDto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.userAuth.EditPasswordDto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.userAuth.EditPasswordDto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.userAuth.EditPasswordDto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOldPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNewPassword();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSubjectType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string email = 1;
 * @return {string}
 */
proto.userAuth.EditPasswordDto.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.userAuth.EditPasswordDto} returns this
 */
proto.userAuth.EditPasswordDto.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string old_password = 2;
 * @return {string}
 */
proto.userAuth.EditPasswordDto.prototype.getOldPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.userAuth.EditPasswordDto} returns this
 */
proto.userAuth.EditPasswordDto.prototype.setOldPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string new_password = 3;
 * @return {string}
 */
proto.userAuth.EditPasswordDto.prototype.getNewPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.userAuth.EditPasswordDto} returns this
 */
proto.userAuth.EditPasswordDto.prototype.setNewPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional auth.SubjectType subject_type = 4;
 * @return {!proto.auth.SubjectType}
 */
proto.userAuth.EditPasswordDto.prototype.getSubjectType = function() {
  return /** @type {!proto.auth.SubjectType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.auth.SubjectType} value
 * @return {!proto.userAuth.EditPasswordDto} returns this
 */
proto.userAuth.EditPasswordDto.prototype.setSubjectType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


goog.object.extend(exports, proto.userAuth);
