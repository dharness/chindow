const express = require('express');
const accounts = require('./accounts');
const visitors = require('./visitors');
const auth = require('./auth');
const embed = require('./embed');
const bodyParser = require('body-parser');


const router = express.Router();
router.use(bodyParser.json());

router.use('/embed', embed);
router.use('/accounts', accounts);
router.use('/visitors', visitors);
router.use('/auth', auth);

module.exports = router;
