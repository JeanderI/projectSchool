import { Router } from "express";
import {
  userListeningController,
  createListeningController,
  deleteListeningController,
  findListeningController,
  updateListeningController,
} from "../controllers/listening.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import {
  listeningSchemaRequest,
  listeningSchemaUpdate,
} from "../schemas/listening.schema";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";

const listeningRoutes = Router();

listeningRoutes.post(
  "",
  ensureDataIsValidMiddleware(listeningSchemaRequest),
  createListeningController
);

listeningRoutes.get("/user/:id", userListeningController);

listeningRoutes.get("/:id", findListeningController);

listeningRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(listeningSchemaUpdate),
  updateListeningController
);

listeningRoutes.delete("/:id", ensureAuthMiddleware, deleteListeningController);

export { listeningRoutes };
