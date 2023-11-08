import { Status } from '@grpc/grpc-js/build/src/constants'
import { UserDto } from '../../proto_gen/user_pb'
import { ErrorHandler } from '../adapter/error.adapter'
import { App } from '../app'
import { BaseService } from '../interfaces/service.interface'
import { UserAttributes, UserCreationAttributes } from '../models/user.model'
import { UserRepository } from '../repositories/user.repository'
import { getDateFromUnix, getUnixFromDate } from '../utils/time'
import { FileDto } from '../../proto_gen/filestore_pb'
import { notEmptyString } from '../utils/value'

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
        await this.validateEmailExisted(userDto.getEmail())

        // prepare user creation attributes
        const userData: UserCreationAttributes = {
            createdAt: new Date(),
            updatedAt: new Date(),
            firstName: userDto.getFirstName(),
            lastName: userDto.getLastName(),
            email: userDto.getEmail(),
            birthday: getDateFromUnix(userDto.getBirthday()),
            gender: userDto.getGender(),
            phone: userDto.getPhone(),
            address: userDto.getAddress(),
            photoProfile: userDto.getPhotoProfile()?.getId() ?? undefined,
            version: 1,
        }

        // execute
        const user = await this.userRep.insert(userData)

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

        const fileDto = new FileDto()
        fileDto.setId(user.photoProfile ?? '')

        userDto.setPhotoProfile(fileDto)
        return userDto
    }

    validateEmailExisted = async (email: string) => {
        // check existing email
        const user = await this.userRep.findUserByEmail(email)
        if (user) {
            throw new ErrorHandler(Status.INVALID_ARGUMENT, "The email has been used")
        }
    }

    update = async (userDto: UserDto): Promise<UserDto> => {
        // check is updated email existed
        if (userDto.getEmail() != '') {
            await this.validateEmailExisted(userDto.getEmail())
        }

        // check if user is exists
        const user = await this.userRep.findUserById(userDto.getId())
        if (!user) {
            throw new ErrorHandler(Status.INVALID_ARGUMENT, "User is not found")
        }

        // check version
        if (userDto.getVersion() !== user.version) {
            throw new ErrorHandler(Status.INVALID_ARGUMENT, "Version is not valid")
        }

        // prepare updated user value
        const updatedValue = {
            firstName: notEmptyString(userDto.getFirstName()),
            lastName: notEmptyString(userDto.getLastName()),
            email: notEmptyString(userDto.getEmail()),
            birthday: userDto.getBirthday() === 0 ? undefined : getDateFromUnix(userDto.getBirthday()),
            gender: userDto.getGender() === UserDto.Gender.UNKNOWN ? undefined : userDto.getGender(),
            phone: notEmptyString(userDto.getPhone()),
            address: notEmptyString(userDto.getAddress()),
            photoProfile: userDto.getPhotoProfile()?.getId() ?? undefined,
            updatedAt: new Date(),
            version: user.version + 1,
        }

        // execute
        const update = await this.userRep.update(userDto.getId(), updatedValue, userDto.getVersion())
        if (update === 0) {
            throw new ErrorHandler(Status.INTERNAL, "Update Failed, Please Try Again")
        }

        user.firstName = updatedValue.firstName ?? user.firstName
        user.lastName = updatedValue.lastName ?? user.lastName
        user.email = updatedValue.email ?? user.email
        user.birthday = updatedValue.birthday ?? user.birthday
        user.gender = updatedValue.gender ?? user.gender
        user.phone = updatedValue.phone ?? user.phone
        user.address = updatedValue.address ?? user.address
        user.photoProfile = updatedValue.photoProfile ?? user.photoProfile
        user.updatedAt = updatedValue.updatedAt
        user.version = updatedValue.version

        return this.composeUserDto(user)
    }
}
