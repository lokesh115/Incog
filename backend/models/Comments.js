const mongoose = require('mongoose');

const getTime = () => {
    var currentTime = new Date();
    var currentOffset = currentTime.getTimezoneOffset();
    var ISTOffset = 330;
    var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
    var hoursIST = ISTTime.getHours()
    var minutesIST = ISTTime.getMinutes()
    var secondsIST = ISTTime.getSeconds();
    return(hoursIST + ":" + minutesIST + ":" + secondsIST);
}

const commentSchema = new mongoose.Schema({
    postId: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    comment: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    time: {
        type: String,
        default : getTime
    }
});

module.exports = mongoose.model('Comments',commentSchema);