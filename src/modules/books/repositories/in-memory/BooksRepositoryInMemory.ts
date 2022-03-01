import { ICreateBookDTO } from "@modules/books/dtos";
import { Book } from "@modules/books/infra/typeorm/entities/Book";

import { IBooksRepository } from "../interfaces/IBooksRepository";

class BooksRepositoryInMemory implements IBooksRepository {
  private repository: Book[] = [];
  async create(data: ICreateBookDTO): Promise<Book> {
    const { isbn_13, isbn_10, title, number_of_pages, cover } = data;

    const newBook = new Book();

    Object.assign(newBook, { isbn_13, isbn_10, title, number_of_pages, cover });

    this.repository.push(newBook);

    return newBook;
  }
}

export { BooksRepositoryInMemory };
