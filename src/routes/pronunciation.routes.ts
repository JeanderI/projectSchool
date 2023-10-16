import { Router } from "express";
import {
  allPronunciationController,
  createPronunciationController,
  deletePronunciationController,
  findPronunciationController,
  updatePronunciationController,
} from "../controllers/pronunciation.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import {
  pronunciationSchemaRequest,
  pronunciationSchemaUpdate,
} from "../schemas/pronunciation.schema";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";

const pronunciationRoutes = Router();

pronunciationRoutes.post(
  "",
  ensureDataIsValidMiddleware(pronunciationSchemaRequest),
  createPronunciationController
);
pronunciationRoutes.get("/all", allPronunciationController);

pronunciationRoutes.get("/:id", findPronunciationController);

pronunciationRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(pronunciationSchemaUpdate),
  updatePronunciationController
);

pronunciationRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  deletePronunciationController
);

export { pronunciationRoutes };
