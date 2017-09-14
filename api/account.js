const express = require('express');
const { passport } = require('./../config/passport');
const Account = require('./../models/Account');

const router = express.Router();

router.get('/:accountId', (req, res) => {
  const accountId = req.params.accountId;

  Account.findOne({ _id: accountId }, (err, account) => {
    if (err) { return res.send(500); }
    return res.send(account.toClient());
  });
});

module.exports = router;
