require('dotenv').config();
const express = require('express')
const httpProxy = require('express-http-proxy')
const app = express()
const port = 3003
const { checkToken } = require('./middleware/checkToken')

const userServiceProxy = httpProxy(process.env.USERS_API_URL)
const productsServiceProxy = httpProxy(process.env.PRODUCTS_API_URL)

app.get('/', (req, res) => res.send('Hello Gateway API!!!!'))

app.get('/users', (req, res, next) => userServiceProxy(req, res, next))
app.get('/products', checkToken, (req, res, next) => productsServiceProxy(req, res, next))

app.listen(port, () => console.log(`API Gateway listening on port ${port}!`))

