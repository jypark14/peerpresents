/* user.js
 * modified from https://github.com/sjuvekar/3Dthon/blob/master/models/user.js on 1 September 2013
 * modified from https://github.com/jthurst3/unsolveddatabase/blob/master/models/user.js on 5 June 2015
*/


var mongoose = require("mongoose");
mongoose.set('debug', true);
// create a new User
var SessionSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
  	courses: {
  		type: [mongoose.Schema.Types.Course]
      },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    id: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Session', SessionSchema);