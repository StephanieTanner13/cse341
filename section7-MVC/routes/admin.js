const path = require('path');

const express = require('express');

//get access to the products controller with the functions controlling the products
const productsController = require('../controllers/products');

const router = express.Router();

// This route is being processed through the /admin/ file GET
//we are telling the router to hold the information from the product controller function getAddProduct
router.get('/add-product', productsController.getAddProduct);

// This route is being processed through the /admin/ file POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;