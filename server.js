var express = require('express');
var cors = require('cors');
var app = express();
var PORT = process.env.PORT || 8080;

app.use(cors());

app.use('/', require('./routes'));

app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.json({
		message: err.message,
		error: {}
	});
});

app.listen(PORT);
console.log('Starting on port ' + PORT);
