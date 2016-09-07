var mongoose = require('mongoose');
mongoose.set('debug', true);

module.exports = mongoose.model('snacks', {
	title: {type : String, default: ''},
	description: {type : String, default: ''},
	done: {type: String, default: ''}
})