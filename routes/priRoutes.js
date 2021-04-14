// Primary routes
//const { request } = require('express');
const express = require('express')
const priRoutes = express.Router();
const Blog = require('../models/blog');
const User = require('../models/user');

//Index
priRoutes.get('/', (req, res) => {
    User.findOne( {_id: req.cookies.user_Id} ) //Find user
        .then((userResult) => {
            Blog.find().sort({ createdAt: -1 }) //Find blogs

                .then((result) => {
                    res.render('index', { title: 'All blogs', blogs: result, user: userResult })
                    console.log(userResult.username)
                })
                .catch((err) => {
                    console.log(err);
                })
        })

})

// Blog post
priRoutes.post('/', (req, res) => {
    const blog = new Blog(req.body);
    
    blog.save()
        .then((result) => {
            res.redirect('/')
        })
        .catch((err) => {
            console.log(err);
        });
})



module.exports = priRoutes;