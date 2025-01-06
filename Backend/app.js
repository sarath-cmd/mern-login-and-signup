const express = require('express')
const app = express()
const mongoose = require('mongoose')
const register = require('./Router/register')
const login = require('./Router/login')
const Otpverification = require('./Router/verification')
const cors = require('cors');
const dashboard = require('./Router/dashboard')

mongoose.connect('mongodb://127.0.0.1/loginbackend')
.then(() => {
    console.log('Connection to the DataBase is successful')
}) .catch((error) => {
    console.log(error)
})

// Middleware
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json())
app.use('/', login)
app.use('/register', register);
app.use('/Otpverification', Otpverification)
app.use('/Dashboard', dashboard)

const port = process.env.PORT || 3000
app.listen(port, () =>{console.log(`The server is running on port ${port}`)})