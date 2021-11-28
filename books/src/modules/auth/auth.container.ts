import 'reflect-metadata'
import { Container } from 'inversify'
import { UserService } from './service/user.service'

const authContainer = new Container()

authContainer.bind(UserService).toSelf()

export { authContainer }
