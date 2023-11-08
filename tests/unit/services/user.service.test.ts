import { FileDto } from '../../../proto_gen/filestore_pb'
import { UserDto } from '../../../proto_gen/user_pb'
import { App } from '../../../src/app'
import { UserAttributes } from '../../../src/models/user.model'
import { v4 as uuidv4 } from 'uuid'
import { getUnixFromDate } from '../../../src/utils/time'

describe('Service User.getUser Test', () => {
    test('#SUT1-1 Should throw user is not found', async () => {
        const app = new App()
        app.service.init(app)

        jest.spyOn(app.repository.userRepository, "findUserById").mockImplementation(async () => null)

        expect(() => app.service.userService.getUser('test')).rejects.toThrow('User is not found')
    })

    test('#SUT1-2 Should return user without lastName and photoProfile available', async () => {
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

    test('#SUT1-3 Should return user with lastName available', async () => {
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

    test('#SUT1-4 Should return user with photoProfile available', async () => {
        const app = new App()
        app.service.init(app)

        const id = uuidv4()
        jest.spyOn(app.repository.userRepository, "findUserById").mockImplementation(async () => ({
            id,
            photoProfile: 'photoProfileId',
            birthday: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
        } as UserAttributes))

        const userDto = await app.service.userService.getUser(id)

        expect(userDto.getId()).toBe(id)
    })
})

describe('Service User.create Test', () => {
    test('#SUT2-1 Should throw The email has been used', async () => {
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

    test('#SUT2-2 Should return user with photoProfile', async () => {
        const app = new App()
        app.service.init(app)

        const id = uuidv4()
        jest.spyOn(app.repository.userRepository, "findUserByEmail").mockImplementation(async () => null)
        jest.spyOn(app.repository.userRepository, "insert").mockImplementation(async () => ({
            id,
            photoProfile: 'photoIdTest',
            birthday: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
        } as UserAttributes))

        const userDto = new UserDto()
        userDto.setEmail('user@test.com')

        // prepare photoProfile data
        const photoProfile = new FileDto()
        photoProfile.setId('photoIdTest')

        userDto.setPhotoProfile(photoProfile)

        const user = await app.service.userService.create(userDto)
        expect(user.getId()).toBe(id)
        expect(user.getPhotoProfile()?.getId()).toBe(photoProfile.getId())
    })


    test('#SUT2-3 Should return user without photoProfile', async () => {
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
        expect(user.getPhotoProfile()?.getId()).toBe('')
    })
})

describe('Service User.update Test', () => {
    test('#SUT3-1 Should throw The email has been used', async () => {
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
        expect(() => app.service.userService.update(userDto)).rejects.toThrow("The email has been used")
    })

    test('#SUT3-2 Should throw User is not found', async () => {
        const app = new App()
        app.service.init(app)

        const id = uuidv4()
        jest.spyOn(app.repository.userRepository, "findUserByEmail").mockImplementation(async () => null)
        jest.spyOn(app.repository.userRepository, "findUserById").mockImplementation(async () => null)

        const userDto = new UserDto()
        userDto.setEmail('user@test.com')
        expect(() => app.service.userService.update(userDto)).rejects.toThrow("User is not found")
    })

    test('#SUT3-3 Should nothing updated', async () => {
        const app = new App()
        app.service.init(app)

        const id = uuidv4()
        const userData: UserAttributes = {
            firstName: '',
            lastName: '',
            email: '',
            gender: UserDto.Gender.MALE,
            phone: '',
            address: '',
            photoProfile: 'test',
            id,
            version: 1,
            birthday: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        jest.spyOn(app.repository.userRepository, "findUserByEmail").mockImplementation(async () => null)
        jest.spyOn(app.repository.userRepository, "findUserById").mockImplementation(async () => Object.assign({}, userData))


        jest.spyOn(app.repository.userRepository, "update").mockImplementation(async () => 1)

        const userDto = new UserDto()
        userDto.setVersion(1)
        const userUpdated = await app.service.userService.update(userDto)

        expect(userUpdated.getId()).toBe(id)

        expect(userUpdated.getFirstName()).toBe(userData.firstName)
        expect(userUpdated.getLastName()).toBe(userData.lastName)
        expect(userUpdated.getEmail()).toBe(userData.email)
        expect(userUpdated.getBirthday()).toBe(getUnixFromDate(userData.birthday))
        expect(userUpdated.getGender()).toBe(userData.gender)
        expect(userUpdated.getPhone()).toBe(userData.phone)
        expect(userUpdated.getAddress()).toBe(userData.address)
        expect(userUpdated.getPhotoProfile()?.getId()).toBe(userData.photoProfile)
    })


    test('#SUT3-4 Should update all data', async () => {
        // service initiation
        const app = new App()
        app.service.init(app)

        // prepare user data
        const id = uuidv4()

        // mock find user by email to return null
        jest.spyOn(app.repository.userRepository, "findUserByEmail").mockImplementation(async () => null)

        // mock find user by email to return user data
        jest.spyOn(app.repository.userRepository, "findUserById").mockImplementation(async () => ({
            id,
            email: "email2@test.com",
            birthday: new Date(),
            gender: 1,
            phone: "6281224523245",
            address: "Padasuka",
            version: 1,
            firstName: "MC",
            createdAt: new Date(),
            updatedAt: new Date(),
            lastName: null,
            photoProfile: null,
        } as unknown as UserAttributes))

        // mock update to return 1
        jest.spyOn(app.repository.userRepository, "update").mockImplementation(async () => 1)

        // prepare user dto
        const userDto = new UserDto()
        userDto.setFirstName('Muchlish')
        userDto.setLastName('Choeruddin')
        userDto.setEmail('user@test.com')
        userDto.setBirthday(getUnixFromDate(new Date()))
        userDto.setGender(UserDto.Gender.MALE)
        userDto.setPhone('6289668031721')
        userDto.setAddress('Padasuka')
        userDto.setVersion(1)

        const fileDto = new FileDto()
        fileDto.setId('photoIdTest')
        userDto.setPhotoProfile(fileDto)

        // execute update
        const userUpdated = await app.service.userService.update(userDto)

        expect(userUpdated.getId()).toBe(id)

        expect(userUpdated.getFirstName()).toBe(userDto.getFirstName())
        expect(userUpdated.getLastName()).toBe(userDto.getLastName())
        expect(userUpdated.getEmail()).toBe(userDto.getEmail())
        expect(userUpdated.getBirthday()).toBe(userDto.getBirthday())
        expect(userUpdated.getGender()).toBe(userDto.getGender())
        expect(userUpdated.getPhone()).toBe(userDto.getPhone())
        expect(userUpdated.getAddress()).toBe(userDto.getAddress())
        expect(userUpdated.getPhotoProfile()?.getId()).toBe(userDto.getPhotoProfile()?.getId())
    })

    test('#SUT3-5 Should throw Version is not valid', async () => {
        // service initiation
        const app = new App()
        app.service.init(app)

        // prepare user data
        const id = uuidv4()

        // mock find user by email to return null
        jest.spyOn(app.repository.userRepository, "findUserByEmail").mockImplementation(async () => null)

        // mock find user by email to return user data
        jest.spyOn(app.repository.userRepository, "findUserById").mockImplementation(async () => ({
            id,
            email: "email2@test.com",
            birthday: new Date(),
            gender: 1,
            phone: "6281224523245",
            address: "Padasuka",
            version: 1,
            firstName: "MC",
            createdAt: new Date(),
            updatedAt: new Date(),
            lastName: null,
            photoProfile: null,
        } as unknown as UserAttributes))

        // prepare user dto
        const userDto = new UserDto()
        userDto.setVersion(2)

        // execute update
        expect(() => app.service.userService.update(userDto)).rejects.toThrow("Version is not valid")
    })

    test('#SUT3-6 Should throw Update Failed, Please Try Again', async () => {
        // service initiation
        const app = new App()
        app.service.init(app)

        // prepare user data
        const id = uuidv4()

        // mock find user by email to return null
        jest.spyOn(app.repository.userRepository, "findUserByEmail").mockImplementation(async () => null)

        // mock find user by email to return user data
        jest.spyOn(app.repository.userRepository, "findUserById").mockImplementation(async () => ({
            id,
            email: "email2@test.com",
            birthday: new Date(),
            gender: 1,
            phone: "6281224523245",
            address: "Padasuka",
            version: 1,
            firstName: "MC",
            createdAt: new Date(),
            updatedAt: new Date(),
            lastName: null,
            photoProfile: null,
        } as unknown as UserAttributes))

        // mock update to return 1
        jest.spyOn(app.repository.userRepository, "update").mockImplementation(async () => 0)

        // prepare user dto
        const userDto = new UserDto()
        userDto.setVersion(1)
        // execute update
        expect(() => app.service.userService.update(userDto)).rejects.toThrow("Update Failed, Please Try Again")
    })
})