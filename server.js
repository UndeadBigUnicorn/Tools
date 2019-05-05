//Configurated express app
const app = require("./middleware").app;

//Some usefull functions
const controllerHelper = require("./utils/controllerHelper");
const encrypt = require("./utils/encrypt");
const facebookChecker = require("./utils/facebookChecker");
const emailChecker = require("./utils/emailChecker");
const digetsGenerator = require("./utils/digetsGenerator");
const nameGenerator = require("./utils/nameGenerator");

//Database
const database = require("./database/database");

const CONFIG = require("./config/config")

//Test our app
app.get('/', function (req, res) {
    return res.render('home', {
        tools: CONFIG.tools
    });
});

app.get('/tool', function (req, res) {
    return controllerHelper._404(req, res);
});


app.get('/tool/:toolCode', function (req, res) {
    let tool = CONFIG.getTool(req.params.toolCode);
    if (!tool) {
        return controllerHelper._404(req, res);
    }
    return res.render('tools/' + tool.view, {
        tools: CONFIG.tools
    });
});

app.get('/api', function (req, res) {
    return res.render('api', {
        tools: CONFIG.tools
    });
});

app.get('/api/sha256-encryptor', function (req, res) {
    let str = req.query.str;
    if (!str) {
        return res.status(400).send("Bad request, argument is required!");
    }
    return res.send(encrypt.SHA256(str));
});

app.get('/api/md5-encryptor', function (req, res) {
    let str = req.query.str;
    if (!str) {
        return res.status(400).send("Bad request, argument is required!");
    }
    return res.send(encrypt.MD5(str));
});

app.get('/api/facebook-checker', function (req, res) {
    let url = req.query.url;
    if (!url) {
        return res.status(400).send("Bad request, argument is required!");
    }
    facebookChecker.checkFacebook(url, bool => {
        return res.send(bool);
    });
});

app.get('/api/email-checker', function (req, res) {
    let email = req.query.email;
    if (!email) {
        return res.status(400).send("Bad request, argument is required!");
    }
    emailChecker.checkEmail(email, bool => {
        return res.send(bool);
    });
});

app.get('/api/avatar-generator', function (req, res) {
    let name = req.query.name;
    if (!name) {
        return res.status(400).send("Bad request, argument is required!");
    }
    return res.redirect(`http://avatar-generator-tool.herokuapp.com/${name}`);
});

app.get('/api/json-beautifier', function (req, res) {
    let json = req.query.json;
    if (!json) {
        return res.status(400).send("Bad request, argument is required!");
    }

    try {

        return res.send(JSON.stringify(JSON.parse(json), null, 4));

    } catch (err) {

        return res.status(400).send("Bad request, undefined JSON format!");

    }
});

app.get('/api/name-generator', async function (req, res) {
    return res.send(await nameGenerator.getName());
});

app.get('/api/digets-generator', function (req, res) {    
    return res.send(digetsGenerator.generateCode());
});

app.get('/login', function (req, res) {
    return res.render('login', {
        tools: CONFIG.tools
    });
});

app.post('/login', function (req, res) {
    if(!req.body){
        return res.status(400).send("Bad request, arguments are required!");
    }
    let email = req.body.email;
    let password = req.body.password;
    //TODO: connect to database
    let userFound = true;
    if(userFound){
        return res.status(400).send("User not found!");
    } 
    else{
        return res.status(200).send("Success!");
    }
})

app.get('/signup', function (req, res) {
    return res.render('signup', {
        tools: CONFIG.tools
    });
});

app.post('/signup', function (req, res) {
    if(!req.body){
        return res.status(400).send("Bad request, arguments are required!");
    }
    let email = req.body.email;
    let password = req.body.password;
    //TODO: connect to database
    let userExist = true;
    if(userExist){
        return res.status(400).send("User with this email already exist!");
    } 
    else{
        return res.status(200).send("Account created!");
    }
})

app.get('/404', function (req, res) {
    return res.render('static/404', {
        tools: CONFIG.tools
    });
});

app.listen(CONFIG.PORT, () => {
    console.log(`Server is running on ${CONFIG.PORT} port`);
});
