import { AuthViewController } from '../controller/auth-view.controller'
import { Request, Response } from 'express'
import { RouterKeyType } from '../../book/router/router.types.js'

interface RequestWithSession extends Request{
  session?: any
}

const authViewController = new AuthViewController()
const router: RouterKeyType = {
  auth: {
    path: '/login',
    method: 'get',
    auth: function (req: Request, res: Response, next: any) {
      if (req.user) {
        return res.redirect('/user/me')
      }
      next()
    },
    function: authViewController.authView
  },
  logout: {
    path: '/logout',
    method: 'get',
    function: authViewController.logout
  },
  signup: {
    path: '/me',
    method: 'get',
    auth: function (req: RequestWithSession, res: Response, next: any) {
      if (!req.isAuthenticated || !req.isAuthenticated()) {
        if (req.session) {
          req.session.returnTo = req.originalUrl || req.url
        }
        return res.redirect('/user/login')
      }
      next()
    },
    function: authViewController.signupView
  }
}

export { router }
