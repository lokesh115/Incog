const express = require('express');
const router = express.Router();
const verify = require('./verifyToken');
const {regPost,loginPost,makeAdmin} = require('../controllers/authControl');

router.post('/register',regPost);

router.post('/login',loginPost)

router.patch('/makeAdmin',verify,makeAdmin);

module.exports = router;