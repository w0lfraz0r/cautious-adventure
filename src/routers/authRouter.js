import express from "express";
import { wrapAsyncRouter } from "../middlewares/asyncHandler.js";
import userRepository from "../repositories/userRepository.js";
import Joi from "joi";
import passwordHashing from "../utills/passwordHashing.js";
import jwt from "../utills/jwt.js";
import ValidationError from "../errors/validationError.js";
import UnauthorizedError from "../errors/unauthorizedError.js";
import ForbiddenError from "../errors/forbiddenError.js";
import userController from "../controllers/userController.js";
import ResourceNotFoundError from "../errors/resourceNotFoundError.js";
import maskemail from "maskemail";

const authRouter = express.Router();

const loginSchema = Joi.object({
    email: Joi.string().email().optional(),
    username: Joi.string().required().when('email', {
        is: Joi.not().empty(),
        then: Joi.forbidden(),
    }),
    password: Joi.string().required(),
});

const resetPasswordSchema = Joi.object({
    email: Joi.string().email().optional(),
    username: Joi.string().required().when('email', {
        is: Joi.not().empty(),
        then: Joi.forbidden(),
    }),
});

const registerUserSchema = Joi.object({
    username: Joi.string()
        .trim()
        .required()
        .min(3)
        .max(30)
        .alphanum(),
    email: Joi.string()
        .trim()
        .required()
        .email({ minDomainSegments: 2 }),
    password: Joi.string()
        .trim()
        .required()
        .min(6)
        .max(255),
    profile: Joi.object({
        photo: Joi.string().optional().allow(""),
        name: Joi.string().optional().allow(""),
        bio: Joi.string().optional().allow(""),
        phone: Joi.string().optional().allow(""),
    }),
    isAdmin: Joi.boolean().optional(),
    isPublic: Joi.boolean().optional(),
});


authRouter.post("/login", async (req, res) => {
    const { error } = loginSchema.validate(req.body);
    if (error) {
        throw new ValidationError(error.details.map(detail => detail.message).join(", "));
    }
    const { email, username, password } = req.body;
    const user = await userRepository.findByEmailOrUsername(email, username);

    if (!user) {
        throw new UnauthorizedError('Invalid credentials');
    }

    const isPasswordValid = await passwordHashing.comparePassword(password, user.password);

    if (!isPasswordValid) {
        throw new ForbiddenError('Invalid password');
    }

    const accessToken = jwt.generateAccessToken(user._id);

    return res.send({ user: { _id: user._id, email: user.email, username: user.username }, accessToken });
});

authRouter.post("/register", async (req, res) => {
    const { error, value } = registerUserSchema.validate(req.body);
    if (error) {
        throw new ValidationError(error.details.map(detail => detail.message).join(", "));
    }
    const newUser = await userController.registerUser(value);
    const accessToken = jwt.generateAccessToken(newUser._id);
    return res.send({ user: { _id: newUser._id, email: newUser.email, username: newUser.username }, accessToken });
});

authRouter.post("/reset-password", async (req, res) => {
    const { error, value } = resetPasswordSchema.validate(req.body);
    const { email, username } = req.body;
    const user = await userRepository.findByEmailOrUsername(email, username);
    if (!user) {
        throw new ResourceNotFoundError('No such user exists');
    }
    const resetPasswordToken = jwt.generateAccessToken(newUser.email);
    // send email for password reset
    return res.send({ message: `Password Reset link sent to ${maskemail(newUser.email)}`});
});
wrapAsyncRouter(authRouter);

export default authRouter;