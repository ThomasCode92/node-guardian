const path = require('path');
const fs = require('fs');
const https = require('https');

const express = require('express');
const helmet = require('helmet');

const PORT = process.env.PORT || 3000;

const app = express();

function checkLoggedIn(req, res, next) {
  const isLoggedIn = true; // TODO: Implement a real authentication check

  if (!isLoggedIn) return res.status(401).json({ message: 'Unauthorized' });

  next();
}

app.use(helmet());

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
