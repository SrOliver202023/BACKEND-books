import { Router } from "express";

import { examplesRoutes } from "./examples.routes";

const router = Router();

router.use("/", examplesRoutes);

export { router };
