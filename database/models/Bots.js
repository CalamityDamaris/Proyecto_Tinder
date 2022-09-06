const mongoose = require('mongoose');

const bots = new mongoose.Schema({
    avatar: {
        type: String,
    },
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        min: 18,
        required: true,
    },
    likes: {
        type: [String],
    },
    description: {
        type: String,

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
},
    {
        timestamps: false,
        versionKey: false,
    })

module.exports = mongoose.model('Bots', bots)