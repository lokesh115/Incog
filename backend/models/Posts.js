const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    name: {
        type: String,
        required: true
    },
    story: {
        type: String,
        required: true,
        max: 4000,
        min: 1
    },
    isAllowed : {
        type: Boolean,
        default: true,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Posts',postSchema);