import { Request, Response, NextFunction } from "express";

import { AppError } from "./AppError";

function asyncErrorServer(
  err: Error,
  request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ message: err.message });
  }
  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });
}

export { asyncErrorServer };
