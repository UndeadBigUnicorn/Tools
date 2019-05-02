//Configurated express app
const app = require("./middleware").app;
var path = require('path')

//Configurated mail service
const mailService = require("./utils/mail");

const CONFIG = require("./config/config")
//Test our app
app.get('/', function(req, res) {  
});

app.get('/tool', function(req, res) {  
    return res.render('tool');
});

app.get('/login', function(req, res) {  
    return res.render('login');
});

app.get('/signup', function(req, res) {  
    return res.render('signup');
});

app.listen(CONFIG.PORT, ()=>{
    console.log(`Server is running on ${CONFIG.PORT} port`);
});
