// Authentication
const express = require('express');
const authRoutes = express.Router();
const User = require('../models/user');

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

//If you are not logged in and send GET req
authRoutes.get('/*', (req, res, next) => {
    User.findOne({ _id: req.cookies.user_Id })
        .then ((result) => {
            if (result){
                next();
            } else {
                res.redirect('/Login')
            }
    })
})

//Login btn
authRoutes.post('/Login', (req, res, next) => {
    //User is already logged in
    if (req.cookies.isLoggedIn === 'true'){
        next();

    //User is not logged in
    } else {
        User.findOne({ email: req.body.email, password: req.body.password }).exec()
            .then((result) => {
                if (result){
                    console.log(result._id);
                    res.cookie('user_Id', result._id);
                    res.redirect('/')
                } else {
                    res.redirect('/Login')
                }
            })
            .catch((err) => {
                res.redirect('/Login')
            })

    }
})

//Create new user
authRoutes.post('/create-user', (req, res) => {
    const user = new User(req.body);
    
    user.save()
        .then((result) => {
            res.redirect('/Login')
        })
        .catch((err) => {
            console.log(err);
        });
})

module.exports = authRoutes;