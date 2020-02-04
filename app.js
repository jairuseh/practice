const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
require('dotenv/config');


app.use(expressLayouts);
app.set('view engine', 'ejs');

mongoose.connect(process.env.dbConnection, { useNewUrlParser: true }, () =>{
    console.log('connected to db');
});

// app.set('view-engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index-login.ejs');
});

app.get('/register', (req, res) => {
    res.render('register.ejs');
});

app.get('/login', (req, res) => {
    res.send('login')
});

app.listen(3000, () => console.log('Listening to PORT 3000...'));