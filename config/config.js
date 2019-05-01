const CONFIG = {};

//MongoDB connection URL
CONFIG.CONNECTION_URL = process.env.MONGODB_URI || "mongodb://localhost:27017/tools";

//Port, where our app will be running
CONFIG.PORT = process.env.PORT || 3000;

//Mail config
CONFIG.MAIL_SERVER = "smtp.postmarkapp.com";
CONFIG.MAIL_PORT = 2525;
CONFIG.MAIL_USER = "e5cc1b06-a10f-4042-94ac-d4737ad02d05";
CONFIG.MAIL_PASSWORD = "e5cc1b06-a10f-4042-94ac-d4737ad02d05";
//CONFIG.MAIL_SENDER = "support@webtools";
CONFIG.MAIL_SENDER = "danil@xquestions.org";

//Export our config
module.exports = CONFIG;
