const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
//Import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');

dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT)
.then(()=>console.log('Database Connected!!'))
.catch(e=>console.log(e));

//Middleware
app.use(express.json());

//Route Middlewares
app.use('/api/user',authRoute);
app.use('/api/posts',postRoute);

app.listen(2534);