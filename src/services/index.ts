import {App} from '../app'
import { CommonService } from './common.service'
import { UserService } from './user.service'

export default class AppService {
    // instance creation
    commonService: CommonService = new CommonService()
    userService: UserService = new UserService()

    init(app: App) {
        // services initiation
        this.commonService.init(app)
        this.userService.init(app)
    }
}
