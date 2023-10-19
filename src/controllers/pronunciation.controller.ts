import { Request, Response } from "express";
import { createPronunciationService } from "../services/pronunciation/createPronunciation.service";
import { updatePronunciationService } from "../services/pronunciation/updateListening.service";
import { deletePronunciationService } from "../services/pronunciation/deleteListening.service";

import { findPronunciationService } from "../services/pronunciation/getListeningById.service";
import { userPronunciationService } from "../services/pronunciation/listAll.service";

const createPronunciationController = async (req: Request, res: Response) => {
  const userId = res.locals.userId;

  const newPronunciation = await createPronunciationService(req.body, userId);

  return res.status(201).json(newPronunciation);
};

const userPronunciationController = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const pronunciation = await userPronunciationService(userId);

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
  updatePronunciationController,
  deletePronunciationController,
  findPronunciationController,
  userPronunciationController,
};
