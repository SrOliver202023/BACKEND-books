import { Router } from 'express'

import { usersRoutes } from './users.routes'

export const router = Router()

router.get('/', (req, res) => {
  return res.json({ message: 'Hello World Union Group' })
})

router.use('/users', usersRoutes)
