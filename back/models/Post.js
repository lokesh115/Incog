const mongoose = require('mongoose');


const Postschema = mongoose.Schema({
    username: String,
    password: String
});

module.exports = mongoose.model('Posts',Postschema);