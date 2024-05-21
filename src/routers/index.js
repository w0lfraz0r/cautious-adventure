import { Router } from "express";
import usersRouter from "./userRouter.js";
import authRouter from "./authRouter.js";
import jwt from "../utills/jwt.js"

const router = Router();

router.use("/auth", authRouter);
router.use("/users", jwt.verifyAccessToken, usersRouter);

export default router;