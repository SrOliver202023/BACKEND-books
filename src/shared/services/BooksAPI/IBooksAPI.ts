import { Author } from "@modules/authors/infra/typeorm/entities/Author";
import { Book } from "@modules/books/infra/typeorm/entities/Book";

interface IBooksData {
  key: string;
  title: string;
  edition_count: number;
  publish_date: [];
  isbn: [];
  cover_i: number;
  language: [];
  author_name: [];
  subject: [];
  subject_facet: [];
}

interface IBook extends Book {
  author_ol: string;
  author_name: string;
}

export type IAuthor = Author;

interface IBooksAPI {
  findBookByTitle(title: string): Promise<IBook>;
  findBookByIsbn(isbn: string): Promise<IBook>;
  // findAuthorByName(name: string): Promise<IAuthor>;
  findAuthorByOl(ol: string): Promise<IAuthor>;
}

export { IBooksAPI, IBook, IBooksData };
