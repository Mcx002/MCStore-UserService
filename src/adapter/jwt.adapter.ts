import * as jwt from 'jsonwebtoken'
import {SignOptions} from 'jsonwebtoken'
import {appConfig} from "../config";
import {isAnyStringInArrayB} from "../utils/array";
import {ErrorHandler} from "./error.adapter";
import {Status} from "@grpc/grpc-js/build/src/constants";

export interface JwtSignInterface extends SignOptions {
    payload: {[k: string]: unknown}
}

class JwtAdapter {
    /**
     * Sign Guide
     * @param data - any
     * @param expiresIn - in seconds
     */
    sign(data: JwtSignInterface, expiresIn: number) {
        const signOptions: SignOptions = {
            algorithm: 'HS256',
            expiresIn: `${expiresIn}s`,
            audience: data.audience,
            issuer: appConfig.jwtIssuer,
            subject: data.subject,
        }

        if (data.keyid) {
            signOptions.keyid = data.keyid
        }

        if (data.jwtid) {
            signOptions.jwtid = data.jwtid
        }

        return jwt.sign(
            data.payload,
            appConfig.jwtSecretKey,
            signOptions
        )
    }

    validateAudience(payloadAudience: string | string[] | undefined, requiredAudiences: string[]) {
        let aud = payloadAudience ?? []
        if (!Array.isArray(aud)) {
            aud = [aud]
        }

        if (!isAnyStringInArrayB(requiredAudiences, aud)) {
            throw new ErrorHandler(Status.INVALID_ARGUMENT, "Invalid audience")
        }
    }

    verify(token: string, audience: string[]): jwt.JwtPayload {
        const data = jwt.verify(token, appConfig.jwtSecretKey) as jwt.JwtPayload

        if (data.iss !== appConfig.jwtIssuer) {
            throw new ErrorHandler(Status.INVALID_ARGUMENT, "Invalid token")
        }

        this.validateAudience(data.aud, audience)

        return data
    }
}

export const jwtAdapter = new JwtAdapter()
