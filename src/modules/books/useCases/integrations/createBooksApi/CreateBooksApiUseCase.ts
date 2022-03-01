import { container } from "tsyringe";

import { IBooksAPI } from "@shared/services/BooksAPI/IBooksAPI";
import { ServiceOpenLibrary } from "@shared/services/BooksAPI/ServiceOpenLibrary";

import { CreateBooksUseCase } from "../../native/createBooks/CreateBooksUseCase";
import { ShowBooksUseCase } from "../../native/showBooks/ShowBooksUseCase";

interface IRequest {
  isbn?: string;
  title?: string;
  id?: string;
}

class CreateBooksApiUseCase {
  private showBooksUseCase: ShowBooksUseCase;
  private createBooksUseCase: CreateBooksUseCase;
  private booksApi: IBooksAPI;

  constructor() {
    this.showBooksUseCase = container.resolve(ShowBooksUseCase);
    this.createBooksUseCase = container.resolve(CreateBooksUseCase);
    this.booksApi = new ServiceOpenLibrary();
  }

  async execute({ title, isbn, id }: IRequest) {
    let booksFoundInDatabase;

    try {
      booksFoundInDatabase = await this.showBooksUseCase.execute({
        isbn,
        id,
      });
    } catch (error) {
      if (!booksFoundInDatabase) {
        booksFoundInDatabase = await this.booksApi.findBookByTitle(title);
      }
    }

    return booksFoundInDatabase;
  }
}
export { CreateBooksApiUseCase };
