const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String
    },
    gender: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    mobile: {
        type: Number,
        unique: true,
        required: true
    },
    usn: {
        type: String,
        unique: true,
        required: true
    },
    collegename: {
        type: String,
        required: true
    },
    course: {
        type: String,
    },
    dob: {
        type: Date
    },
    sem: {
        type: Number
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model('User', UserSchema)