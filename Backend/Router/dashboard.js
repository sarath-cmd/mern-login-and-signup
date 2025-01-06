const express = require('express');
const router = express.Router();
const { Register } = require('../model/registerModel');

// Middleware to check if user is authenticated and vs is true
const authMiddleware = async (req, res, next) => {
    try {
        const email = req.body.email;
        if (!email) {
            return res.status(400).send('Email is required');
        }

        const user = await Register.findOne({ email });
        if (!user) {
            return res.status(404).send('User not found');
        }

        if (!user.vs) {
            return res.status(403).send('Access denied. Please verify your account first.');
        }

        next();
    } catch (error) {
        console.error('Error in auth middleware:', error);
        res.status(500).send('Internal server error');
    }
};

// Protected route to access dashboard
router.post('/', authMiddleware, async (req, res) => {
    try {
        res.status(200).send('Dashboard content accessible');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

module.exports = router;
