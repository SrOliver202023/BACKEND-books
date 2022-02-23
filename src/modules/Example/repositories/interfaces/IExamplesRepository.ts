import { ICreateExampleDTO } from "@modules/Example/dtos";
import { Example } from "@modules/Example/infra/typeorm/entities/Example";

interface IExamplesRepository {
  create(data: ICreateExampleDTO): Promise<Example>;
}

export { IExamplesRepository };
