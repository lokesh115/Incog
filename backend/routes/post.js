const express = require('express');
const router = express.Router();
const verify = require('./verifyToken');
const {getPost,addPost} = require('../controllers/postControl')

router.post('/view',verify,getPost);

router.post('/add',verify,addPost);

module.exports = router;