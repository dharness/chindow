const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Account = require('./../models/Account');
const jwt = require('jsonwebtoken');
const jwtConfig = require('./jwt');


function configureStrategies() {
  passport.serializeUser((account, done) => {
    done(null, account.id)
  });

  passport.deserializeUser((id, done) => {
    Account.findById(id, (err, account) => {
      done(err, account)
    });
  });

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, function (req, email, password, done) {
    Account.findOne({ email}, (err, account) => {
      if (err)
        return done(err)

      if (account) {
        return done(null, false, {error: 'email already exists'})
      } else {
        const newAccount = new Account();
        newAccount.email = email
        newAccount.password = newAccount.generateHash(password)

        newAccount.save(function (err) {
          if (err)
            throw err
          return done(null, newAccount)
        })
      }
    });
  }));

  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, function (req, email, password, done) {
    Account.findOne({ email }, (err, account) => {
      if (err) { return done(err); }

      if (!account) { return done(null, false, req); }
      if (!account.validPassword(password)) { return done(null, false, req); }
      req.token = jwt.sign(
        { email },
        jwtConfig.secretKey,
        { expiresIn: jwtConfig.expiresIn }
      );

      return done(null, account, req);
    })
  }));
  return passport;
}

module.exports = { configureStrategies, passport }
