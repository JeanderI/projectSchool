import { Router } from "express";
import {
  allListeningController,
  createListeningController,
  deleteListeningController,
  findListeningController,
  listListeningsController,
  updateListeningController,
} from "../controllers/listening.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import {
  listeningSchemaRequest,
  listeningSchemaUpdate,
} from "../schemas/listening.schema";
import { ensureAuthMiddleware } from "../middlewares";

const listeningRoutes = Router();

listeningRoutes.post(
  "",
  ensureDataIsValidMiddleware(listeningSchemaRequest),
  createListeningController
);

listeningRoutes.get("/all", allListeningController);

listeningRoutes.get("", listListeningsController);

listeningRoutes.get("/:id", findListeningController);

listeningRoutes.patch(
  "/:id",
  ensureDataIsValidMiddleware(listeningSchemaUpdate),
  updateListeningController
);

listeningRoutes.delete("/:id", deleteListeningController);

export { listeningRoutes };
