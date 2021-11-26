import 'reflect-metadata'
import { Container } from 'inversify'
import { BookRepository } from './repository/book.repository'
import { BookService } from './service/book.service'

const container = new Container()

container.bind(BookRepository).toSelf()
container.bind(BookService).toSelf()

export { container }
