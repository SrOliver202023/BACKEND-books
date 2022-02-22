import { Router } from 'express'

import { CreateUserController } from '../useCases/Users/create/CreateUserController'
import { FindUserByIdController } from '../useCases/Users/findById/FindUserByIdController'

const findUserByIdController = new FindUserByIdController()
const createUserController = new CreateUserController()

export const usersRoutes = Router()

usersRoutes.post('/', createUserController.handle)
usersRoutes.get('/:id', findUserByIdController.handle)
