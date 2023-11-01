const routes = require('express').Router();
//const { PRODUCTS_API_URL } = require('../URLs');
//const httpProxy = require('express-http-proxy');
//const productsServiceProxy = httpProxy(PRODUCTS_API_URL);

routes.get('/products', (req, res) => res.send('products'))

//route.get('/products', (req, res, next) => productsServiceProxy(req, res, next));

module.exports = routes;



