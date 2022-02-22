import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { User } from '../../entities/UserEntity'

export interface IUsersRepository {
  create: (data: ICreateUserDTO) => Promise<void>
  findById: (id: string) => Promise<User>
}
