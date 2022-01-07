const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// This route is being processed through the /admin/ file GET
router.get('/add-product', (req, res, next) => {
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product', formsCSS: true, productCSS: true, activeAddProduct: true });
  });
// This route is being processed through the /admin/ file POST
router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
  });

exports.routes = router;
exports.products = products;