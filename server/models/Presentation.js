/* presentation.js
*/


var mongoose = require("mongoose"),
    Response = require("./Response"),
    Question = require('./Question'),
    Tag = require('./Tag'),
    User = require('./User');

// create a new Presentation
var PresentationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
    },
    users: {
  		type: [mongoose.Schema.Types.User]
  	},
    questions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Question'}],
    clusters: [{type: mongoose.Schema.Types.ObjectId, ref: 'Cluster'}],
    responses: [{type: mongoose.Schema.Types.ObjectId, ref: 'Response'}],
    date: {
        type: Date,
        required: true
    },
    id: {
        type: String,
        required: true
    }
});



module.exports = mongoose.model('Presentation', PresentationSchema);