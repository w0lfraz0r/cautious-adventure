import ForbiddenError from "../errors/forbiddenError.js";


const userService = {};

const userData = [
    { id:1, name: `Jhon`, email: 'sadc@gmil.com'},
    { id:2, name: `Sarah`, email: 'ssdfe@gmil.com'},
];

userService.getUsers = () => {
    return userData;
    // throw new Error('Not implemented');

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