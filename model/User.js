const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
    dob: String,
})