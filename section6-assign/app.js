const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const users = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
  res.render('index', { pageTitle: 'Sign Up' });
});

app.get('/users', (req, res, next) => {
  res.render('users', {
    pageTitle: 'Users',
    users: users,
    hasUsers: users.length > 0
  });
});

app.post('/add-user', (req, res, next) => {
  users.push({ name: req.body.username });
  res.redirect('/');
});

app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000);