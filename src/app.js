import express from "express"
import router from "./routers/index.js"
import cors from "cors";
import bodyParser from "body-parser";
import errorHandler from './middlewares/errorHandler.js';
import requestLogger from "./middlewares/requestLogger.js";
import connectDB from "./db/connectDB.js";

await connectDB();

const app = express();
app.use(bodyParser.json());
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

app.use(requestLogger);
app.use(router);
app.use(errorHandler);

export default app