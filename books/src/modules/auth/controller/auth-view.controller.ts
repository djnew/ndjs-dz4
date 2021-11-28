import { Response, Request } from 'express'

class AuthViewController {
  authView (req: Request, res: Response) {
    res.render('auth/login', {
      title: 'Библиотека - вход/регистрация'
    })
  }

  signupView (req: Request, res: Response) {
    res.render('auth/me', {
      title: 'Библиотека - пользователь',
      user: req.user
    })
  }

  logout (req: Request, res: Response) {
    req.logout()
    res.redirect('/user/login')
  }
}

export { AuthViewController }
