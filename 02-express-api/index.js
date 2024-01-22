const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
  { id: 0, name: 'Albert Einstein' },
  { id: 1, name: 'Sir Isaac Newton' },
];

app.use((req, res, next) => {
  const start = Date.now();
  next();

  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.get('/friends', (req, res) => {
  res.status(200).json(friends);
});

app.get('/friends/:id', (req, res) => {
  const { id } = req.params;
  const friend = friends[Number(id)];

  if (!friend) {
    return res.status(404).json({ error: 'Friend not found' });
  }

  res.status(200).json(friend);
});

app.get('/messages', (req, res) => {
  res.send('<ul><li>Hello Albert!</li></ul>');
});

app.post('/messages', (req, res) => {
  console.log('Updating messages');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
