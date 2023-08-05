const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClubSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    logoimg: {
        type: String
    },
    coverimg: {
        type: String
    },
    name: {
        type: String,
        unique: true,
        required: true
    },
    contactemail: {
        type: String
    },
    contactmobile: {
        type: Number
    },
    president: {
        type: String,
        required: true
    },
    vicepresident: {
        type: String
    },
    secretary: {
        type: String
    },
    treasurer: {
        type: String
    },
    members: {
        type: [String]
    },
    collegename: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    interests: {
        type: [String],
        required: true
    },
    events: [
        {
            img: {
                type: String
            },
            name: {
                type: String,
                unique: true,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            required: false
        }
    ],
    achievements: {
        type: [String],
    },
    likes: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    }],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Club = mongoose.model('Club', ClubSchema)