var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.status(200).json({
		status: 'Available',
		uptime: Math.round(process.uptime())
	});
});

module.exports = router;
