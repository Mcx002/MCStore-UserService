import {DatabaseModels} from '../../../src/models';
import { User } from '../../../src/models/user.model';
import { UserRepository } from '../../../src/repositories/user.repository';

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

        const user = await userRepository.findUserByXid('user0')
        expect(user).toBeNull();
    })

    test('#RUT2 Should return non-null', async () => {
        const xid = 'test'
        const user = await User.create({
            xid: xid,
            email: 'email@test.com',
            birthday: new Date('2000-01-01'),
            gender: 1,
            phone: '6281224523245',
            address: 'Padasuka',
            version: 1,
            firstName: 'MC'
        })

        const userRepository = new UserRepository()
        const user2 = await userRepository.findUserByXid(xid)
        expect(user2?.xid).toBe(user.xid)

        await User.truncate()
    })
})
