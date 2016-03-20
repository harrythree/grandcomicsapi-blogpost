var knex = require('knex')({
	client: 'mysql',
  connection: {
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "gcd"
  }
});

module.exports = require('bookshelf')(knex);
