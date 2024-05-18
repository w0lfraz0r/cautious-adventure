import BaseRepository from './baseRepository.js';
import User from '../models/userModel.js';

class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }

  // Add any user-specific data access methods here
}

export default new UserRepository();