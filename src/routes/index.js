const express = require('express');
const v1Apiroutes = require('./v1/index');
const router = express.Router();

router.use('/v1', v1Apiroutes);

module.exports = router;