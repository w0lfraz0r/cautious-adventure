const errorHandler = (err, req, res, next) => {
    console.log(err.stack);
    if (typeof err.statusCode === 'number') {
        res.status(err.statusCode).json({ message: err.message });
        return;
    }
    res.status(500).json({ error: 'Internal Server Error' });
};

export default errorHandler;
