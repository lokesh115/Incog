const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//Adding routes
app.get('/',(req,res)=>{
    res.send("This is home");
});


//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    ()=>{console.log('connected to DB!')
});

//For listening
app.listen(3005);