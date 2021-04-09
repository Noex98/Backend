// Authentication
const express = require('express');
const authRoutes = express.Router();

// Load login view
authRoutes.get('/Login', (req, res) => {
    //If logged in, you go to index page
    if (req.cookies.isLoggedIn === 'true'){
        res.redirect('/')

    //If not, render login page
    } else {
        res.render('login', { title: 'Login' });
    }
});

// Load create user view 
authRoutes.get('/create-user', (req, res) => {
    //If logged in, you go to index page
    if (req.cookies.isLoggedIn === 'true'){
        res.redirect('/')

    //If not, render login page
    } else {
        res.render('create-user', { title: 'Ny bruger' });
    }
});

//If you are not logged in and send GET
authRoutes.get('/*', (req, res, next) => {
    if (req.cookies.isLoggedIn === 'true'){
    next()
    } else {
        res.redirect('Login')
    }
})

//Login btn
authRoutes.post('/Login', (req, res, next) => {
    //User is already logged in
    if (req.cookies.isLoggedIn === 'true'){
        next();

    //User is not logged in
    } else {
        if (req.body.username== 'admin' || req.body.password == '12345') {
            res.cookie('isLoggedIn', 'true');
            res.redirect('/');
        } else {
            res.json({ msg: 'login fejl' })
        }
    }
})



module.exports = authRoutes;