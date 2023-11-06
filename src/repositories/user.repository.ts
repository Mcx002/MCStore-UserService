import { User, UserAttributes } from "../models/user.model"

export class UserRepository {
    findUserByXid = (xid: string): Promise<UserAttributes | null> => {
        return User.findOne({ where: { xid } })
    }
}

