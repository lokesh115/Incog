const User = require('../models/User');
const jwt = require('jsonwebtoken');
const {registerValidation,loginValidation} = require('../validation');
const bcrypt = require('bcryptjs')

const regPost = async (req,res)=>{
    //Validate the user
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).json({
        "status" : false,
        "message" : error.details[0].message
    });

    //Checking if the user is already in the database
    const emailExist = await User.findOne({email: req.body.email})
    if(emailExist) return res.status(400).json({
        "status" : false,
        "message" : "username already exits"
    });

    //Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);


    //Input and save user details
    const user = new User({
        email: req.body.email,
        password: hashedPassword
    });
    try{
        const savedUser = await user.save(user);
        console.log(user)
        res.json({"message":"New user : "+user.email+" has been created!"});
    }catch(err){
        res.status(400).json({"message":err});
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
        "message":"username doesn't exist"
    });
    //Check if the password is correct
    const validPass = await bcrypt.compare(request.password, user.password);
    if(!validPass) return res.status(400).json({
        "status" : false,
        "message":'Invalid password'
    });

    //Create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET,{expiresIn: '1h'});
    res.header('auth-token',token).json({
        "status" : true,
        "JWT_token" : token,
        "message" : "Login successful",
        "name" : user.name,
        "isAdmin" : user.isAdmin
    });

};

const makeAdmin = async (req,res)=>{
    let request = req.body;
    const updatedPost = await User.updateOne({email: request.email},
        {$set:{
            isAdmin: true}
    })
    if(updatedPost.modifiedCount==1)res.json({message:request.email+" is admin now!"});
    else if(updatedPost.matchedCount==1) res.json({message:"The user is already an admin!"});
    else res.json({message:"The username does not exist"});
    
};

module.exports.regPost = regPost;
module.exports.loginPost = loginPost;
module.exports.makeAdmin = makeAdmin;