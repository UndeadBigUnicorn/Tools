//Connect our configurated MongoDB
const mongoose = require("./mongoose");

//Get schema builder
const Schema = mongoose.Schema;

//User's schema
const usersScheme = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    nickname: String,
    role: {
        type: String,
        required: true,
        default: "memeber"
    },
    signup_date: {
        type: Date,
        required: true
    },
    last_login: {
        type: Date,
        required: true,
        default: Date.now
    },
    is_actived: {
        type: Boolean,
        default: false
    },
    temp_code: String,
    UUID: String    
});

//User's model
const User = mongoose.model("User", usersScheme);