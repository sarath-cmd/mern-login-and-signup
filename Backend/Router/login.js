const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { Register } = require('../model/registerModel');

// POST /login
router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Register.findOne({ email });
        if (!user) {
            return res.status(401).send('Invalid email');
        }
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(401).send('Invalid password');
        }
        res.status(200).send('Login successful');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;
