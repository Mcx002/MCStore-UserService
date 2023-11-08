import { UserDto } from '../../../proto_gen/user_pb';
import { DatabaseModels } from '../../../src/models';
import { User, UserAttributes, UserCreationAttributes } from '../../../src/models/user.model';
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

    test('#RUT1-1 Should return null', async () => {
        const userRepository = new UserRepository()

        const id = uuid()
        const user = await userRepository.findUserById(id)
        expect(user).toBeNull();
    })

    test('#RUT1-2 Should return non-null', async () => {
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

    test('#RUT2-1 Should return new user', async () => {
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

    test('#RUT3-1 Should return null', async () => {
        const userRepository = new UserRepository()

        const user = await userRepository.findUserByEmail('user@test.com')
        expect(user).toBeNull();
    })

    test('#RUT3-2 Should return non-null', async () => {
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

    test('#RUT4-1 Should return 0', async () => {
        const userRepository = new UserRepository()

        const update = await userRepository.update('testid', {}, 1)
        expect(update).toBe(0);
    })

    test('#RUT4-2 Should return 1', async () => {
        // create user
        const userData: UserCreationAttributes = {
            email: 'email2@test.com',
            birthday: new Date('2000-01-01'),
            gender: UserDto.Gender.MALE,
            phone: '6281224523245',
            address: 'Padasuka',
            version: 1,
            firstName: 'MC',
            createdAt: new Date(),
            updatedAt: new Date(),
        }
        const user = await User.create(userData)

        // prepare user update data
        const updatedValue: Partial<UserAttributes> = {
            firstName: 'Muchlish',
            createdAt: new Date(),
            updatedAt: new Date(),
            version: userData.version + 1,
        }

        const userRepository = new UserRepository()

        const update = await userRepository.update(user?.id, updatedValue, user?.version)
        expect(update).toBe(1);

        const user2 = await User.findOne({ where: { id: user.id } })
        expect(user2?.firstName).toBe(updatedValue.firstName);
        expect(user2?.firstName).not.toBe(user.firstName)

        await User.truncate()
    })
})