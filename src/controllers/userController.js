import ForbiddenError from "../errors/forbiddenError.js";


const userController = {};

const userData = [
    { id:1, name: `Jhon`, email: 'sadc@gmil.com'},
    { id:2, name: `Sarah`, email: 'ssdfe@gmil.com'},
];

userController.getUsers = () => {
    return userData;
    // throw new Error('Not implemented');

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