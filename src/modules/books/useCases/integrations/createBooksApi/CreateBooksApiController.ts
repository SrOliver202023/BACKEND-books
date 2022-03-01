import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateBooksApiUseCase } from "./CreateBooksApiUseCase";

interface IRequest {
  isbn?: string;
  title?: string;
  id?: string;
}

class CreateBooksApiController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title }: IRequest = request.query;

    const createBooksApiUseCase = new CreateBooksApiUseCase();

    const resp = await createBooksApiUseCase.execute({ title });

    return response.status(201).json(resp);
  }
}
export { CreateBooksApiController };
