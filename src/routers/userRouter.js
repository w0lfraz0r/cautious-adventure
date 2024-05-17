import express from "express";
import userService from "../services/userService";

const userRouter = express.Router()

userRouter.get("/", () => {
    return userService.getUsers();
});

userRouter.get("/:id", () => {
    return userService.getUserById();
});

userRouter.post("/", () => {
    return userService.addUser();
});

userRouter.put("/:id", () => {
    return userService.updateUser();
});

userRouter.delete("/:id", () => {
    return userService.markInactive();
});

export default userRouter