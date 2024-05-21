import jwt from "jsonwebtoken";
import UnauthorizedError from "../errors/unauthorizedError.js";

const generateAccessToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '6h' });
};

const verifyAccessToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        throw new UnauthorizedError('Unauthorized User');
    }

    jwt.verify(authHeader, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            throw new UnauthorizedError('Invalid or expired token');
        }

        req.userId = decoded.userId;
        next();
    });
};

export default { generateAccessToken, verifyAccessToken };
