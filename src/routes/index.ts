import { Router } from "express";
import { categoriesRoutes } from "./caterories.routes";
import { specificationRoutes } from "./specifications.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationRoutes);

export { router };