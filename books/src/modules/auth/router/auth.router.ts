import { AuthController } from '../controller/auth.controller'
import passport from 'passport'
import { RouterKeyType } from '../../book/router/router.types.js'

const auth = passport.authenticate(
  'local',
  {

  }
)
const authController = new AuthController()
const router: RouterKeyType = {
  auth: {
    path: '/login',
    method: 'post',
    auth: auth,
    function: authController.auth
  },
  signup: {
    path: '/signup',
    method: 'post',
    function: authController.signup
  }
}

export { router }
