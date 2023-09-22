import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  findUserController,
  listUserController,
  updateUserController,
} from "../controllers/user.controller";

const userRoutes = Router();

userRoutes.post("", createUserController);

userRoutes.get("", listUserController);

userRoutes.get("/:id", findUserController);

userRoutes.patch("/:id", updateUserController);

userRoutes.delete("/:id", deleteUserController);

export { userRoutes };
