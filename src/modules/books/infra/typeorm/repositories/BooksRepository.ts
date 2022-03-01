import { ICreateBookDTO } from "@modules/books/dtos";
import { Book } from "@modules/books/infra/typeorm/entities/Book";
import { IBooksRepository } from "@modules/books/repositories/interfaces/IBooksRepository";
import { getRepository, Repository } from "typeorm";

class BooksRepository implements IBooksRepository {
  private repository: Repository<Book>;

  constructor() {
    this.repository = getRepository(Book);
  }
  async findById(id: string): Promise<Book> {
    const bookFound = await this.repository
      .createQueryBuilder("book")
      .where("book.id = :id", { id })
      .getOne();
    return bookFound;
  }

  async findByTitle(title: string): Promise<Book> {
    const bookFound = await this.repository
      .createQueryBuilder("book")
      .where("book.title = :title", { title })
      .getOne();
    return bookFound;
  }

  async findByIsbn(isbn: string): Promise<Book> {
    const bookFound = await this.repository
      .createQueryBuilder("book")
      .where("book.isbn_13 = :isbn", { isbn })
      .orWhere("book.isbn_10 = :isbn", { isbn })
      .getOne();
    return bookFound;
  }

  async create(data: ICreateBookDTO): Promise<Book> {
    const {
      isbn_13,
      isbn_10,
      title,
      number_of_pages,
      edition_count,
      cover,
      author_id,
      publish_date,
    }: ICreateBookDTO = data;

    const newBook = this.repository.create({
      isbn_13,
      isbn_10,
      title,
      number_of_pages,
      edition_count,
      cover,
      author_id,
      publish_date,
    });

    await this.repository.save(newBook);
    return newBook;
  }
}

export { BooksRepository };
