import { ICreateExampleDTO } from "@modules/Example/dtos";
import { Example } from "@modules/Example/infra/typeorm/entities/Example";

import { IExamplesRepository } from "../interfaces/IExamplesRepository";

class ExamplesRepositoryInMemory implements IExamplesRepository {
  private repository: Example[] = [];
  async create(data: ICreateExampleDTO): Promise<Example> {
    const { columnExample } = data;

    const newExample = new Example();

    Object.assign(newExample, {
      columnExample,
    });

    this.repository.push(newExample);

    return newExample;
  }
}

export { ExamplesRepositoryInMemory };
