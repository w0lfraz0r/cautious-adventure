import express from "express";
import userController from "../controllers/userController.js";
import { wrapAsyncRouter } from "../middlewares/asyncHandler.js";
import validateObjectId from "../middlewares/validateObjectId.js";

const userRouter = express.Router()

userRouter.get("/", async (req, res) => {
    const users = await userController.getUsers();
    return res.send(users);
});

userRouter.get("/:id", validateObjectId, async (req, res) => {
    const userId = req.params.id;
    const user = await userController.getUserById(userId);
    return res.send(user);
});

userRouter.post("/", (req, res) => {
    return res.send(userController.addUser());
});

userRouter.put("/:id", (req, res) => {
    return res.send(userController.updateUser());
});

userRouter.delete("/:id", (req, res) => {
    return res.send(userController.markInactive());
});

wrapAsyncRouter(userRouter);

export default userRouter;