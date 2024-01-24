const path = require('path');
const express = require('express');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();
const publicPath = path.join(__dirname, 'public');

const PORT = 3000;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());

app.use((req, res, next) => {
  const start = Date.now();
  next();

  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use('/static', express.static(publicPath));

app.get('/', (req, res) => {
  res.render('index', { title: 'Vacation Trips', caption: "Let's go Skiing" });
});

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
