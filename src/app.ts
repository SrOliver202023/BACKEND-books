require('dotenv/config')

import express, { NextFunction, Request, Response } from 'express'

import 'express-async-errors'
import './database'

import { AppError } from './errors/AppError'
import { router } from './routes'

export const app = express()

app.use(express.json())

app.use(router)

app.use(
  (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      })
    }

    return res.status(500).json({
      status: 'error',
      message: `Internal server error - ${error.message}`,
    })
  },
)
