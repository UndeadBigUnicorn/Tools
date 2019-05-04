//Configurated express app
const app = require("./middleware").app;
const path = require("path");

//Some usefull functions
const controllerHelper = require("./utils/controllerHelper");
const encrypt = require("./utils/encrypt");

const CONFIG = require("./config/config")

//Test our app
app.get('/', function(req, res) { 
    res.redirect('/home'); 
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

app.get('/api/sha256', function(req,res){
    let str = req.query.str;
    if(!str){
        return res.status(400).send("Bad request, argument is required!");
    }
    return res.send(encrypt.SHA256(str)); 
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
