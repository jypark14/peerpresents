var mongoose = require('mongoose'),
	User = require('./User'),
	Response = require('./Response');

var ReactionSchema = mongoose.Schema({
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
	},
	emoji: {
		type: String,
		//required: true
	},
	id: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Reaction', ReactionSchema);