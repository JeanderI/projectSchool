import cors from "cors";

import "reflect-metadata";
import "express-async-errors";
import { handleErrorMiddleware } from "./middlewares";

import { userRoutes } from "./routes/user.routes";
import { listeningRoutes } from "./routes/listening.routes";
import { loginRoutes } from "./routes/login.routes";
import { pronunciationRoutes } from "./routes/pronunciation.routes";
import express, { Application } from "express";

const app: Application = express();

app.use(cors());

app.use(express.json());

app.use("/user", userRoutes);
app.use("/listening", listeningRoutes);
app.use("/pronunciation", pronunciationRoutes);
app.use("/login", loginRoutes);

app.use(handleErrorMiddleware);

export default app;
