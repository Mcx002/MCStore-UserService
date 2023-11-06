import { Status } from '@grpc/grpc-js/build/src/constants'
import { UserDto } from '../../proto_gen/user_pb'
import { ErrorHandler } from '../adapter/error.adapter'
import { App } from '../app'
import { BaseService } from '../interfaces/service.interface'
import { UserAttributes } from '../models/user.model'
import { UserRepository } from '../repositories/user.repository'
import { getUnixFromDate } from '../utils/time'

export class UserService extends BaseService {
    userRep!: UserRepository

    init(app: App): void {
        this.userRep = app.repository.userRepository
    }

    getUser = async (xid: string): Promise<UserDto> => {
        const user = await this.userRep.findUserByXid(xid)
        if (!user) {
            throw new ErrorHandler(Status.INVALID_ARGUMENT, "User is not found")
        }

        return this.composeUserDto(user)
    }

    composeUserDto = (user: UserAttributes): UserDto => {
        const userDto = new UserDto()
        userDto.setXid(user.xid)
        userDto.setEmail(user.email)
        userDto.setPhone(user.phone)
        userDto.setGender(user.gender)
        userDto.setAddress(user.address)
        userDto.setVersion(user.version)
        userDto.setBirthday(getUnixFromDate(user.birthday))
        userDto.setFirstName(user.firstName)
        userDto.setLastName(user.lastName)
        userDto.setCreatedAt(getUnixFromDate(user.createdAt))
        userDto.setUpdatedAt(getUnixFromDate(user.updatedAt))
        return userDto
    }
}
