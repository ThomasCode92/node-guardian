const http = require('http');

const server = http.createServer();

const friends = [
  { id: 0, name: 'Nicola Tesla' },
  { id: 1, name: 'Sir Isaac Newton' },
  { id: 2, name: 'Albert Einstein' },
];

server.on('request', (req, res) => {
  const items = req.url.split('/'); // /friends/2 => ['', 'friends', '2']
  const basePath = items[1];

  if (req.method === 'POST' && basePath === 'friends') {
    req.on('data', data => {
      const friend = data.toString();
      console.log('Request:', friend);

      friends.push(JSON.parse(friend));
    });

    req.pipe(res);
  } else if (req.method === 'GET' && basePath === 'friends') {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    if (items.length === 3) {
      const friendIdx = Number(items[2]);
      return res.end(JSON.stringify(friends[friendIdx]));
    }

    res.end(JSON.stringify(friends));
  } else if (req.method === 'GET' && basePath === 'messages') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    res.write('<html>');
    res.write('<body>');
    res.write('<ul>');
    res.write('<li>Hello Isaac</li>');
    res.write('<li>What are your thoughts on astronomy</li>');
    res.write('</ul>');
    res.write('</body>');
    res.write('</html>');
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server is running...');
});
