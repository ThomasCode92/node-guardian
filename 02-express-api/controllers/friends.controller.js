const model = require('../models/friends.model');

function getFriends(req, res) {
  res.status(200).json(model);
}

function getFriend(req, res) {
  const { id } = req.params;
  const friend = model[Number(id)];

  if (!friend) {
    return res.status(404).json({ error: 'Friend not found' });
  }

  res.status(200).json(friend);
}

function postFriends(req, res) {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Missing name' });
  }

  const friend = { id: model.length, name };
  model.push(friend);

  res.status(201).json(friend);
}

module.exports = { getFriends, getFriend, postFriends };
