import { Request, Response } from 'express'

function home (req: Request, res: Response) {
  res.render('index', {
    title: 'Библиотека'
  })
}

export { home }
