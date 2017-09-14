require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 9090;
const bodyParser = require('body-parser')
const { configureStrategies } = require('./config/passport');
const connectDb = require('./services/connections').connect;
const Strategy = require('passport-local').Strategy;
const winston = require('winston');
const Account = require('./models/Account');
const expressJwt = require('express-jwt');
const jwtSecret = require('./config/jwt').secretKey;
const api = require('./api')


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
const passport = configureStrategies();
app.use(passport.initialize());


app.use('/api', api);


app.get('/secret', (req, res) => {
  res.send('heyo')
});

app.get('/err', (req, res) => {
  res.send('some error occurred')
})

app.post('/signup', passport.authenticate('local-signup', { session: false }), (req, res) => {
  res.send({ token: req.token })
});

app.post('/login', passport.authenticate('local-login', { session: false }), (req, res) => {
  res.send({ token: req.token })
});

const start = async () => {
  await connectDb();
  app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
  });
}

start();
