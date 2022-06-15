const express = require('express');
const router = express.Router();
const verify = require('./verifyToken');
const {getPost,addPost,getUserPost,deletePost,addComment,viewComment,deleteComment} = require('../controllers/postControl');

router.post('/view',verify,getPost);

router.post('/add',verify,addPost);

router.post('/userPosts',verify,getUserPost);

router.delete('/delPost',verify,deletePost);

router.post('/addComment',verify,addComment);

router.post('/viewComment',verify,viewComment);

router.delete('/delComment',verify,deleteComment);



module.exports = router;