
    
/* response.js
*/


var mongoose = require("mongoose"),
    Question = require("./Question"),
    Presentation = require('./Presentation'),
    Tag = require('./Tag')
    Vote = require("./Vote"),
    Reaction = require("./Reaction");

// create a new User
var ResponseSchema = mongoose.Schema({
    responder: {
        type: mongoose.Schema.ObjectId,
        ref: TemporaryUser,
        required: true
    },
    question: {
        type: mongoose.Schema.ObjectId,
        ref: Question,
        required: true,
    },
    //it says cluster, but we mean tags.
    cluster: [{type: mongoose.Schema.Types.ObjectId, ref: 'Cluster'}],
    response: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    upvotes: {
        type: Number,
        required: true
    },
    upvoteList: {
        type: [mongoose.Schema.Types.Vote]
    },
    /*downvotes: {
        type: Number,
        required: true
    },*/
    presentation: {
        type: mongoose.Schema.ObjectId,
        ref: Presentation,
        required: true
    },
    reactions: [{type: mongoose.Schema.Types.ObjectId, ref:'Reaction'}]
});

module.exports = mongoose.model('Response', ResponseSchema);