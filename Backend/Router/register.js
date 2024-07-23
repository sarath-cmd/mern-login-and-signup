const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const {Register, validate} = require('../model/registerModel')

router.post('/', async (req, res) => {
    const {error} = validate(req.body)
    if(error) {
        return res.status(400).send(error.details[0].message)
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const hashedConfirmPassword = await bcrypt.hash(req.body.confirmPassword, salt);

    let register = new Register({
        name : req.body.name,
        email : req.body.email,
        password : hashedPassword,
        confirmPassword : hashedConfirmPassword
    })

    const existingUser = await Register.findOne({ email: req.body.email });
    if (existingUser) {
        return res.status(409).send('This email address is already registered. Please use a different one.');
    }
    const existingUserName = await Register.findOne({ name: req.body.name });
    if (existingUserName) {
        return res.status(409).send('This User name is already registered. Please use a different one.');
    }
    if(req.body.password !== req.body.confirmPassword) {
        return res.status(400).send('Passwords did not Match')
    }

    await register.save()
    res.send('Registeration Successful').status(200)
})

module.exports = router