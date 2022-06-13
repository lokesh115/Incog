const express = require('express');
const router = express.Router();
const verify = require('./verifyToken');
const {getPost,addPost,getUserPost,deletePost} = require('../controllers/postControl');

router.post('/view',verify,getPost);

router.post('/add',verify,addPost);

router.post('/userPosts',verify,getUserPost);

router.delete('/delPost',verify,deletePost);

module.exports = router;