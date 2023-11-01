require('dotenv').config();
const express = require('express')
const httpProxy = require('express-http-proxy')
const app = express()
const port = 3003
const { checkToken } = require('./middleware/checkToken')

const userServiceProxy = httpProxy(process.env.USERS_API_URL)
const productsServiceProxy = httpProxy(process.env.PRODUCTS_API_URL)

const accountsServiceProxy = httpProxy(process.env.ACCOUNTS_API_URL)
const balanceServiceProxy = httpProxy(process.env.BALANCE_API_URL)
const transactionServiceProxy = httpProxy(process.env.TRANSACTIONS_API_URL)

router.get('/', checkToken, (req, res) => res.send('TNP Gateway'))
// ########################
// BALANCE ROUTE'S GETTER'S
router.get('/api/crued', (req, res, next) =>
  balanceServiceProxy(req, res, next)
)
// ########################
// ACCOUNT ROUTE'S GETTER'S
router.get('/api/accounts', checkToken, (req, res, next) =>
  accountsServiceProxy(req, res, next)
)
router.get('/api/accounts/:id', checkToken, (req, res, next) =>
  accountsServiceProxy(req, res, next)
)
// ACCOUNT ROUTE'S SETTER'S

// #############################
// TRANSACTIONS ROUTE'S GETTER'S
router.get('/transactions', checkToken, (req, res, next) =>
  transactionServiceProxy(req, res, next)
)
router.get('/user/:id/transactions', checkToken, (req, res, next) =>
  transactionServiceProxy(req, res, next)
)
router.get('/seller/:id/transactions', checkToken, (req, res, next) =>
  transactionServiceProxy(req, res, next)
)

// TRANSACTIONS ROUTE'S SETTER'S
router.post('/user/:id/transactions/stats', checkToken, (req, res, next) =>
  transactionServiceProxy(req, res, next)
)

router.post(
  '/user/:id/transactions/stats/dates',
  checkToken,
  (req, res, next) => transactionServiceProxy(req, res, next)
)

router.post('/user/:id/transactions/operation', checkToken, (req, res, next) =>
  transactionServiceProxy(req, res, next)
)

router.post('/transactions', checkToken, (req, res, next) =>
  transactionServiceProxy(req, res, next)
)


app.get('/', (req, res) => res.send('Hello Gateway API!!!!'))

app.get('/users', (req, res, next) => userServiceProxy(req, res, next))
app.get('/products', checkToken, (req, res, next) => productsServiceProxy(req, res, next))

app.listen(port, () => console.log(`API Gateway listening on port ${port}!`))

