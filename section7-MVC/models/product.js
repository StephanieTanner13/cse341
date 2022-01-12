//the product model

//this allows us to work with the file system. it is a core module in node.js
const fs = require('fs');
//path module to work on all operating systems
const path = require('path');

//global constant
//create a path that will be accessable using the path constant above
    const p = path.join(path.dirname(require.main.filename),
    'data',
    'products.json'
    );

//we resuse this helper function to create a path to the file and read the file with products
const getProductsFromFile = cb => {
    //read the file
    fs.readFile(p, (err, fileContent) => {
        if (err){
           return cb([]);
        }
        cb(JSON.parse(fileContent));
    });
}

//a class is a template for creating objects. Encapsulate data with code to work on 
//that data. Classes are built on prototypes
//"this" refers to the object being created
module.exports = class Product{
    //constructor function
    constructor(t) {
        this.title = t;
    }

    //store product.
    //function to save the product
    save(){
        getProductsFromFile(products => {
            //add our new products to the existing list of products
            products.push(this);
            //save it back into the file with the updated list of products
            //stringify takes the file and writes it to JSON
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
        });
    });
}

    //fetch all of the existing products
    //thing calling fetchAll does a CALLBACK
    static fetchAll(cb){
        getProductsFromFile(cb);
    }
};