module.exports = {
  get: function(req, res, next) {
    res.status(200).json({
  		status: 'Available',
  		uptime: Math.round(process.uptime())
  	});
  }
}
