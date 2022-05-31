const express = require("express");

const app = express();

//For listening
app.listen(3003);

//Middlewares
/*
app.use('/page', ()=>{
    console.log("This is a middleware running in the route page")
});
*/

//Adding routes
app.get('/',(req,res)=>{
    res.send("This is home");
});

app.get('/page',(req,res)=>{
    res.send("This is page");
});