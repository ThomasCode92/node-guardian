const path = require('path');
const fs = require('fs');
const https = require('https');

const express = require('express');
const passport = require('passport');
const { Strategy } = require('passport-google-oauth20');
const helmet = require('helmet');
const dotenv = require('dotenv');

const PORT = process.env.PORT || 3000;

dotenv.config();

const config = {
  CLIENT_ID: process.env.GOOGLE_OAUTH_CLIENT_ID,
  CLIENT_SECRET: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
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

const app = express();

function checkLoggedIn(req, res, next) {
  const isLoggedIn = true; // TODO: Implement a real authentication check

  if (!isLoggedIn) return res.status(401).json({ message: 'Unauthorized' });

  next();
}

app.use(helmet());
app.use(passport.initialize());

app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/auth/google', (req, res) => {});

app.get('/auth/google/callback', (req, res) => {});

app.get('auth/logout', (req, res) => {});

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
