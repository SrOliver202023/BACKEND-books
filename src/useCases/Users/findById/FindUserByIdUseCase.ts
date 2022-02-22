import { IUsersRepository } from '../../../repositories/UsersRepositories/IUsersRepository'

export class FindUserByIdUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute(id: string) {
    const user = await this.usersRepository.findById(id)

    return user
  }
}
