class BadRequestError extends Error {
    constructor(message) {
        super(message);
        this.name = 'BadRequestError';
        this.statusCode = 400;
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
}

export default BadRequestError;
