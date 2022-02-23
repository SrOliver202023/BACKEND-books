import { ICreateExampleDTO } from "@modules/Example/dtos";
import { Example } from "@modules/Example/infra/typeorm/entities/Example";
import { IExamplesRepository } from "@modules/Example/repositories/interfaces/IExamplesRepository";
import { getRepository, Repository } from "typeorm";

class ExampleRepository implements IExamplesRepository {
  private repository: Repository<Example>;

  constructor() {
    this.repository = getRepository(Example);
  }

  async create(data: ICreateExampleDTO): Promise<Example> {
    const { columnExample } = data;

    const newExample = this.repository.create({ columnExample });

    await this.repository.save(newExample);
    return newExample;
  }
}

export { ExampleRepository };
