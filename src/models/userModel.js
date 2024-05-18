import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        photo: String,
        name: String,
        bio: String,
        phone: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isPublic: {
        type: Boolean,
        default: true
    }
});

const User = mongoose.model('User', userSchema);

export default User;