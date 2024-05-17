const requestLogger = (req, res, next) => {
    const start = Date.now();
    console.log(`Processing ${req.method} "${req.originalUrl}" at ${new Date(start).toISOString()}`);
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`Completed ${req.method} "${req.originalUrl}" in ${duration}ms`);
    });
    next();
};

export default requestLogger;
