import "reflect-metadata";
import express from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import "@shared/container";
import { asyncErrorServer } from "@shared/errors/AsyncErrorServer";
import createConnection from "@shared/infra/typeorm";

import swaggerFile from "../../../swagger.json";
import { router } from "./routes";

createConnection().then(() =>
  console.log(`Connection successfully established!`)
);

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.use(asyncErrorServer);

export { app };
