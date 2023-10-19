import { Router } from "express";
import {
  userPronunciationController,
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
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(pronunciationSchemaRequest),
  createPronunciationController
);
pronunciationRoutes.get("/user/:id", userPronunciationController);

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
