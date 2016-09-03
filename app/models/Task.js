var mongoose = require('mongoose');

var db = require('./config/db');

module.exports = mongoose.model('Task', {
	title : {type : String, default: ''},
	description: name : {type : String, default: ''},
	done: name : {type : String, default: ''}
})