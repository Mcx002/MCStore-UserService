import { DataTypes, Model, Optional, Sequelize } from "sequelize"
import { UserDto } from "../../proto_gen/user_pb"
import { v4 as uuidv4 } from "uuid"

export interface UserAttributes {
    id: string
    createdAt: Date
    updatedAt: Date
    firstName: string
    lastName?: string
    email: string
    birthday: Date
    gender: UserDto.Gender
    phone: string
    address: string
    version: number
}

export type UserCreationAttributes = Optional<UserAttributes, "id">

export class User extends Model implements UserAttributes {
    id!: string
    createdAt!: Date
    updatedAt!: Date
    firstName!: string
    lastName?: string
    email!: string
    birthday!: Date
    gender!: UserDto.Gender
    phone!: string
    address!: string
    version!: number

    static initModel(sequelize: Sequelize): void {
        User.init({
            id: {
                type: DataTypes.UUID,
                allowNull: false,
                primaryKey: true,
                defaultValue: uuidv4()
            },
            firstName: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            lastName: {
                type: DataTypes.STRING(20),
                allowNull: true
            },
            email: {
                type: DataTypes.STRING(255),
                allowNull: false,
                unique: true,
            },
            birthday: {
                type: DataTypes.DATE,
                allowNull: false
            },
            gender: {
                type: DataTypes.SMALLINT,
                allowNull: false
            },
            phone: {
                type: DataTypes.STRING(40),
                allowNull: false
            },
            address: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            version: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        }, {
            sequelize,
            tableName: 'User'
        })
    }
}

