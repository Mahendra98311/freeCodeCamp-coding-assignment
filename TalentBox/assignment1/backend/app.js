const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const { use } = require('./router/auth');
const app = express();

dotenv.config({ path:'./config.env' });
require('./db/conn');
//const User = require('./model/userSchema');
app.use(express.json());

app.use(require('./router/auth'));

const PORT = process.env.PORT;



const middleware = (req, res, next) => {
    console.log(`hello from middleware`);
    next();
}


// app.get('/', (req, res) => {
//     res.send(`Hello from server app.js`);
// });

app.get('/about', middleware, (req, res) => {
    console.log(`hello my about`);
    res.send(`Hello from about server`);
});

app.listen(PORT, () => {
    console.log(`server is running in ${PORT}`)
});