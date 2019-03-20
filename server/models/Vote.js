var mongoose = require('mongoose'),
	User = require('./User'),
	Response = require('./Response');

var VoteSchema = mongoose.Schema({
	voter: {
		type: mongoose.Schema.ObjectId,
		ref: User,
		//required: true
	},
	date: {
		type: Date,
		//required: true
	},
	resp: {
		type: mongoose.Schema.ObjectId,
		ref: Response,
		//required: true
	}

});

module.exports = mongoose.model('Vote', VoteSchema);