var shard = require('./shard.json');

shard.routes = [
  {
    path: '/',
    method: 'GET',
    respond: function (req, res, db) {
      res.send('OK');
    }
  }
]

module.exports = shard;