import { Request, Response } from "express";
import { container } from "tsyringe";

import { ShowAuthorsUseCase } from "./ShowAuthorsUseCase";

interface IRequest {
  author_id: string;
  author_ol: string;
}

class ShowAuthorsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { author_id, author_ol } = request.query;

    const showAuthorsUseCase = container.resolve(ShowAuthorsUseCase);

    const authorFound = await showAuthorsUseCase.execute({
      author_id,
      author_ol,
    } as IRequest);
    return response.status(200).json(authorFound);
  }
}

export { ShowAuthorsController };
