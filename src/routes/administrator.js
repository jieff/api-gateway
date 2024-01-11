// routes/administrator.js
const express = require('express');
const administratorServiceProxy = require('../middleware/proxyConfig');
const router = express.Router();

router.use(administratorServiceProxy); 

router.get('/findAll', (req, res, next) => {});
router.get('/:id', (req, res, next) => {});


module.exports = router;
