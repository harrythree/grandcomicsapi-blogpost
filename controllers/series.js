var Series = require('../models/Series');

module.exports = {
  get: function(req, res, next) {
    Series.forge()
    .query({
      limit: 10
    })
    .fetchAll()
    .then(function(series) {
      res.status(200).json(series);
    })
    .catch(next);
  }
}
