const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        maxlength: 255,
        minlength: 5,

    },
    username: {
        type: String,
        require: true,
        maxlength: 30,
        minlength: 5,
    },
    password: {
        type: String,
        require: true,
        maxlength: 30,
        minlength: 8,

    },
})

const User = new mongoose.model("User", userSchema);

module.exports.User = User;