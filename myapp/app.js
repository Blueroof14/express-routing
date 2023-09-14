const express = require('express')
const app = express()
app.set ('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.redirect('/home')
});

app.get('/home', (req, res) =>{
    res.render('home.ejs')
});

app.get('/services', (req, res) =>{
    res.render('services')
});

app.get('/contacts', (req, res) =>{
    res.render('contacts')
});

const PORT = 3000

app.listen(3000, function () {
    console.log("Server is running on localhost 3000");
});