import userService from "../services/userService.js";

const userController = {};

userController.getUsers = async (auth) => {
    const users = await userService.getUsers(auth);
    return users;
};

userController.getUserById = async (userId) => {
    const user = await userService.getUserById(userId);
    return user;
};

userController.registerUser = async (userObj) => {
    const newUser = await userService.registerUser(userObj);
    return newUser;
};

userController.updateUser = () => {
    throw new Error('Not implemented');

};

userController.markInactive = () => {
    throw new Error('Not implemented');

};


export default userController;