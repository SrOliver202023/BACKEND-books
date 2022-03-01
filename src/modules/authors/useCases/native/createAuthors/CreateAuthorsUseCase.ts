import { ICreateAuthorsDTO } from "@modules/authors/dtos";
import { Author } from "@modules/authors/infra/typeorm/entities/Author";
import { IAuthorsRepository } from "@modules/authors/repositories/interfaces/IAuthorsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateAuthorsUseCase {
  constructor(
    @inject("AuthorsRepository")
    private authorsRepository: IAuthorsRepository
  ) {}

  async execute(data: ICreateAuthorsDTO): Promise<Author> {
    const { ol, name, bio, birth } = data;

    const authorCreated = await this.authorsRepository.create({
      ol,
      name,
      bio,
      birth,
    });

    return authorCreated;
  }
}

export { CreateAuthorsUseCase };
