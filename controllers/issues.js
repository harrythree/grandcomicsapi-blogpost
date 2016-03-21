var Issue = require('../models/Issue');

module.exports = {
	all: function(req, res, next) {
		var seriesId = req.query.series_id;

		if (!seriesId) {
			var err = new Error('The `series_id` parameter is required.');
			err.status = 400;
			return next(err);
		}

		Issue.forge()
		.query(function(qb) {
			qb.limit(20);
			qb.where({series_id: seriesId});
		})
		.fetchAll()
		.then(function(results) {
			res.status(200).json(results);
		})
		.catch(next);
	},

	get: function(req, res, next) {
    var issueId = parseInt(req.params.id);
		if (!Number.isInteger(seriesId)) {
			var err = new Error('Issue ID must be an integer.');
			err.status = 400;
			return next(err);
		}

    Issue.forge({
			id: issueId
		})
		.fetch({
			withRelated: ['stories.type', 'brand']
		})
		.then(function(result) {
			res.status(200).json(result);
		})
		.catch(next);
	}
};
