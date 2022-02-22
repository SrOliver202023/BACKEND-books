import { getRepository, Repository } from 'typeorm'

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { User } from '../../entities/UserEntity'
import { IUsersRepository } from './IUsersRepository'

export class UsersRepository implements IUsersRepository {
  private readonly repository: Repository<User>

  constructor() {
    this.repository = getRepository(User)
  }

  async create({ firstName, lastName, email }: ICreateUserDTO) {
    const user = this.repository.create({
      firstName,
      lastName,
      email,
    })

    await this.repository.save(user)
  }

  async findById(id: string) {
    const user = await this.repository.findOne(id)

    return user
  }
}
