const express = require('express')
const app = express()
const mongoose = require('mongoose')
const register = require('./Router/register')
const login = require('./Router/login')
const cors = require('cors');

mongoose.connect('mongodb://127.0.0.1/loginbackend')
.then(() => {
    console.log('Connection to the DataBase is successful')
}) .catch((error) => {
    console.log(error)
})

// Middleware
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json())
app.use('/register', register)
app.use('/', login)

const port = process.env.PORT || 3000
app.listen(port, () =>{console.log(`The server is running on port ${port}`)})