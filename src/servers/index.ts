import { Server } from "@grpc/grpc-js";
import { UserService } from "../../proto_gen/user-svc_grpc_pb";
import { UserServer } from "./user.server";
import { App } from '../app';
import { CommonServer } from "./common.server";

export class AppServer extends Server {
    // server creations
    commonServer = new CommonServer()
    userServer = new UserServer()

    // server initiation
    init(app: App): void {
        this.commonServer.init(app)
        this.userServer.init(app)

        // Auth Service Route
        this.addService(UserService, {
            getHealth: this.commonServer.getHealth,

            getUser: this.userServer.getUser,
            createUser: this.userServer.createUser,
        })
    }
}
