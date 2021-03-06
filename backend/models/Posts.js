const mongoose = require('mongoose');

const setPostTime = () => {
    var currentTime = new Date();
    var currentOffset = currentTime.getTimezoneOffset();
    var ISTOffset = 330;
    var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
    var hoursIST = ISTTime.getHours();
    var minutesIST = ISTTime.getMinutes();
    var secondsIST = ISTTime.getSeconds();
    return(hoursIST + ":" + minutesIST + ":" + secondsIST);
}

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
    time: {
        type: String,
        default: setPostTime,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Posts',postSchema);