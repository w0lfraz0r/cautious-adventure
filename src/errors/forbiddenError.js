class ForbiddenError extends Error {
    constructor(message) {
      super(message);
      this.name = 'ForbiddenError';
      this.statusCode = 403;
      Object.setPrototypeOf(this, ForbiddenError.prototype);
    }
  }
  
export default ForbiddenError;