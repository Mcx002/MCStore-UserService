import { DataTypes, Model, Sequelize } from "sequelize"

export interface UserAttributes {
    id: number
    xid: string
    createdAt: Date
    updatedAt: Date
    firstName: string
    lastName: string
    email: string
    birthday: Date
    gender: string
    phone: string
    address: string
    version: number
}

export class User extends Model implements UserAttributes {
    id!: number
    xid!: string
    createdAt!: Date
    updatedAt!: Date
    firstName!: string
    lastName!: string
    email!: string
    birthday!: Date
    gender!: string
    phone!: string
    address!: string
    version!: number

    static initModel(sequelize: Sequelize): void {
        User.init({
            id: {
                type: DataTypes.SMALLINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            xid: {
                type: DataTypes.STRING(4),
                allowNull: false,
                unique: true,
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
                allowNull: false
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

