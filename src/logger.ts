import * as winston from "winston";
import {appConfig} from "./config";

export const logger = winston.createLogger({
    level: appConfig.loggerLevel,
    format: winston.format.json(),
    defaultMeta: { service: appConfig.serviceName },
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        // new winston.transports.File({ filename: 'combined.log' }),
    ]
})

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}
