const express = require('express');
const router = express.Router();
const {regPost,loginPost} = require('../controllers/authControl');

router.post('/register',regPost);

router.post('/login',loginPost)

module.exports = router;