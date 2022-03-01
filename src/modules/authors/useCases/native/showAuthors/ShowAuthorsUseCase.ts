import { Author } from "@modules/authors/infra/typeorm/entities/Author";
import { IAuthorsRepository } from "@modules/authors/repositories/interfaces/IAuthorsRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

interface IRequest {
  author_id: string;
  author_ol: string;
}

@injectable()
class ShowAuthorsUseCase {
  constructor(
    @inject("AuthorsRepository")
    private authorsRepository: IAuthorsRepository
  ) {}

  async execute({ author_id, author_ol }: IRequest): Promise<Author> {
    let authorFound: Author;

    if (author_id)
      authorFound = await this.authorsRepository.findById(author_id);
    else authorFound = await this.authorsRepository.findByOl(author_ol);

    if (!author_id && !author_ol)
      throw new AppError("author_id and author_ol invalid", 401);

    return authorFound;
  }
}

export { ShowAuthorsUseCase };
