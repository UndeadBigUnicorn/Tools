const mongoose = require("mongoose");
const config = require("../config.js");

//Connect mongo
mongoose.connect(config.CONNECTION_URL, {
    useNewUrlParser: true
    }, (err) => {
        if (err) return console.log(err);
});

module.exports.mongoose = mongoose;