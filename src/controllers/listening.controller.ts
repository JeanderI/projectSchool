import { Request, Response } from "express";

import { createListeningService } from "../services/listening/createListening.service";
import { updateListeningService } from "../services/listening/updateListening.service";
import { deleteListeningService } from "../services/listening/deleteListening.service";
import { findListeningService } from "../services/listening/getListeningById.service";
import { userListeningService } from "../services/listening/listAll.service";

const createListeningController = async (req: Request, res: Response) => {
  const userId = res.locals.userId;

  const newListening = await createListeningService(req.body, userId);

  return res.status(201).json(newListening);
};

const findListeningController = async (req: Request, res: Response) => {
  const listeningId = req.params.id;
  const listening = await findListeningService(listeningId);

  return res.json(listening);
};

const userListeningController = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const listening = await userListeningService(userId);

  return res.json(listening);
};

const updateListeningController = async (req: Request, res: Response) => {
  const listeningId = req.params.id;
  const updatedValues = req.body;
  const update = await updateListeningService(updatedValues, listeningId);

  return res.json(update);
};

const deleteListeningController = async (req: Request, res: Response) => {
  const listeningId = req.params.id;
  await deleteListeningService(listeningId);

  res.status(204).send();
};

export {
  createListeningController,
  userListeningController,
  updateListeningController,
  deleteListeningController,
  findListeningController,
};
