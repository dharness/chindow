const express = require('express');
const auth = require('./auth');
const account = require('./account');
const slack = require('./slack');
const visitors = require('./visitors');


const router = express.Router();
router.use('/auth', auth);
router.use('/account', account);
router.use('/slack', slack);
router.use('/visitors', visitors);

module.exports = router;
