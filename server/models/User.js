/* user.js*/


var mongoose = require("mongoose"),
    Presentation = require("./Presentation");
mongoose.set('debug', true);
// create a new User
var UserSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    imageurl: {
        type: String
    },
  	presentations: {
  		type: [mongoose.Schema.Types.Presentation]
  	},
    id: {
        type: String,
        required: true
    },
    usertype: {
        type: String,
        required: true
    },
    questionsAsked: {
        type: [mongoose.Schema.Types.Question]
    },
    responsesSubmitted: {
        type: [mongoose.Schema.Types.Response]
    },
    responsesVotedOn: {
        type: [mongoose.Schema.Types.Response]
    }
});

module.exports = mongoose.model('User', UserSchema);