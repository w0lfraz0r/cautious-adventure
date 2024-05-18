import ForbiddenError from "../errors/forbiddenError.js";
import UserRepository from "../repositories/userRepository.js";


const userService = {};

userService.getUsers = async () => {
    const userData = await UserRepository.findAll();
    return userData;
};

userService.getUserById = () => {
    throw new ForbiddenError('Hi Iam ForbiddenError error');
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