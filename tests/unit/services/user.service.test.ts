import { App } from '../../../src/app'
import { UserAttributes } from '../../../src/models/user.model'

describe('Service User.getUser Test', () => {
    test('#SUT1 Should throw user is not found', async () => {
        const app = new App()
        app.service.init(app)

        jest.spyOn(app.repository.userRepository, "findUserByXid").mockImplementation(async () => null)

        expect(() => app.service.userService.getUser('test')).rejects.toThrow('User is not found')
    })

    test('#SUT2 Should return user', async () => {
        const app = new App()
        app.service.init(app)

        const xid = 'test'
        jest.spyOn(app.repository.userRepository, "findUserByXid").mockImplementation(async () => ({
            xid,
            birthday: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
        } as UserAttributes))

        const userDto = await app.service.userService.getUser(xid)

        expect(userDto.getXid()).toBe(xid)
    })
})
