const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

//import the 404 error controller
const errorController = require('./controllers/404');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//middlewear function to parse the form information and it calls next
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//paths to my other files
app.use('/admin', adminRoutes);
app.use(shopRoutes);

//get access to the function to render the 404 page from the error controller
app.use(errorController.get404Page);

app.listen(3000);