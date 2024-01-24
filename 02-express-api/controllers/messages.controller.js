function getMessages(req, res) {
  // res.send('<ul><li>Hello Albert!</li></ul>');
  // res.sendFile('skimountain.jpg', { root: './public/images' });
  res.render('messages', {
    title: 'Messages to my Friends',
    friend: 'Elon Musk',
  });
}

function postMessages(req, res) {
  console.log('Updating messages');
}

module.exports = { getMessages, postMessages };
