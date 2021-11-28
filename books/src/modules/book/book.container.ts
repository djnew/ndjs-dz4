import 'reflect-metadata'
import { Container } from 'inversify'
import { BookRepository } from './repository/book.repository'
import { BookService } from './service/book.service'

const bookContainer = new Container()

bookContainer.bind(BookRepository).toSelf()
bookContainer.bind(BookService).toSelf()

export { bookContainer }
