const express = require('express')
const router = express.Router();

//Index
router.get('/', (req, res) => {
    res.render('index', {  title: 'Home' });
})

//About
router.get('/about', (req, res) => {
    res.render('about', {  title: 'Om os' });
})

//All articles
router.get('/All', (req, res) => {
    res.render('all', {  title: 'Alle artikler' });
})

//An article
router.get('/article1', (req, res) => {
    res.render('article1', {  title: 'Om os' });
})

//404
router.use((req, res) => {
    res.render('404'), { title: '404'};
})

module.exports = router;