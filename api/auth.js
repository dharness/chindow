const express = require('express');
const { passport } = require('./../config/passport');


const router = express.Router();

router.post('/login', passport.authenticate('local-login', { session: false }), (req, res) => {
  const { id, email } = req.user;
  res.send({ token: req.token, id, email })
});

module.exports = router;
