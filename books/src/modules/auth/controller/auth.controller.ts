import { Request, Response } from 'express'
import { IUserModel } from '../model/user.model'
import { authContainer } from '../auth.container'
import { UserService } from '../service/user.service.js'

const userService = authContainer.get<UserService>(UserService)
class AuthController {
  auth (req: Request, res: Response) {
    if (req.user) {
      const { email, login } = req.user as IUserModel
      res.status(201)
      res.json({ email, login })
    } else {
      res.status(400)
      res.json({ message: 'Что то пошло не так' })
    }
  }

  async signup (req: Request, res: Response) {
    const user = await userService.create(req.body)
    if (user.status) {
      res.status(201)
      res.json(user)
    } else {
      res.status(400)
      res.json(user)
    }
  }
}

export { AuthController }
