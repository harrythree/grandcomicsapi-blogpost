var express = require('express');
var cors = require('cors');
var app = express();
var PORT = process.env.PORT || 8080;

app.use(cors());

app.get('/', function(req, res, next){
  res.status(200).json({
		status: 'Available',
		uptime: Math.round(process.uptime())
	});
});

app.listen(PORT);
console.log('Starting on port ' + PORT);
