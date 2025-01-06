const mongoose = require('mongoose');
const joi = require('joi');

const registerSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true
    },
    email: {
        type: String,
        minlength: 5,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minlength: 8,
        required: true
    },
    confirmPassword: {
        type: String,
        minlength: 8,
        required: true
    },
    O: {
        type: Number,
        required: true
    },
    vs: {
        type: Boolean,
        default: false,
        required: true
    },
});

const Register = mongoose.model('Register', registerSchema);

async function validateData(register) {
    const schema = joi.object({
        name: joi.string().min(3).max(50).required(),
        email: joi.string().email().min(5).required(),
        password: joi.string().min(8).required(),
        confirmPassword: joi.string().min(8).required(),
    });
    return schema.validateAsync(register);
}

exports.Register = Register;
exports.validate = validateData;