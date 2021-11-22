import { BookRepository } from '../repository/book.repository'
import axios from 'axios'
import { IBookModel } from '../model/i-book.model'
import { updateBookType } from '../types/book.types.js'

const url = process.env.COUNTER_URL || 'localhost'
const port = process.env.COUNTER_PORT || 5000

class BookService {
  private bookRepository: BookRepository;

  constructor () {
    this.bookRepository = new BookRepository()
  }

  async getAll (): Promise<IBookModel[]> {
    return this.bookRepository.getBooks()
  }

  async incrCounter (id: string) {
    console.log(`incr ${url}:${port}/counter/${id}/incr`)
    try {
      const { data } = await axios.get(`${url}:${port}/counter/${id}/incr`)
      return data.counter || false
    } catch (e) {
      console.error(e)
      return false
    }
  }

  async getCounter (id: string) {
    console.log(`get ${url}:${port}/counter/${id}`)
    try {
      const { data } = await axios.get(`${url}:${port}/counter/${id}`)
      return data.counter || false
    } catch (e) {
      console.error(e)
      return false
    }
  }

  async getById (id: string, incr: boolean = false): Promise<updateBookType | false> {
    const book = await this.bookRepository.getBook(id)
    let shows
    if (book) {
      if (incr) {
        shows = await this.incrCounter(id)
      } else {
        shows = await this.getCounter(id)
      }

      return {
        book: book,
        shows: shows || 0
      }
    }
    return false
  }

  async createBook (params: any): Promise<IBookModel | false> {
    let bookFile = {
      fileBook: '',
      fileName: ''
    }
    if (params.file !== undefined) {
      bookFile = { fileBook: params.file.path, fileName: params.file.originalname }
    }
    const bookProps = {
      title: params.body.title,
      description: params.body.description,
      authors: params.body.authors,
      favorite: params.body.favorite,
      fileCover: params.body.fileCover
    }
    return await this.bookRepository.createBook({ ...bookProps, ...bookFile })
  }

  async updateBook (id: string, params: any): Promise<IBookModel | false> {
    let bookFile = {
      fileBook: '',
      fileName: ''
    }
    if (params.file !== undefined) {
      bookFile = { fileBook: params.file.path, fileName: params.file.originalname }
    }

    const bookProps = {
      title: params.body.title,
      description: params.body.description,
      authors: params.body.authors,
      favorite: params.body.favorite,
      fileCover: params.body.fileCover
    }

    const updateBook = await this.bookRepository.updateBook(id, { ...bookProps, ...bookFile })
    if (updateBook) {
      return updateBook
    }
    return false
  }

  async deleteBook (id: string): Promise<string | false> {
    return this.bookRepository.deleteBook(id)
  }

  //
  // static downloadBook (id: string) {
  //   if (!books[id]) {
  //     return false
  //   }
  //   return books[id].fileBook
  // }
}

export { BookService }
