// routes/auth.js
const express = require('express');
const authServiceProxy = require('../middleware/proxyConfig');
const router = express.Router();

router.use(authServiceProxy); 

router.post('/signin', (req, res, next) => {
    const { email, password } = req.body;
});
router.get('/:id', (req, res, next) => {});


module.exports = router;
