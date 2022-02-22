import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO'
import { IUsersRepository } from '../../../repositories/UsersRepositories/IUsersRepository'

export class CreateUserUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute({ firstName, lastName, email }: ICreateUserDTO) {
    await this.usersRepository.create({ firstName, lastName, email })
  }
}
