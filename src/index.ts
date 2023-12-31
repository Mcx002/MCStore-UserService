import { ServerCredentials } from "@grpc/grpc-js"
import { App } from "./app"
import { appConfig } from "./config"
import { DatabaseModels } from "./models"
import { loadEnvFile } from "./utils/env-parser"
import { serverLifetime } from "./utils/server"
import { logger } from "./logger"
import { ErrorHandler } from "./adapter/error.adapter"
import { Status } from "@grpc/grpc-js/build/src/constants"

async function main() {
    try {
        // load configuration
        loadEnvFile()

        const port = appConfig.port || 3000
        const uri = `${appConfig.host}:${port}`

        // init db
        const dbModel = new DatabaseModels()
        await dbModel.init()

        // init app
        const app = new App()
        app.service.init(app)
        app.server.init(app)

        // run server
        app.server.bindAsync(uri, ServerCredentials.createInsecure(), (error, _) => {
            app.server.start()

            serverLifetime.setStartTime(new Date().getTime())
            console.log(`Listening on ${uri}`)

            if (error) {
                logger.error(JSON.stringify(error))
            }
        })

    } catch (e) {
        // throw unexpected error
        const err = e as Error
        logger.error(JSON.stringify(err))
        throw new ErrorHandler(Status.UNKNOWN, "Internal error")
    }
}

main().catch((e: ErrorHandler) => {
    logger.error(JSON.stringify(e))
})
