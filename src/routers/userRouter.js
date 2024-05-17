import express from "express";
import userService from "../services/userService.js";

const userRouter = express.Router()

userRouter.get("/", (req, res) => {
    console.log("userRouter");
    return res.send(userService.getUsers());
});

userRouter.get("/:id", (req, res) => {
    return res.send(userService.getUserById());
});

userRouter.post("/", (req, res) => {
    return res.send(userService.addUser());
});

userRouter.put("/:id", (req, res) => {
    return res.send(userService.updateUser());
});

userRouter.delete("/:id", (req, res) => {
    return res.send(userService.markInactive());
});

export default userRouter;