const express = require('express');
const User = require('../models/User');
const router = express.Router();
const verify = require('./verifyToken');


router.get('/',verify,(req,res)=>{
    /*
    res.json({
        posts: {
            title: 'My first post',
            description: 'Random data you should not access'
        }
    })
    */
    res.send(req.user);

});

module.exports = router;