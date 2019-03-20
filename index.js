var http = require('http');
var
    // file system
    fs = require('fs'),
    // csv parser to read in conditions
    csvparse = require('csv-parse'),
    // passport.js for authentication (http://passportjs.org/)
    passport = require('passport'),
    // useful node.js utility functions
    util = require('util'),
    // express.js for our web framework (http://expressjs.com/)
    express = require('express'),
    // reload module, allows us to change this file and not have to restart node from the command line (useful for debugging)
    reload   = require('reload'),
    // facebook module (defined by us in facebook.js) for authenticating via Facebook
    // mongooseDB module (defined by us in mongooseDB.js) for connecting to our database
    mongooseDB = require('./models/mongooseDB'),
    // express-session middleware for keeping a persistent connection to our MongoDB database
    session = require('express-session'),
    // MongoStore middleware to store our MongoDB connection
    MongoStore = require('connect-mongo')(session),
    // User schema (defined by us in user.js) for our database
    User = require('./models/user'),
    // Temporary user schema
    // To store socket.io information.
    // redis = require('redis'),
    // redisAdapter = require('socket.io-redis'),
    // bodyParser middleware for helping to store cookies in the browser (to establish persistent user sessions)
    bodyParser = require('body-parser'),
    // Question schema
    Question = require('./models/question'),
    NewQuestion = require("./models/newQuestion"),
    NewQuestion_m = require("./models/newQuestion_mysql")
    EditQuestion = require('./models/editQuestion'),
    //Vote Schema
    NewVote = require('./models/newVote'),
    Vote = require('./models/vote'),
    // Reaction Schema
    NewReaction = require('./models/reactionMethods'),
    Reaction = require('./models/reaction'),
    // Response schemas
    Response = require('./models/response'),
    NewResponse = require("./models/newResponse"),
    UpdateResponse = require('./models/updateResponse'),
    // class for creating tiny URLs
    TinyURL = require('./models/tinyURL'),
    // Presentation schema
    Presentation = require('./models/presentation'),
    NewPresentation = require('./models/newPresentation'),
    EditPresentation = require('./models/editPresentation'),
    // Module to expand certain database schemas
    // Expand = require('./models/expand'),
    // socket.io, allowing us to push content to browsers easily
    io = require("socket.io")(http),
    // pug, our templating engine
    pug = require('pug'),
    // moment.js, the date/time parsing library
    moment = require('moment'),
    // async library, allowing us to clean up some "callback hell"
    async = require('async'),
    // ADD OTHER NECESSARY MODULES HERE
    uaparser = require('ua-parser-js');
    ;
    var app = express();

    // templated views will be in the /views folder
app.set('views', __dirname + '/views');
// we will use Jade for templating
app.set('view engine', 'pug');
// from http://stackoverflow.com/questions/13765315/opening-html-file-using-express-js
app.set("view options", {layout: false});
// from http://jaspreetchahal.org/expressjs-exposing-variables-and-session-to-jade-templates/ (for testing whether we can pass app.locals stuff into Jade templates)
app.locals.config = {
    'message': "Hello there"
};
// be able to keep a persistent connection to the MongoDB database specified in the environment variable MONGOLAB_URI
//console.log(process.env);
app.use(session({
    store: new MongoStore({
        url: process.env.MONGOLAB_URI
    }),
    secret:'secretkey',
    resave: true,
    saveUninitialized: true
}));