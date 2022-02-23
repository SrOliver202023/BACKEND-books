import { ICreateExampleDTO } from "@modules/Example/dtos";
import { IExamplesRepository } from "@modules/Example/repositories/interfaces/IExamplesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ExamplesUseCase {
  constructor(
    @inject("ExamplesRepository")
    private examplesRepository: IExamplesRepository
  ) {}

  async execute(data: ICreateExampleDTO): Promise<void | any> {
    const { columnExample } = data;
    await this.examplesRepository.create({
      columnExample,
    });
  }
}

export { ExamplesUseCase };
