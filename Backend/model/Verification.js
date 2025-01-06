const mongoose = require('mongoose')
const joi = require('joi')

const VerificationSchema = new mongoose.Schema({
    EO : {
        type : String,
        min : 4,
        required : true
    }
})

const Verify = mongoose.model('Verify', VerificationSchema)

async function validateData(Verify){
    const schema = joi.object({
        email : joi.string().required(),
    })
    return schema.validateAsync(Verify)
}

exports.Verify = Verify
exports.validateData = validateData