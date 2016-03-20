var bookshelf = require('../bookshelf');

module.exports = bookshelf.Model.extend({
	tableName: 'gcd_issue',
	stories: function() {
		var Story = require('../models/Story');
		return this.hasMany(Story, 'issue_id');
	},
	brand: function() {
		var Brand = require('../models/Brand');
		return this.belongsTo(Brand, 'brand_id');
	}
});
