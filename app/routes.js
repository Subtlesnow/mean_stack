var path = require('path');
var Tasks = require('./models/Tasks')
var Snacks = require('./models/Snacks')

module.exports = function(app) {

	api_root = "/api/v1.0"

	app.get(api_root+'/tasks', function(req, res){
		Tasks.find(function(err, tasks) {

			return res.send({"works": tasks})
		})
	})

	app.get(api_root+'/snacks', function(req, res){
		Snacks.find(function(err, snacks) {

			return res.send({"works": snacks})
		})
	})

	app.get('*', function(req, res){
		res.sendFile(path.resolve(__dirname+'/../public/index.html'))
	})

}