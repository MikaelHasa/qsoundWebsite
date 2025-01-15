const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'))
router.use('/db', require('./db'))


module.exports = router;