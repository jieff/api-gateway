// routes/employee.js
const express = require('express');
const employeeServiceProxy = require('../middleware/proxyConfig');
const router = express.Router();

router.use(employeeServiceProxy); 

router.get('/findAll', (req, res, next) => {});
router.get('/:id', (req, res, next) => {});


module.exports = router;

