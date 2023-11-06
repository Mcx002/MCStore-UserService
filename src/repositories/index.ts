import { UserRepository } from "./user.repository";

export class AppRepository {
    // instance creation
    userRepository: UserRepository = new UserRepository()
}
