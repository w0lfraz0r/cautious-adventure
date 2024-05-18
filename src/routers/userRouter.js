import express from "express";
import userController from "../controllers/userController.js";

const userRouter = express.Router()

userRouter.get("/", async (req, res) => {
    const user = await userController.getUsers();
    return res.send(user);
});

userRouter.get("/:id", (req, res) => {
    return res.send(userController.getUserById());
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

export default userRouter;