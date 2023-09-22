import { Router } from "express";
import {
  createPronunciationController,
  deletePronunciationController,
  findPronunciationController,
  listPronunciationsController,
  updatePronunciationController,
} from "../controllers/pronunciation.controller";

const pronunciationRoutes = Router();

pronunciationRoutes.post("", createPronunciationController);

pronunciationRoutes.get("", listPronunciationsController);

pronunciationRoutes.get("/:id", findPronunciationController);

pronunciationRoutes.patch("/:id", updatePronunciationController);

pronunciationRoutes.delete("/:id", deletePronunciationController);

export { pronunciationRoutes };
