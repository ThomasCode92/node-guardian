const path = require('path');
const fs = require('fs');
const https = require('https');

const express = require('express');
const passport = require('passport');
const { Strategy } = require('passport-google-oauth20');
const cookieSession = require('cookie-session');
const helmet = require('helmet');
const dotenv = require('dotenv');

const PORT = process.env.PORT || 3000;

dotenv.config();

const config = {
  CLIENT_ID: process.env.GOOGLE_OAUTH_CLIENT_ID,
  CLIENT_SECRET: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
  COOKIE_KEY_1: process.env.COOKIE_KEY_1,
  COOKIE_KEY_2: process.env.COOKIE_KEY_2,
};

const AUTH_OPTIONS = {
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
  callbackURL: '/auth/google/callback',
};

function verifyCallback(accessToken, refreshToken, profile, done) {
  console.log('profile:', profile);
  return done(null, profile);
}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

// save the session to the cookie
passport.serializeUser((user, done) => {
  const userId = user.id;
  done(null, userId);
});

// read the session from the cookie
passport.deserializeUser((userId, done) => {
  // User.findById(userId).then(user => done(null, user));
  done(null, userId);
});

const app = express();

function checkLoggedIn(req, res, next) {
  console.log('Current user is:', req.user);

  const isLoggedIn = req.isAuthenticated() && req.user;
  if (!isLoggedIn) return res.status(401).json({ message: 'Unauthorized' });

  next();
}

const cookieOptions = {
  name: 'session',
  maxAge: 1000 * 60 * 60 * 24,
  keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2],
};

app.use(helmet());
app.use(cookieSession(cookieOptions));

// Workaround for an unintentional breaking change
// More info: https://github.com/jaredhanson/passport/issues/904
app.use((req, res, next) => {
  if (!req.session.regenerate) req.session.regenerate = cb => cb();
  if (!req.session.save) req.session.save = cb => cb();
  next();
});

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/auth/google', passport.authenticate('google', { scope: ['email'] }));

app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/auth/failure',
    successRedirect: '/',
    session: true,
  }),
  (req, res) => {
    console.log('Google called us back!');
  }
);

app.get('/auth/logout', (req, res) => {
  req.logout(err => {
    if (err) return res.status(500).send('Failed to log out');
    res.redirect('/');
  });
});

app.get('/auth/failure', (req, res) => {
  return res.status(401).send('Failed to log in');
});

app.get('/secret', checkLoggedIn, (req, res) => {
  return res.send('Your personal secret value is 42!');
});

const options = {
  key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
};

https.createServer(options, app).listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
