const DB_CONFIG = {};

DB_CONFIG.username = encodeURIComponent('root');
DB_CONFIG.password = encodeURIComponent('root');
DB_CONFIG.authMechanism = 'DEFAULT';
DB_CONFIG.databaseName = 'web-tools';
DB_CONFIG.mongoUrl = `mongodb://${DB_CONFIG.username}:${DB_CONFIG.password}@localhost:27017/?authMechanism=${DB_CONFIG.authMechanism}`;
DB_CONFIG.connectionOptions = {useNewUrlParser: true};

module.exports = DB_CONFIG;
