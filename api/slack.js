const express = require('express');
const winston = require('winston');
const { passport } = require('./../config/passport');
const slackAuth = require('./../services/slackAuth');
const Account = require('./../models/Account');


const router = express.Router();

router.get('/authorize', (req, res) => {
  const clientState = JSON.parse(req.query.state);
  slackAuth
    .getAccessToken(req.query.code)
    .then(slackInfo => {
      const id = clientState.slackchatUserId;
      Account.update({ _id: id }, { $set: { slack: slackInfo }}, (err, doc) => {
        if (err) { return res.send(500); }
        res.redirect('http://localhost:3000/59a5990a8a63d7030ba5172e/dashboard/accounts')
      });
    })
    .catch((err) => {
      winston.error(err);
      res.send(JSON.stringify(err));
    });
});

router.post('/revoke', (req, res) => {
  const id = req.body.id;
  Account.update({ _id: id }, {$unset: { slack: 1 }}, (err, doc) => {
    if(err) { return res.send(500); }
    res.send(200);
  });
});

module.exports = router;
