/* question.js
*/


var mongoose = require("mongoose"),
    Response = require("./Response"),
    User = require("./User"),
    Presentation = require('./Presentation');

// create a new Question
var QuestionSchema = mongoose.Schema({
    presentation: {
        type: mongoose.Schema.ObjectId,
        ref: Presentation,
        requried: true
    },
    text: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.ObjectId,
        ref: User,
        required: true
    },
    responses: [{type: mongoose.Schema.Types.ObjectId, ref: 'Response'}],
    date: {
        type: Date,
        required: true
    },
    published: {
        type: Boolean
    },
    deleted: {
        type: Boolean
    }
});

module.exports = mongoose.model('Question', QuestionSchema);