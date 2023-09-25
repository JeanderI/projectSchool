import { Router } from "express";
import {
  allPronunciationController,
  createPronunciationController,
  deletePronunciationController,
  findPronunciationController,
  listPronunciationsController,
  updatePronunciationController,
} from "../controllers/pronunciation.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import {
  pronunciationSchemaRequest,
  pronunciationSchemaUpdate,
} from "../schemas/pronunciation.schema";
import { ensureAuthMiddleware } from "../middlewares";

const pronunciationRoutes = Router();

pronunciationRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(pronunciationSchemaRequest),
  createPronunciationController
);
pronunciationRoutes.get("/all", allPronunciationController);

pronunciationRoutes.get("", listPronunciationsController);

pronunciationRoutes.get("/:id", findPronunciationController);

pronunciationRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(pronunciationSchemaUpdate),
  updatePronunciationController
);

pronunciationRoutes.delete("/:id", deletePronunciationController);

export { pronunciationRoutes };