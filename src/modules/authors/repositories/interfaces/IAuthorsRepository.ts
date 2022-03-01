import { ICreateAuthorsDTO } from "@modules/authors/dtos";
import { Author } from "@modules/authors/infra/typeorm/entities/Author";

interface IAuthorsRepository {
  create(data: ICreateAuthorsDTO): Promise<Author>;
  findById(id: string): Promise<Author>;
  findByOl(ol: string): Promise<Author>;
}

export { IAuthorsRepository };
