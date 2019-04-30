const mongoose = require("mongoose");
const CONFIG = require("../config");

//Connect mongo
mongoose.connect(CONFIG.CONNECTION_URL, {
    useNewUrlParser: true
    }, (err) => {
        if (err) return console.log(err);
});

//Export our configurated mongoose
module.exports.mongoose = mongoose;