//Connect required modules
const express = require('express');
const app = express();
const jsonParser = express.json();
const path = require("path");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//Use parsers
app.use(jsonParser());
app.use(cookieParser());

//Setup CORS Policy
app.use(cors());

//Setup session
const session = require('express-session');
app.use(session({
      resave: false,
      saveUninitialized: true,
      secret: ';l#&ldsa$',
      cookie: true
}));

//Make this dirs static to allow Node use them without mapping
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'assets')));