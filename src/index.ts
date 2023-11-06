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
        loadEnvFile()

        const port = appConfig.port || 3000
        const uri = `localhost:${port}`

        const dbModel = new DatabaseModels()
        await dbModel.init()

        const app = new App()
        app.service.init(app)
        app.server.init(app)

        app.server.bindAsync(uri, ServerCredentials.createInsecure(), (error, _) => {
            app.server.start()

            serverLifetime.setStartTime(new Date().getTime())
            logger.info(`Listening on ${uri}`)

            if (error) {
                logger.error(error.message)
            }
        })

    } catch(e) {
        const err = e as Error
        logger.error(err.message)
        throw new ErrorHandler(Status.UNKNOWN, "internal error")
    }
}

main().catch(e => {
    const err = e as Error
    logger.error(err.message)
})
