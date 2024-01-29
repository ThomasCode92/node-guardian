const cluster = require('cluster');
const os = require('os');

const express = require('express');

const app = express();

const NUM_WORKERS = os.cpus().length;

function delay(duration) {
  const start = Date.now();
  while (Date.now() - start < duration) {
    // do nothing, event loop is blocked...
  }
}

app.get('/', (req, res) => {
  res.send(`Performance example - ${process.pid}`);
});

app.get('/timer', (req, res) => {
  delay(9000);
  res.send(`Ding ding ding! - ${process.pid}`);
});

if (cluster.isMaster) {
  console.log('Master process has been started');
  console.log(`Creating ${NUM_WORKERS} worker processes...`);

  for (let i = 0; i < NUM_WORKERS; i++) {
    cluster.fork();
  }
} else {
  console.log(`Worker process has been started on ${process.pid}`);

  app.listen(3000, () => {
    console.log('Server listening on port: ', 3000);
  });
}
