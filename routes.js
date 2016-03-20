var express = require('express');
var router = express.Router();
var controllers = require('./controllers');

router.get('/', controllers.status.get);

router.get('/series', controllers.series.all);
router.get('/series/:id', controllers.series.get);

module.exports = router;
