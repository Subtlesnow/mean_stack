var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var config = require('./config.json');

var port = process.env.PORT || 8080;

mongoose.connect(config.database.connection_url);

Tasks = require("./app/models/Tasks")

Tasks.find(function(err, tasks){
	console.log(tasks)
	console.log(err)
});

app.use(bodyParser.json()); 

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));

require('./app/routes')(app);


app.listen(port);
console.log("app running on port " + port)	
exports = module.exports = app; 	