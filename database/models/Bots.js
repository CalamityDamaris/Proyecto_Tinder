const mongoose = require('mongoose');

const bots = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        min: 18,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    likes: {
        type: [String],
    },
    avatar: {
        type: [String],
    },
},
    {
        timestamps: false,
        versionKey: false,
    })

module.exports = mongoose.model('Bots', bots)