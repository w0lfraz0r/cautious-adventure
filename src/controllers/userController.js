import ForbiddenError from "../errors/forbiddenError.js";
import userService from "../services/userService.js";


const userController = {};

userController.getUsers = async () => {
    const users = await userService.getUsers();
    return users;
};

userController.getUserById = () => {
    throw new ForbiddenError('Hi Iam ForbiddenError error');
};

userController.addUser = () => {
    throw new Error('Not implemented');

};

userController.updateUser = () => {
    throw new Error('Not implemented');

};

userController.markInactive = () => {
    throw new Error('Not implemented');

};


export default userController;