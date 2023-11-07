import { ServerErrorResponse, ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js";
import { App } from "../app";
import { BaseServer } from "../interfaces/server.interface";
import { PayloadXid } from "../../proto_gen/common_pb";
import { UserDto } from "../../proto_gen/user_pb";
import { logger } from "../logger";
import { UserService } from "../services/user.service";

export class UserServer extends BaseServer {
    userService!: UserService

    init(app: App): void {
        this.userService = app.service.userService
    }

    getUser = async (call: ServerUnaryCall<PayloadXid, UserDto>, callback: sendUnaryData<UserDto>) => {
        try {
            const req = call.request

            const user = await this.userService.getUser(req.getXid())

            callback(null, user)
        } catch (e: unknown) {
            const err = e as ServerErrorResponse
            logger.info(err)
            callback(err, null)
        }
    }
}
