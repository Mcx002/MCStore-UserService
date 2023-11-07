import { UserDto } from '../../../proto_gen/user_pb';
import { DatabaseModels } from '../../../src/models';
import { User, UserCreationAttributes } from '../../../src/models/user.model';
import { UserRepository } from '../../../src/repositories/user.repository';
import { v4 as uuid } from 'uuid'

describe('Repository User.findUserByXid Test', () => {
    let dbModel: DatabaseModels | null = null
    beforeAll(async () => {
        dbModel = new DatabaseModels()
        await dbModel.init()
    })
    afterAll(() => {
        if (dbModel) {
            dbModel.dbAdapter.getInstance().close()
        }
    })

    test('#RUT1 Should return null', async () => {
        const userRepository = new UserRepository()

        const id = uuid()
        const user = await userRepository.findUserById(id)
        expect(user).toBeNull();
    })

    test('#RUT2 Should return non-null', async () => {
        const id = uuid()
        const user = await User.create({
            id,
            email: 'email@test.com',
            birthday: new Date('2000-01-01'),
            gender: 1,
            phone: '6281224523245',
            address: 'Padasuka',
            version: 1,
            firstName: 'MC'
        })

        const userRepository = new UserRepository()
        const user2 = await userRepository.findUserById(id)
        expect(user2?.id).toBe(user.id)

        await User.truncate()
    })
})

describe("Repository User.createUser Test", () => {
    let dbModel: DatabaseModels | null = null
    beforeAll(async () => {
        dbModel = new DatabaseModels()
        await dbModel.init()
    })
    afterAll(() => {
        if (dbModel) {
            dbModel.dbAdapter.getInstance().close()
        }
    })

    test('#RUT3 Should return new user', async () => {
        const userData: UserCreationAttributes = {
            id: uuid(),
            email: 'email@test.com',
            birthday: new Date('2000-01-01'),
            gender: UserDto.Gender.MALE,
            phone: '6281224523245',
            address: 'Padasuka',
            version: 1,
            firstName: 'MC',
            lastName: '',
            createdAt: new Date(),
            updatedAt: new Date(),
        }

        const userRep = new UserRepository()

        const user = await userRep.insert(userData)

        expect(user.id).toBe(userData.id)

        await User.truncate()
    })
})

describe('Repository User.findUserByEmail Test', () => {
    let dbModel: DatabaseModels | null = null
    beforeAll(async () => {
        dbModel = new DatabaseModels()
        await dbModel.init()
    })
    afterAll(() => {
        if (dbModel) {
            dbModel.dbAdapter.getInstance().close()
        }
    })

    test('#RUT4 Should return null', async () => {
        const userRepository = new UserRepository()

        const user = await userRepository.findUserByEmail('user@test.com')
        expect(user).toBeNull();
    })

    test('#RUT5 Should return non-null', async () => {
        const id = uuid()
        const email = 'user@test.com'

        const user = await User.create({
            id,
            email,
            birthday: new Date('2000-01-01'),
            gender: 1,
            phone: '6281224523245',
            address: 'Padasuka',
            version: 1,
            firstName: 'MC'
        })

        const userRepository = new UserRepository()
        const user2 = await userRepository.findUserByEmail(email)
        expect(user2?.id).toBe(user.id)
        expect(user2?.email).toBe(user.email)

        await User.truncate()
    })
})
