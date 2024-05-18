import mongoose from 'mongoose';
import BadRequestError from '../errors/badRequestError.js';

const validateObjectId = (req, res, next) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new BadRequestError('Invalid resource ID format');
    }
    next();
};

export default validateObjectId;
