require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;



app.set('view engine', 'hbs');


var hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'));


app.get('/home',  (req, res) => {
    res.render('home', {
        nombre: 'julian escobar',
        titulo: 'curso de node',
    });
})

app.get('/elements',  (req, res) => {
    res.render('elements', {
        nombre: 'julian escobar',
        titulo: 'curso de node',
    });
})

app.get('/generic',  (req, res) => {
    res.render('generic', {
        nombre: 'julian escobar',
        titulo: 'curso de node',
    });
})

app.get('*',  (req, res) => {
 res.send('404 | page not found')
}) 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})