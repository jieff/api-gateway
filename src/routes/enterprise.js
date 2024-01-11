// routes/enterprise.js
const express = require('express');
const enterpriseServiceProxy = require('../middleware/proxyConfig');
const router = express.Router();

router.use(enterpriseServiceProxy); 

router.get('/findAll', (req, res, next) => {});
router.get('/:id', (req, res, next) => {});


module.exports = router;