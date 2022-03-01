import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateAuthorsUseCase } from "./CreateAuthorsUseCase";

class CreateAuthorsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { ol, name, bio, birth } = request.body;

    const createAuthorsUseCase = container.resolve(CreateAuthorsUseCase);

    const author = await createAuthorsUseCase.execute({ ol, name, bio, birth });

    return response.status(200).json(author);
  }
}

export { CreateAuthorsController };
