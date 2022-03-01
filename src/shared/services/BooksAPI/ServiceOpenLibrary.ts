import axios from "axios";

import { AppError } from "@shared/errors/AppError";

import { IBook, IBooksAPI, IAuthor, IBooksData } from "./IBooksAPI";

interface IResponseError {
  status: number;
  statusText: string;
}
interface IError {
  response: IResponseError;
}

class ServiceOpenLibrary implements IBooksAPI {
  async findBookByIsbn(isbn: string): Promise<IBook> {
    const responseAxios = await axios({
      method: "get",
      url: `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`,
      responseType: "json",
    }).catch((error: IError) => {
      throw new AppError(
        "Non-existent book, fail server",
        error.response.status
      );
    });
    const dataBook = responseAxios.data[`ISBN:${isbn}`];
    if (!dataBook) {
      throw new AppError("Non-existent book", 404);
    }
    const book = {
      title: dataBook.title,
      isbn_13: dataBook.identifiers.isbn_13[0],
      isbn_10: dataBook.identifiers.isbn_10[0],
      number_of_pages: dataBook.number_of_pages,
      cover: dataBook.cover.medium,
      author_ol: `${/\bOL[^OL$/]*/.exec(dataBook.authors[0].url)}`,
      author_name: dataBook.authors[0].name,
    } as IBook;

    return book;
  }

  async findAuthorByOl(ol: string): Promise<IAuthor> {
    // https://openlibrary.org/authors/OL23919A.json
    const responseAxios = await axios({
      method: "get",
      url: `https://openlibrary.org/authors/${ol}.json`,
      responseType: "json",
    }).catch((error: IError) => {
      throw new AppError("Non-existent author", error.response.status);
    });

    const dataAuthors = responseAxios.data;
    const author = {
      ol: `${/\bOL[^OL]*/.exec(dataAuthors.key)}`,
      name: dataAuthors.name,
      bio: dataAuthors.bio,
      birth: dataAuthors.birth_date,
    } as IAuthor;

    return author;
  }

  async findBookByTitle(title: string): Promise<any> {
    console.log(title);
    const responseAxios = await axios({
      method: "get",
      url: `https://openlibrary.org/search.json?title=${title}`,
      responseType: "json",
    }).catch((error: IError) => {
      console.log(error);
      throw new AppError(
        "Non-existent book, fail server",
        error.response.status
      );
    });

    console.log(responseAxios.data);

    const booksDataResponse: IBooksData[] = responseAxios.data.docs;

    const dataFormat = booksDataResponse.map((item) => {
      return {
        key: item.key,
        title: item.title,
        edition_count: item.edition_count,
        publish_date: item.publish_date,
        isbn: item.isbn,
        cover_i: item.cover_i,
        language: item.language,
        author_name: item.author_name,
        subject: item.subject,
        subject_facet: item.subject_facet,
      };
    });

    return dataFormat;
  }
}

export { ServiceOpenLibrary };
