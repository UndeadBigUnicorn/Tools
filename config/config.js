const CONFIG = {};

//MongoDB connection URL
CONFIG.CONNECTION_URL = process.env.MONGODB_URI || "mongodb://localhost:27017/tools";

//Port, where our app will be running
CONFIG.PORT = process.env.PORT || 3000;

//Mail config


//Export our config
module.exports = CONFIG;
