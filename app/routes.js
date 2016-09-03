var path = require('path');

module.exports = function(app) {

	api_root = "/api/v1.0"

	app.get(api_root+'/tasks', function(req, res){
		res.send({"works": true})
	})

	app.get('*', function(req, res){
		res.sendFile(path.resolve(__dirname+'/../public/index.html'))
	})

}