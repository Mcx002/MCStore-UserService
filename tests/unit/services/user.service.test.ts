import { UserDto } from '../../../proto_gen/user_pb'
import { App } from '../../../src/app'
import { UserAttributes } from '../../../src/models/user.model'
import { v4 as uuidv4 } from 'uuid'

describe('Service User.getUser Test', () => {
    test('#SUT1 Should throw user is not found', async () => {
        const app = new App()
        app.service.init(app)

        jest.spyOn(app.repository.userRepository, "findUserById").mockImplementation(async () => null)

        expect(() => app.service.userService.getUser('test')).rejects.toThrow('User is not found')
    })

    test('#SUT2 Should return user without lastName available', async () => {
        const app = new App()
        app.service.init(app)

        const id = uuidv4()
        jest.spyOn(app.repository.userRepository, "findUserById").mockImplementation(async () => ({
            id,
            birthday: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
        } as UserAttributes))

        const userDto = await app.service.userService.getUser(id)

        expect(userDto.getId()).toBe(id)
    })

    test('#SUT3 Should return user wit lastName available', async () => {
        const app = new App()
        app.service.init(app)

        const id = uuidv4()
        jest.spyOn(app.repository.userRepository, "findUserById").mockImplementation(async () => ({
            id,
            lastName: 'userLastName',
            birthday: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
        } as UserAttributes))

        const userDto = await app.service.userService.getUser(id)

        expect(userDto.getId()).toBe(id)
    })
})

describe('Service User.create Test', () => {
    test('#SUT4 Should throw The email has been used', async () => {
        const app = new App()
        app.service.init(app)

        const id = uuidv4()
        jest.spyOn(app.repository.userRepository, "findUserByEmail").mockImplementation(async () => ({
            id,
            birthday: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
        } as UserAttributes))

        const userDto = new UserDto()
        userDto.setEmail('user@test.com')
        expect(() => app.service.userService.create(userDto)).rejects.toThrow("The email has been used")
    })

    test('#SUT5 Should return user', async () => {
        const app = new App()
        app.service.init(app)

        const id = uuidv4()
        jest.spyOn(app.repository.userRepository, "findUserByEmail").mockImplementation(async () => null)
        jest.spyOn(app.repository.userRepository, "insert").mockImplementation(async () => ({
            id,
            birthday: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
        } as UserAttributes))

        const userDto = new UserDto()
        userDto.setEmail('user@test.com')

        const user = await app.service.userService.create(userDto)
        expect(user.getId()).toBe(id)
    })
})