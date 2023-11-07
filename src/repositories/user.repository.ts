import { User, UserAttributes, UserCreationAttributes } from "../models/user.model"

export class UserRepository {
    findUserById = (id: string): Promise<UserAttributes | null> => {
        return User.findOne({ where: { id } })
    }

    insert = (data: UserCreationAttributes): Promise<UserAttributes> => {
        return User.create(data)
    }

    findUserByEmail = (email: string): Promise<UserAttributes | null> => {
        return User.findOne({ where: { email } })
    }
}

