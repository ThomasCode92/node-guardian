const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ id: 1, name: 'Sir Isaac Newton' }));
});

server.listen(3000, () => {
  console.log('Server is running...');
});
