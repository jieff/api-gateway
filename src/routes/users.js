const route = require('express').Router();
const httpProxy = require('express-http-proxy')
const { checkToken } = require('../middleware/checkToken')
const { USERS_API_URL } = require('../URLs')
const userServiceProxy = httpProxy(USERS_API_URL)

route.get('/users', (req, res, next) => userServiceProxy(req, res, next))

module.exports = route;