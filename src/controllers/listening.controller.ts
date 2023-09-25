import { Request, Response } from "express";
import { listListeningsService } from "../services/listening/listListening.service";
import { createListeningService } from "../services/listening/createListening.service";
import { updateListeningService } from "../services/listening/updateListening.service";
import { deleteListeningService } from "../services/listening/deleteListening.service";
import { findListeningService } from "../services/listening/getListeningById.service";
import { allListeningService } from "../services/listening/listAll.service";

const createListeningController = async (req: Request, res: Response) => {
  const userId = res.locals.userId;

  const newListening = await createListeningService(req.body, userId);

  return res.status(201).json(newListening);
};

const listListeningsController = async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 1;
  const baseUrl = req.get("host") as string;
  const listenings = await listListeningsService(page, limit, baseUrl);

  return res.status(200).json(listenings);
};

const findListeningController = async (req: Request, res: Response) => {
  const listeningId = req.params.id;
  const listening = await findListeningService(listeningId);

  return res.json(listening);
};

const allListeningController = async (req: Request, res: Response) => {
  const listening = await allListeningService();

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
  allListeningController,
  listListeningsController,
  updateListeningController,
  deleteListeningController,
  findListeningController,
};
