//Configurated express app
const app = require("./middleware").app;

const CONFIG = require("./config")
//Test our app
app.get('/', function(req, res) {  

    return res.send("Hello world");
       
});

app.listen(CONFIG.PORT, ()=>{
    console.log(`Server is running on ${CONFIG.PORT} port`);
});
