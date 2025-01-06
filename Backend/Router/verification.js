const express = require('express');
const router = express.Router();
const { Register } = require('../model/registerModel');

// POST
router.post('/', async (req, res) => {
    try {
        const email = req.body.email;
        const EO = req.body.EO;
        const user = await Register.findOne({ email });
        if(user.O == EO){
            user.vs = true;
            await user.save();
            return res.status(200).send('Email Verified');
        } else { 
            return res.status(400).send('OTP verification failed');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});


module.exports = router;
