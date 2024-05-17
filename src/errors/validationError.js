class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = 'ValidationError';
      this.statusCode = 400;
      Object.setPrototypeOf(this, ValidationError.prototype);
    }
  }
  
export default ValidationError;
  