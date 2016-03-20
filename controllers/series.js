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
  },

  get: function(req, res, next) {
    var seriesId = parseInt(req.params.id);
		if (!Number.isInteger(seriesId)) {
			var err = new Error('Series ID must be an integer.');
			err.status = 400;
			return next(err);
		}

    Series.forge({
			id: seriesId
		})
		.fetch({
			withRelated: ['issues.stories.type', 'issues.brand']
		})
		.then(function(series) {
			res.status(200).json(series);
		})
		.catch(next);
  }
}
