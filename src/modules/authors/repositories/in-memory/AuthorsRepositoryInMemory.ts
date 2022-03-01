import { ICreateAuthorsDTO } from "@modules/authors/dtos";
import { Author } from "@modules/authors/infra/typeorm/entities/Author";

import { IAuthorsRepository } from "../interfaces/IAuthorsRepository";

class AuthorsRepositoryInMemory implements IAuthorsRepository {
  private repository: Author[] = [];
  async create(data: ICreateAuthorsDTO): Promise<Author> {
    const { ol, name, bio, birth } = data;

    const newAuthor = new Author();

    Object.assign(newAuthor, {
      ol,
      name,
      bio,
      birth,
    });

    this.repository.push(newAuthor);

    return newAuthor;
  }
}

export { AuthorsRepositoryInMemory };
