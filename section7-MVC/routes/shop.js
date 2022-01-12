const path = require('path');

const express = require('express');

//import the products controller
const productsController = require('../controllers/products');

const router = express.Router();

//get the information from the function in the products controller to get the products
router.get('/', productsController.getProducts);
  
module.exports = router;