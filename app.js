// 3rd Party imports
const express = require ('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

// Route Imports
const priRoutes = require('./routes/priRoutes');
const authRoutes = require('./routes/authRoutes');
const Blog = require('./models/blog');

//Express app
const app = express();
const PORT = process.env.PORT || 3000;

//MongoDB
const dbURI = 'mongodb+srv://Noex98:eaaa12345@uxui.1nwex.mongodb.net/UX-UI?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(PORT, () => console.info('App kører på port: ' + PORT )))
    .catch((err) => console.log(err));


// Set view engine
app.set('view engine', 'ejs');

// Middleware
//app.use(morgan(dev)); // dev tool
app.use(cookieParser()); // Parse cookies
app.use(express.urlencoded({ extended: true })); // HTML form
app.use(express.json({ extended: true })); // HTML form

// Static
app.use(express.static('./public'));




// Routing
app.use(authRoutes);
app.use(priRoutes);

//404
app.use((req, res) => {
    res.render('404', { title: '404'});
});


// Listen for requests
