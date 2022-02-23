import "reflect-metadata";
import express from "express";
import swaggerUi from "swagger-ui-express";

import createConnection from "@shared/infra/typeorm";

import "@shared/container";
import swaggerFile from "../../../swagger.json";
import { router } from "./routes";

const app = express();
app.use(express.json());

createConnection().then(() =>
  console.log(`Connection successfully established!`)
);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

export { app };
