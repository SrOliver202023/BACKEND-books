import { Request, Response } from 'express'

import { UsersRepository } from '../../../repositories/UsersRepositories/UserRepository'
import { FindUserByIdUseCase } from './FindUserByIdUseCase'

export class FindUserByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params

    const usersRepository = new UsersRepository()
    const findUserById = new FindUserByIdUseCase(usersRepository)

    const user = await findUserById.execute(id)

    return res.status(200).json(user)
  }
}
