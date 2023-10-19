import { Request, Response } from "express";

import { createListeningService } from "../services/listening/createListening.service";
import { updateListeningService } from "../services/listening/updateListening.service";
import { deleteListeningService } from "../services/listening/deleteListening.service";
import { findListeningService } from "../services/listening/getListeningById.service";
import { userListeningService } from "../services/listening/listAll.service";
import jwt from "jsonwebtoken";

const createListeningController = async (req: Request, res: Response) => {
  const authToken = req.headers.authorization;

  if (!authToken || !authToken.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ message: "Authentication token not provided" });
  }

  const token = authToken.replace("Bearer ", "");

  const secretKey = process.env.SECRET_KEY;

  if (secretKey === undefined) {
    return res.status(500).json({ message: "Secret key is not defined" });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    const userId = typeof decoded.sub === "string" ? decoded.sub : "";

    if (!userId) {
      return res.status(401).json({ message: "Token is invalid" });
    }

    console.log(userId);
    const newListening = await createListeningService(req.body, userId);

    return res.status(201).json(newListening);
  } catch (error) {
    return res.status(401).json({ message: "Token is invalid" });
  }
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
