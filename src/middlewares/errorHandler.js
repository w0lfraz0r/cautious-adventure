const errorHandler = (err, req, res, next) => {
    console.error(err);
    if (typeof err.statusCode === 'number') {
        res.status(err.statusCode).json({ error: err.name, message: err.message });
        return;
    }
    res.status(500).json({ error: 'InternalServerError', message:'Internal Server Error' });
};

export default errorHandler;
