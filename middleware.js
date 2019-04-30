//Connect required modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//Use parsers
app.use(bodyParser());
app.use(cookieParser());

//Setup CORS Policy
app.use(cors());

//Setup session
var session = require("express-session");
app.use(session({
      resave: false,
      httpOnly: true,
      saveUninitialized: true,
      secret: ';l#&ldsa$',
      cookie: {
          maxAge: 600,
          secure: true
      }
}));

//Make this dirs static to allow Node use them without mapping
app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "assets")));

//Export our configurated app
module.exports.app = app;