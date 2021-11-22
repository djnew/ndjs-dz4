import { IBookRepository } from './i-book.repository'
import { IBookModel } from '../model/i-book.model'
import { BookModel } from '../model/book.model'

export class BookRepository implements IBookRepository {
  async createBook (book: IBookModel): Promise<IBookModel | false> {
    const newBook = new BookModel(book)
    try {
      await newBook.save()
      return newBook
    } catch (e) {
      console.error(e)
      return false
    }
  }

  async deleteBook (id: string): Promise<string | false> {
    try {
      await BookModel.deleteOne({ _id: id })
      return 'ok'
    } catch (e) {
      console.log(e)
      return false
    }
  }

  async getBook (id: string): Promise<IBookModel | null | false> {
    try {
      return BookModel.findById(id)
    } catch (e) {
      console.error(e)
      return false
    }
  }

  async getBooks (): Promise<IBookModel[]> {
    return BookModel.find().select('-__v')
  }

  async updateBook (id: string, params: IBookModel): Promise<IBookModel | null | false> {
    try {
      return BookModel.findByIdAndUpdate(id, params)
    } catch (e) {
      return false
    }
  }
}
