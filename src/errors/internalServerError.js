class InternalServerError extends Error {
    constructor(message) {
      super(message || "Internal Server Error");
      this.name = 'InternalServerError';
      this.statusCode = 500;
      Object.setPrototypeOf(this, InternalServerError.prototype);
    }
  }
  
export default InternalServerError;
  