import { ServerErrorResponse, ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js";
import { App } from "../app";
import { BaseServer } from "../interfaces/server.interface";
import { PayloadXid } from "../../proto_gen/common_pb";
import { UserDto } from "../../proto_gen/user_pb";
import { logger } from "../logger";

export class UserServer extends BaseServer {
    init(_: App): void {
    }

    getUser = (_: ServerUnaryCall<PayloadXid, UserDto>, callback: sendUnaryData<UserDto>) => {
        try {
            callback(null, null)
        }catch (e: unknown) {
            const err = e as ServerErrorResponse
            logger.info(err)
            callback(err, null)
        }
    }
}
