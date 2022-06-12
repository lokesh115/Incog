//Validation
const Joi = require('@hapi/joi');

//Register Validation
const registerValidation = (data)=>{
    const validationSchema = Joi.object({
        email: Joi.string()
            .min(6)
            .required(),
        password: Joi.string()
            .min(6)
            .required()
    });

    return validationSchema.validate(data);
};

//Login Validation
const loginValidation = (data)=>{
    const validationSchema = Joi.object({
        email: Joi.string()
            .min(6)
            .required(),
        password: Joi.string()
            .min(6)
            .required()
    });

    return validationSchema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;