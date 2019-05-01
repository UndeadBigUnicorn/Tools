//Configurated express app
const app = require("./middleware").app;

//Configurated mail service
const mailService = require("./helpers/mail");

const CONFIG = require("./config")
//Test our app
app.get('/', function(req, res) {  
    mailService.sendMail("kravchel16@gmail.com", "test", "Privet", "<h1>Qu</h1>",()=>{
        return res.send("Hello world");
    });
       
});

app.listen(CONFIG.PORT, ()=>{
    console.log(`Server is running on ${CONFIG.PORT} port`);
});
