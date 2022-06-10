const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        max: 255,
        min: 6
    },
    story: {
        type: String,
        require: true,
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