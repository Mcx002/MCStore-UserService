// package: common
// file: common.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Health extends jspb.Message { 
    getName(): string;
    setName(value: string): Health;
    getVersion(): string;
    setVersion(value: string): Health;
    getLifetime(): number;
    setLifetime(value: number): Health;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Health.AsObject;
    static toObject(includeInstance: boolean, msg: Health): Health.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Health, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Health;
    static deserializeBinaryFromReader(message: Health, reader: jspb.BinaryReader): Health;
}

export namespace Health {
    export type AsObject = {
        name: string,
        version: string,
        lifetime: number,
    }
}

export class TokenDto extends jspb.Message { 
    getToken(): string;
    setToken(value: string): TokenDto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TokenDto.AsObject;
    static toObject(includeInstance: boolean, msg: TokenDto): TokenDto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TokenDto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TokenDto;
    static deserializeBinaryFromReader(message: TokenDto, reader: jspb.BinaryReader): TokenDto;
}

export namespace TokenDto {
    export type AsObject = {
        token: string,
    }
}

export class PayloadXid extends jspb.Message { 
    getXid(): string;
    setXid(value: string): PayloadXid;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PayloadXid.AsObject;
    static toObject(includeInstance: boolean, msg: PayloadXid): PayloadXid.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PayloadXid, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PayloadXid;
    static deserializeBinaryFromReader(message: PayloadXid, reader: jspb.BinaryReader): PayloadXid;
}

export namespace PayloadXid {
    export type AsObject = {
        xid: string,
    }
}

export class PayloadIdString extends jspb.Message { 
    getId(): string;
    setId(value: string): PayloadIdString;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PayloadIdString.AsObject;
    static toObject(includeInstance: boolean, msg: PayloadIdString): PayloadIdString.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PayloadIdString, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PayloadIdString;
    static deserializeBinaryFromReader(message: PayloadIdString, reader: jspb.BinaryReader): PayloadIdString;
}

export namespace PayloadIdString {
    export type AsObject = {
        id: string,
    }
}

export enum Gender {
    UNKNOWN = 0,
    MALE = 1,
    FEMALE = 2,
}
