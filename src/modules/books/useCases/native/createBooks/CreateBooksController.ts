import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateBooksUseCase } from "./CreateBooksUseCase";

class CreateBooksController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      isbn_13,
      isbn_10,
      title,
      number_of_pages,
      edition_count,
      cover,
      author_id,
      publish_date,
    } = request.body;
    const BooksUseCase = container.resolve(CreateBooksUseCase);

    const book = await BooksUseCase.execute({
      isbn_13,
      isbn_10,
      title,
      number_of_pages,
      edition_count,
      cover,
      author_id,
      publish_date,
    });

    return response.status(200).json(book);
  }
}

export { CreateBooksController };
