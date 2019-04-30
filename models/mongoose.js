const mongoose = require("mongoose");
const config = require("../config.js");

//Connect mongo
mongoose.connect(config.CONNECTION_URL, {
    useNewUrlParser: true
    }, (err) => {
        if (err) return console.log(err);
});

//Export our mongoose
module.exports.mongoose = mongoose;