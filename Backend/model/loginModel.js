const mongoose = require('mongoose')
const joi = require('joi')

const loginSchema = new mongoose.Schema({
    email : {
        type : String,
        minlength : 13,
        required : true
    },
    password : {
        type : String,
        minlength : 8,
        required : true
    },
})

const Login = mongoose.model('Login', loginSchema)

async function validateData(login){
    const schema = joi.object({
        email : joi.string().min(13).required(),
        password : joi.string().min(8).required()
    })
    return schema.validateAsync(login)
}

exports.Login = Login
exports.validateData = validateData