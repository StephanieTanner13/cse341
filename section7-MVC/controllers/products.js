//all logic that I use with products

//import the class from the product Model
const Product = require('../models/product');

//function to get everything you need to add a product
exports.getAddProduct = (req, res, next) => {
    res.render('add-product', { 
      pageTitle: 'Add Product', 
      path: '/admin/add-product', 
      formsCSS: true, 
      productCSS: true, 
      activeAddProduct: true });
  };

  //function to post the product on the page
  exports.postAddProduct = (req, res, next) => {
      //create a new product in the product model
      //it is created by getting the new title from the form being submitted 'title'
      const product = new Product(req.body.title);
      //save the new product using the Save function in the product Model
      product.save();
    res.redirect('/');
  };

  //function to get all the products
  exports.getProducts = (req, res, next) => {
      //get all the products from the array in the products model
      Product.fetchAll(products => {
        res.render('shop', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
      });
    });
  };