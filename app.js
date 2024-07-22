require('dotenv').config(); // Te permite crear variables de entorno
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials/');
// Servir contenido estatico

app.use( express.static('public' ) );

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Orlando Valdez',
        titulo: 'Curso de Node'
    });

});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Orlando Valdez',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Orlando Valdez',
        titulo: 'Curso de Node'
    });
});


app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html');
});


app.listen(port, () => {
    console.log(`Ejemplo app listening at http://localhost:${port}`);
});