import "reflect-metadata";

import { AuthorsRepository } from "@modules/authors/infra/typeorm/repositories/AuthorsRepository";
import { IAuthorsRepository } from "@modules/authors/repositories/interfaces/IAuthorsRepository";
import { BooksRepository } from "@modules/books/infra/typeorm/repositories/BooksRepository";
import { IBooksRepository } from "@modules/books/repositories/interfaces/IBooksRepository";
import { container } from "tsyringe";

import { IBooksAPI } from "@shared/services/BooksAPI/IBooksAPI";
import { ServiceOpenLibrary } from "@shared/services/BooksAPI/ServiceOpenLibrary";

container.registerSingleton<IAuthorsRepository>(
  "AuthorsRepository",
  AuthorsRepository
);

container.registerSingleton<IBooksRepository>(
  "BooksRepository",
  BooksRepository
);

container.registerSingleton<IBooksAPI>(
  "ServiceOpenLibrary",
  ServiceOpenLibrary
);
