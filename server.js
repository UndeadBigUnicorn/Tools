//Configurated express app
const app = require("./middleware").app;
var path = require('path')

//Configurated mail service
const mailService = require("./helpers/mail");

const CONFIG = require("./config")
//Test our app
app.get('/', function(req, res) {  
    mailService.sendMail("kravchel16@gmail.com", "test", "Privet", "<h1>Qu</h1>",()=>{
       
    });
       
});

app.get('/tool', function(req, res) {  
    return res.sendFile(path.join(__dirname + '/views/tool.html'));
});

app.get('/login', function(req, res) {  
    return res.sendFile(path.join(__dirname + '/views/login.html'));
});

app.listen(CONFIG.PORT, ()=>{
    console.log(`Server is running on ${CONFIG.PORT} port`);
});
