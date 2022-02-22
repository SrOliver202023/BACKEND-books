import { Request, Response } from 'express'

import { UsersRepository } from '../../../repositories/UsersRepositories/UserRepository'
import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { firstName, lastName, email } = req.body

    const usersRepository = new UsersRepository()
    const createUserUseCase = new CreateUserUseCase(usersRepository)

    await createUserUseCase.execute({
      firstName,
      lastName,
      email,
    })

    return res.status(200).json({ message: 'Ok' })
  }
}
