import { ICreateAuthorsDTO } from "@modules/authors/dtos";
import { Author } from "@modules/authors/infra/typeorm/entities/Author";
import { IAuthorsRepository } from "@modules/authors/repositories/interfaces/IAuthorsRepository";
import { getRepository, Repository } from "typeorm";

class AuthorsRepository implements IAuthorsRepository {
  private repository: Repository<Author>;

  constructor() {
    this.repository = getRepository(Author);
  }
  async create(data: ICreateAuthorsDTO): Promise<Author> {
    const { ol, name, bio, birth } = data;

    const newAuthor = this.repository.create({
      ol,
      name,
      bio,
      birth,
    });

    await this.repository.save(newAuthor);
    return newAuthor;
  }

  async findByOl(ol: string): Promise<Author> {
    const author = await this.repository.findOne({ where: { ol } });
    return author;
  }

  async findById(id: string): Promise<Author> {
    const author = await this.repository.findOne({ where: { id } });
    return author;
  }
}

export { AuthorsRepository };
