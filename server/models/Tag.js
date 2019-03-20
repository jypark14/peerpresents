/* tag.js
*/


var mongoose = require("mongoose"),
    Response = require("./Response"),
    Presentation = require('./Presentation');

// create a new User
var TagSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    presentation: {
        type: mongoose.Schema.ObjectId,
        ref: Presentation,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    responses: [{type: mongoose.Schema.Types.ObjectId, ref: 'Response'}],
    id: {
        type: String,
        required: true
    }
  
});

module.exports = mongoose.model('Tag', TagSchema);