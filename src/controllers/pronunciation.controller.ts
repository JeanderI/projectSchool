import { Request, Response } from "express";
import { createPronunciationService } from "../services/pronunciation/createPronunciation.service";
import { updatePronunciationService } from "../services/pronunciation/updateListening.service";
import { deletePronunciationService } from "../services/pronunciation/deleteListening.service";
import { listPronunciationsService } from "../services/pronunciation/listListening.service";
import { findPronunciationService } from "../services/pronunciation/getListeningById.service";
import { allPronunciationService } from "../services/pronunciation/listAll.service";

const createPronunciationController = async (req: Request, res: Response) => {
  const userId = res.locals.userId;

  const newPronunciation = await createPronunciationService(req.body, userId);

  return res.status(201).json(newPronunciation);
};

const listPronunciationsController = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 1;
  const baseUrl = req.get("host") as string;
  const pronunciation = await listPronunciationsService(page, limit, baseUrl);

  return res.status(200).json(pronunciation);
};

const allPronunciationController = async (req: Request, res: Response) => {
  const pronunciation = await allPronunciationService();

  return res.json(pronunciation);
};

const findPronunciationController = async (req: Request, res: Response) => {
  const pronunciationId = req.params.id;
  const pronunciation = await findPronunciationService(pronunciationId);

  return res.json(pronunciation);
};

const updatePronunciationController = async (req: Request, res: Response) => {
  const pronunciationId = req.params.id;
  const updatedValues = req.body;
  const update = await updatePronunciationService(
    updatedValues,
    pronunciationId
  );

  return res.json(update);
};

const deletePronunciationController = async (req: Request, res: Response) => {
  const pronunciationId = req.params.id;
  await deletePronunciationService(pronunciationId);

  res.status(204).send();
};

export {
  createPronunciationController,
  listPronunciationsController,
  updatePronunciationController,
  deletePronunciationController,
  findPronunciationController,
  allPronunciationController,
};
