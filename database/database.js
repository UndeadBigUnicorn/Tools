const CONFIG = require('../config/db-config');
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(CONFIG.mongoUrl, CONFIG.connectionOptions);

const ENCODER = require('../utils/encoder');

function addUser(username, password) {
    client.connect((err) => {
        if (err)
            throw err;
        console.log("Connected to the database");

        const users = client
            .db(CONFIG.databaseName)
            .collection('users');

        ENCODER.encrypt(password).then(hash => {
            const user = {
                username: username,
                password: hash
            };
            users
                .insertOne(user)
                .then(() => {
                    console.log('User ' + JSON.stringify(user) + ' has been inserted');
                    client.close();
                });
        });
    });
}

function exists(username, password) {
    return new Promise((resolve) => {
        client.connect((err) => {
            if (err)
                throw err;
            console.log("Connected to the database");

            const users = client
                .db(CONFIG.databaseName)
                .collection('users');

            users.findOne({
                username: username
            }).then(user => {
                if (user !== null) {
                    ENCODER.compare(password, user.password).then(equals => {
                        resolve(equals)
                    });
                } else {
                    resolve(false);
                }
                client.close();
            });
        });
    });
}

module.exports.addUser = addUser;
module.exports.exists = exists;