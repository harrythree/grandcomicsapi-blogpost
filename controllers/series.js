var Series = require('../models/Series');

module.exports = {
  all: function(req, res, next) {
    Series.forge()
    .query(function(qb) {
      qb.where('name', 'LIKE', '%'+req.query.name+'%');
      qb.limit(10);
    })
    .fetchAll()
    .then(function(series) {
      res.status(200).json(series);
    })
    .catch(next);
  }
}
