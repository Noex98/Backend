// Primary routes
const { request } = require('express');
const express = require('express')
const priRoutes = express.Router();
const Blog = require('../models/blog');

//Index
priRoutes.get('/', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All blogs', blogs: result })
        })
        .catch((err) => {
            console.log(err);
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