import userService from "../services/userService.js";

const userController = {};

userController.getUsers = async () => {
    const users = await userService.getUsers();
    return users;
};

userController.getUserById = async (userId) => {
    const user = await userService.getUserById(userId);
    return user;
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