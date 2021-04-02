// Imports
const express = require ('express');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

// Set view engine
app.set('view engine', 'ejs');


// Middleware
app.use(morgan('dev'));


// Static
app.use(express.static('./public'));

//##################
//     Routing
//##################

//Index
app.get('/', (req, res) => {
    res.render('index', {  title: 'Home' });
})

//About
app.get('/about', (req, res) => {
    res.render('about', {  title: 'Om os' });
})

//All articles
app.get('/All', (req, res) => {
    res.render('all', {  title: 'Alle artikler' });
})

//An article
app.get('/article1', (req, res) => {
    res.render('article1', {  title: 'Om os' });
})

//404
app.use((req, res) => {
    res.render('404'), { title: '404'};
})

//##################
//  Routing slut
//##################

// Listen for requests
app.listen(PORT, () => console.info('App kører på port: ' + PORT ));