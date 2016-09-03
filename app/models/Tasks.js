var mongoose = require('mongoose');

module.exports = mongoose.model('Tasks', {
	title : {type : String, default: ''},
	description: {type : String, default: ''},
	done: {type : String, default: ''}
})