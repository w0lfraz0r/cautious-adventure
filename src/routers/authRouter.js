import express from "express";
import { wrapAsyncRouter } from "../middlewares/asyncHandler.js";
import userRepository from "../repositories/userRepository.js";
import Joi from "joi";
import passwordHashing from "../utills/passwordHashing.js";
import jwt from "../utills/jwt.js";
import ValidationError from "../errors/validationError.js";
import UnauthorizedError from "../errors/unauthorizedError.js";
import ForbiddenError from "../errors/forbiddenError.js";

const authRouter = express.Router();

const loginSchema = Joi.object({
    email: Joi.string().email().optional(),
    username: Joi.string().required().when('email', {
        is: Joi.not().empty(),
        then: Joi.forbidden(), // Username cannot be provided if email is present
    }),
    password: Joi.string().required(),
});


authRouter.post("/login", async (req, res) => {
    const { error } = loginSchema.validate(req.body);
    if (error) {
        throw new ValidationError(error.details.map(detail => detail.message).join(", "));
    }
    const { email, username, password } = req.body;
    const user = await userRepository.findByEmailOrUsername(email, username);
    console.log('user',user);

    if (!user) {
        throw new UnauthorizedError('Invalid credentials');
    }

    const isPasswordValid = await passwordHashing.comparePassword(password, user.password);

    if (!isPasswordValid) {
        throw new ForbiddenError('Invalid password');
    }

    const accessToken = jwt.generateAccessToken(user._id);

    res.json({ accessToken });
});

authRouter.post("/register", async (req, res) => {
    throw new Error("Not implemented");
    return res.send(userController.addUser());
});

wrapAsyncRouter(authRouter);

export default authRouter;