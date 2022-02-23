import { Request, Response } from "express";

import { AppError } from "@shared/errors/AppError";

import { app } from "./app";

const port = 5555;

app.listen(port, () =>
  console.log(`Server is running in http://localhost:${port}`)
);

app.use((err: Error, req: Request, res: Response) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  return res.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });
});
