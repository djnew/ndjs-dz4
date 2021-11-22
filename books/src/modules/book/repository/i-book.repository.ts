import { IBookModel } from '../model/i-book.model.js'

export interface IBookRepository {
  createBook(book: IBookModel): Promise<IBookModel | false>;

  getBook(id: string): Promise<IBookModel | null | false>;

  getBooks(): Promise<IBookModel[]>;

  updateBook(id: string, params: IBookModel): Promise<IBookModel | null | false>;

  deleteBook(id: string): Promise<string | false>;
}
