import { Book } from "@modules/books/infra/typeorm/entities/Book";
import { IBooksRepository } from "@modules/books/repositories/interfaces/IBooksRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

interface IRequest {
  id?: string;
  title?: string;
  isbn?: string;
}

@injectable()
class ShowBooksUseCase {
  constructor(
    @inject("BooksRepository")
    private booksRepository: IBooksRepository
  ) {}

  async execute({ isbn, title, id }: IRequest): Promise<Book> {
    let bookFound: Book;

    if (isbn) {
      bookFound = await this.booksRepository.findByIsbn(isbn);
      return bookFound;
    }

    if (title) {
      bookFound = await this.booksRepository.findByTitle(title);
      return bookFound;
    }

    if (id) {
      bookFound = await this.booksRepository.findById(id);
      return bookFound;
    }

    if (!isbn && !title && !id) {
      throw new AppError(
        "Must search for a valid id, isbn or title to book.",
        400
      );
    }

    return bookFound;
  }
}
export { ShowBooksUseCase };
