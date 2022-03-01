import { CreateBooksApiController } from "@modules/books/useCases/integrations/createBooksApi/CreateBooksApiController";
import { CreateBooksController } from "@modules/books/useCases/native/createBooks/CreateBooksController";
import { ShowBooksController } from "@modules/books/useCases/native/showBooks/ShowBooksController";
import { Router } from "express";

const createBooksApiController = new CreateBooksApiController();
const showBooksController = new ShowBooksController();
const createBooksController = new CreateBooksController();

const booksRoutes = Router();

// booksRoutes.get("/", showBooksController.handle);
booksRoutes.get("/", createBooksApiController.handle);
booksRoutes.post("/", createBooksController.handle);

export { booksRoutes };
