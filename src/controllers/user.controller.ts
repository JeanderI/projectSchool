import { Request, Response } from "express";
import listUserService from "../services/user/listUser.service";
import { createUserService } from "../services/user/createUser.service";
import updateUserService from "../services/user/updateUser.service";
import deleteUserService from "../services/user/deleteUser.service";
import findUserService from "../services/user/getUserById.service";

async function listUserController(req: Request, res: Response) {
  const users = await listUserService();

  return res.status(200).json(users);
}

async function findUserController(req: Request, res: Response) {
  const userId = req.params.id;
  const user = await findUserService(userId);

  return res.status(200).json(user);
}

async function createUserController(req: Request, res: Response) {
  const userData = req.body;
  const newUser = await createUserService(userData);

  return res.status(201).json(newUser);
}

async function updateUserController(req: Request, res: Response) {
  const userData = req.body;
  const idUser = req.params.id;
  const updatedUser = await updateUserService(userData, idUser);

  return res.json(updatedUser);
}

async function deleteUserController(req: Request, res: Response) {
  await deleteUserService(req.params.id);

  return res.status(204).send();
}

export {
  listUserController,
  findUserController,
  createUserController,
  updateUserController,
  deleteUserController,
};
