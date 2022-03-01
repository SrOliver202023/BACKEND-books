import { CreateAuthorsController } from "@modules/authors/useCases/native/createAuthors/CreateAuthorsController";
import { ShowAuthorsController } from "@modules/authors/useCases/native/showAuthors/ShowAuthorsController";
import { Router } from "express";

const showAuthorsController = new ShowAuthorsController();
const createAuthorsController = new CreateAuthorsController();

const authorsRoutes = Router();

authorsRoutes.get("/", showAuthorsController.handle);
authorsRoutes.post("/", createAuthorsController.handle);

export { authorsRoutes };
