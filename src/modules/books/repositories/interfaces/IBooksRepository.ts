import { ICreateBookDTO } from "@modules/books/dtos";
import { Book } from "@modules/books/infra/typeorm/entities/Book";

interface IBooksRepository {
  create(data: ICreateBookDTO): Promise<Book>;
  findByIsbn(isbn: string): Promise<Book>;
  findById(id: string): Promise<Book>;
  findByTitle(title: string): Promise<Book>;
}

export { IBooksRepository };
