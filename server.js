//Configurated express app
const app = require("./middleware").app;
const path = require("path");

const ejs = require('ejs');
//Configurated mail service
const mailService = require("./utils/mail");

//Some usefull functions
const controllerHelper = require("./utils/controllerHelper");

const CONFIG = require("./config/config")

var tools = 

//Test our app
app.get('/', function(req, res) { 
    res.redirect('/home') 
});

app.get('/tool', function(req, res) {  
    return controllerHelper._404(req,res);
});


app.get('/tool/:toolCode', function(req, res) { 
    let tool = CONFIG.getTool(req.params.toolCode);
    if(!tool){
        return controllerHelper._404(req,res);
    } 
    return res.render('tools/' + tool.view, {tools:  CONFIG.tools});
});

app.get('/home', function(req, res) {
    return res.render('home', {tools:  CONFIG.tools});
});

app.get('/api', function(req, res) {  
    return res.render('api', {tools:  CONFIG.tools});
});

app.get('/login', function(req, res) {  
    return res.render('login', {tools:  CONFIG.tools});
});

app.get('/signup', function(req, res) {  
    return res.render('signup', {tools:  CONFIG.tools});
});

app.get('/404', function(req, res) {  
    return res.render('static/404', {tools:  CONFIG.tools});
});

app.listen(CONFIG.PORT, ()=>{
    console.log(`Server is running on ${CONFIG.PORT} port`);
});
