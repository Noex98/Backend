const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    roomNumber: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: false,
    },
});

const User = mongoose.model('User', userSchema);
module.exports = User;