import { Router } from "express";
import {
  createListeningController,
  deleteListeningController,
  findListeningController,
  listListeningsController,
  updateListeningController,
} from "../controllers/listening.controller";

const listeningRoutes = Router();

listeningRoutes.post("", createListeningController);

listeningRoutes.get("", listListeningsController);

listeningRoutes.get("/:id", findListeningController);

listeningRoutes.patch("/:id", updateListeningController);

listeningRoutes.delete("/:id", deleteListeningController);

export { listeningRoutes };
