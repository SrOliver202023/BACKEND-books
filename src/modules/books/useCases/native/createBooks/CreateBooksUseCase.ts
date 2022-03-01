import { ICreateBookDTO } from "@modules/books/dtos";
import { Book } from "@modules/books/infra/typeorm/entities/Book";
import { IBooksRepository } from "@modules/books/repositories/interfaces/IBooksRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateBooksUseCase {
  constructor(
    @inject("BooksRepository")
    private booksRepository: IBooksRepository
  ) {}

  async execute(data: ICreateBookDTO): Promise<Book> {
    const {
      isbn_13,
      isbn_10,
      title,
      number_of_pages,
      edition_count,
      cover,
      author_id,
      publish_date,
    } = data;
    const bookCreated = await this.booksRepository.create({
      isbn_13,
      isbn_10,
      title,
      number_of_pages,
      edition_count,
      cover,
      author_id,
      publish_date,
    });

    return bookCreated;
  }
}

export { CreateBooksUseCase };
