//Configurated express app
const app = require("./middleware").app;
const path = require("path");
//Configurated mail service
const mailService = require("./utils/mail");

//Some usefull functions
const controllerHelper = require("./utils/controllerHelper");

const CONFIG = require("./config/config")
//Test our app
app.get('/', function(req, res) {  
});

app.get('/tool', function(req, res) {  
    return controllerHelper._404(req,res);
});


app.get('/tool/:toolCode', function(req, res) { 
    let tool = CONFIG.getTool(req.params.toolCode);
    if(!tool){
        return controllerHelper._404(req,res);
    } 
    return res.render(`${tool.view}`);
});

app.get('/login', function(req, res) {  
    return res.render('login');
});

app.get('/signup', function(req, res) {  
    return res.render('signup');
});

app.get('/404', function(req, res) {  
    return res.render('static/404');
});

app.listen(CONFIG.PORT, ()=>{
    console.log(`Server is running on ${CONFIG.PORT} port`);
});
