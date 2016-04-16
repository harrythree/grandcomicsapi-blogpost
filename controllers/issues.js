var Issue = require('../models/Issue');

module.exports = {
	all: function(req, res, next) {
		var seriesId = req.query.series_id;
		var variantFilter = req.query.variants || 'none';

		if (!seriesId) {
			var err = new Error('The `series_id` parameter is required.');
			err.status = 400;
			return next(err);
		}

		Issue.forge()
		.query(function(qb) {
			qb.limit(20);
			qb.where({series_id: seriesId});
			if (variantFilter === 'none' && variantFilter !== 'both') {
				qb.whereNull('variant_of_id');
			}
			if (variantFilter === 'only' && variantFilter !== 'both') {
				qb.whereNotNull('variant_of_id');
			}
		})
		.fetchAll()
		.then(function(results) {
			res.status(200).json(results);
		})
		.catch(next);
	},

	get: function(req, res, next) {
    Issue.forge({
			id: req.params.id
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
