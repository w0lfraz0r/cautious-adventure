import BaseRepository from './baseRepository.js';
import User from '../models/userModel.js';

class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }

  async findByEmailOrUsername(email, username) {
    const user = await this.model.findOne({ $or: [{ email }, { username }] })
      .select({ email: 1, username: 1, password: 1 });
    return user;
  }

  // Add any user-specific data access methods here
}

export default new UserRepository();