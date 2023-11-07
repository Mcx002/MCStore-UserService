import { Status } from '@grpc/grpc-js/build/src/constants'
import { UserDto } from '../../proto_gen/user_pb'
import { ErrorHandler } from '../adapter/error.adapter'
import { App } from '../app'
import { BaseService } from '../interfaces/service.interface'
import { UserAttributes, UserCreationAttributes } from '../models/user.model'
import { UserRepository } from '../repositories/user.repository'
import { getUnixFromDate } from '../utils/time'

export class UserService extends BaseService {
    userRep!: UserRepository

    init(app: App): void {
        this.userRep = app.repository.userRepository
    }

    getUser = async (id: string): Promise<UserDto> => {
        // find user
        const user = await this.userRep.findUserById(id)
        if (!user) {
            throw new ErrorHandler(Status.INVALID_ARGUMENT, "User is not found")
        }

        return this.composeUserDto(user)
    }

    create = async (userDto: UserDto): Promise<UserDto> => {
        // check existing email
        let user = await this.userRep.findUserByEmail(userDto.getEmail())
        if (user) {
            throw new ErrorHandler(Status.INVALID_ARGUMENT, "The email has been used")
        }

        // prepare user creation attributes
        const userData: UserCreationAttributes = {
            createdAt: new Date(),
            updatedAt: new Date(),
            firstName: userDto.getFirstName(),
            lastName: userDto.getLastName(),
            email: userDto.getEmail(),
            birthday: new Date(userDto.getBirthday()),
            gender: userDto.getGender(),
            phone: userDto.getPhone(),
            address: userDto.getAddress(),
            version: 1,
        }

        // execute
        user = await this.userRep.insert(userData)

        // compose result
        return this.composeUserDto(user)
    }

    composeUserDto = (user: UserAttributes): UserDto => {
        const userDto = new UserDto()
        userDto.setId(user.id)
        userDto.setEmail(user.email)
        userDto.setPhone(user.phone)
        userDto.setGender(user.gender)
        userDto.setAddress(user.address)
        userDto.setVersion(user.version)
        userDto.setBirthday(getUnixFromDate(user.birthday))
        userDto.setFirstName(user.firstName)
        userDto.setLastName(user.lastName ?? '')
        userDto.setCreatedAt(getUnixFromDate(user.createdAt))
        userDto.setUpdatedAt(getUnixFromDate(user.updatedAt))
        return userDto
    }
}
