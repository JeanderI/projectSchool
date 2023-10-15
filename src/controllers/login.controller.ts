import { Request, Response } from "express";
import { createTokenService } from "../services/login/createToken.service";

const createTokenController = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const token = await createTokenService({ username, password });

  return res.json({ token });
};

export { createTokenController };
