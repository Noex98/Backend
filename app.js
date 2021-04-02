// Imports
const express = require ('express');
const morgan = require('morgan');
const routes = require('./routes/priRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');

// Middleware
app.use(morgan('dev'));

// Static
app.use(express.static('./public'));

// Routing
app.use(routes);

// Listen for requests
app.listen(PORT, () => console.info('App kører på port: ' + PORT ));