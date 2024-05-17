class UnauthorizedError extends Error {
    constructor(message) {
      super(message);
      this.name = 'UnauthorizedError';
      this.statusCode = 401;
      Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
  }
  
export default UnauthorizedError;
  