import { App } from "../../../src/app"
import { appConfig } from "../../../src/config"

describe('Service Common.getHealth Test', () => {
    test('#SCT1-1 Should return health object', () => {
        const app = new App()

        const health = app.service.commonService.getHealth()

        expect(health.getName()).toBe(appConfig.serviceName)
    })
})
