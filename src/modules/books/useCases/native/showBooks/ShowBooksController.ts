import { Request, Response } from "express";
import { container } from "tsyringe";

import { ShowBooksUseCase } from "./ShowBooksUseCase";

interface IRequest {
  id?: string;
  title?: string;
  isbn?: string;
}

class ShowBooksController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { isbn, title, id } = request.query;

    const searchBook = { isbn, title, id } as IRequest;

    const showBooksUseCase = container.resolve(ShowBooksUseCase);

    const book = await showBooksUseCase.execute(searchBook);

    return response.status(200).json(book);
  }
}

export { ShowBooksController };
