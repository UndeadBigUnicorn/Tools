//Connect required modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//Use parsers
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());
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

//Healthcheck
const health = require("./utils/health").health;
const healthcheck = require("./utils/health").healthcheck;
app.use('/health', health.LivenessEndpoint(healthcheck))

//ejs
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

//Make this dirs static to allow Node use them without mapping
app.use(express.static(path.join(__dirname, "/views")));
app.use('*/less',express.static(path.join(__dirname,'assets/less')));
app.use('*/js',express.static(path.join(__dirname,'assets/js')));
app.use('*/img',express.static(path.join(__dirname,'assets/img')));

//Auth middleware
app.use((req, res, next)=>{
    let UUID = req.session.UUID ? req.session.UUID : "";
    //TODO: get current user from database by session token and test it
    let currentUser = "";
    
    if(!currentUser){
        req.user = null;
    }
    else {
        req.user = currentUser;
    }
    next();
});


//Export our configurated app
module.exports.app = app;