var bookshelf = require('../bookshelf');

module.exports = bookshelf.Model.extend({
	tableName: 'gcd_series',
	issues: function() {
		var Issue = require('../models/Issue');
		return this.hasMany(Issue, 'series_id');
	}
});
