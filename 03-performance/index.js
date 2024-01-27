const express = require('express');

const app = express();

function delay(duration) {
  const start = Date.now();
  while (Date.now() - start < duration) {
    // do nothing, event loop is blocked...
  }
}

app.get('/', (req, res) => {
  res.send('Performance example');
});

app.get('/timer', (req, res) => {
  delay(9000);
  res.send('Ding ding ding!');
});

app.listen(3000, () => {
  console.log('Server listening on port: ', 3000);
});
