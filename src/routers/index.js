import { Router } from "express";
import usersRouter from "./userRouter.js";

const router = Router();

router.use("/users", usersRouter);

export default router;