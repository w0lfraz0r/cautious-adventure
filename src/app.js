import express from "express"
import userRouter from "./routers/userRouter"
import cors from "cors";
import { errorHandler } from './middlewares/errorHandler';

const app = express()
app.use(cors());

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,HEAD,OPTIONS,POST,PUT,DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin,Cache-Control,Accept,X-Access-Token ,X-Requested-With, Content-Type, Access-Control-Request-Method"
    );
    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }
    next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(errorHandler);

app.use("/", (req, res) => {
    res.json({
        message: "Hello World"
    });
});

app.use("/users", userRouter);

export default app