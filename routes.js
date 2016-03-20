var express = require('express');
var router = express.Router();
var controllers = require('./controllers');

router.get('/', controllers.status.get);

router.get('/series', controllers.series.all);

module.exports = router;
