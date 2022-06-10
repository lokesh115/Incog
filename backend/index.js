const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

let port = process.env.PORT || 2534;
//Import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');

dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT)
.then(()=>console.log('Database Connected!!'))
.catch(e=>console.log(e));

//Middleware
app.use(cors());
app.use(express.json());


//Route Middlewares
app.use('/api/user',authRoute);
app.use('/api/posts',postRoute);

app.get('/',(req,res)=>{res.json(
    {"message":"The server is up and running!!"}
    )});

app.listen(port);