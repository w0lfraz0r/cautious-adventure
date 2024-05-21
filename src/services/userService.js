import ResourceNotFoundError from "../errors/resourceNotFoundError.js";
import UserRepository from "../repositories/userRepository.js";
import passwordHashing from "../utills/passwordHashing.js";


const userService = {};

userService.getUsers = async () => {
    const userData = await UserRepository.findAll();
    return userData;
};

userService.getUserById = async (userId) => {
    const userData = await UserRepository.findById(userId);
    if (!userData) {
        throw new ResourceNotFoundError(`User with id ${userId} not found`);
    } else {
        return userData;;
    }
};

userService.registerUser = async (userObj) => {
    const eistingUser = await UserRepository.findByEmailOrUsername(userObj.email, userObj.username);
    if (eistingUser) {
        throw new ResourceNotFoundError('User with same credentials already exists');
    }
    userObj.password = await passwordHashing.hashPassword(userObj.password);
    const userData = await UserRepository.create(userObj);
    return userData;
};

userService.updateUser = () => {
    throw new Error('Not implemented');

};

userService.markInactive = () => {
    throw new Error('Not implemented');

};


export default userService