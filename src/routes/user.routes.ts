import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  findUserController,
  listUserController,
  updateUserController,
} from "../controllers/user.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaReq, userSchemaUpdate } from "../schemas/user.schema";
import { ensureAuthMiddleware } from "../middlewares";

const userRoutes = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSchemaReq),
  createUserController
);

userRoutes.get("", listUserController);

userRoutes.get("/:id", findUserController);

userRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(userSchemaUpdate),
  updateUserController
);

userRoutes.delete("/:id", ensureAuthMiddleware, deleteUserController);

export { userRoutes };
