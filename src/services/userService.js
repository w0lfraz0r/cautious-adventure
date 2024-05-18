import ResourceNotFoundError from "../errors/resourceNotFoundError.js";
import UserRepository from "../repositories/userRepository.js";


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

userService.addUser = () => {
    throw new Error('Not implemented');

};

userService.updateUser = () => {
    throw new Error('Not implemented');

};

userService.markInactive = () => {
    throw new Error('Not implemented');

};


export default userService