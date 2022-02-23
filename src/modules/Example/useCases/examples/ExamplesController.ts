import { Request, Response } from "express";

import { ExamplesUseCase } from "./ExamplesUseCase";
import { container } from "tsyringe";

class ExamplesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { columnExample } = request.body;
    const examplesUseCase = container.resolver(ExamplesUseCase);

    await examplesUseCase.execute({ columnExample });

    Response.status(200).send();
  }
}

export { ExamplesController };
