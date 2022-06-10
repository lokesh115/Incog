const User = require('../models/User');
const jwt = require('jsonwebtoken');
const {registerValidation,loginValidation} = require('../validation');
const bcrypt = require('bcryptjs')

const regPost = async (req,res)=>{
    //Validate the user
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //Checking if the user is already in the database
    const emailExist = await User.findOne({email: req.body.email})
    if(emailExist) return res.status(400).send("email already exits")

    //Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);


    //Input and save user details
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    try{
        const savedUser = await user.save(user);
        res.send({user: user._id});
    }catch(err){
        res.status(400).send(err);
    }
};

const loginPost = async (req,res)=>{
    console.log(req.body);
    let request = req.body;
    const {error} = loginValidation(request);
    if(error) return res.status(400).json({
        "status" : false,
        "message" : error.details[0].message
    });

    //Checking if the email exists
    const user = await User.findOne({email: request.email});
    if(!user) return res.status(400).json({
        "status" : false,
        "message":"email doesn't exist"
    });
    //Check if the password is correct
    const validPass = await bcrypt.compare(request.password, user.password);
    if(!validPass) return res.status(400).json({
        "status" : false,
        "message":'Invalid password'
    });

    //Create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token',token).json({
        "status" : true,
        "JWT_token" : token,
        "message" : "Login successful",
        "name" : user.name
    });

};

module.exports.regPost = regPost;
module.exports.loginPost = loginPost;