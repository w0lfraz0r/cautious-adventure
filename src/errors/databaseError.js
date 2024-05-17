class DataBaseError extends Error {
    constructor(message) {
      super(message);
      this.name = 'DataBaseError';
      this.statusCode = 500;
      Object.setPrototypeOf(this, DataBaseError.prototype);
    }
}
  
export default DataBaseError;