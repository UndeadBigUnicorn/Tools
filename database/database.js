const MongoClient = require('mongodb').MongoClient;

const username = encodeURIComponent('root');
const password = encodeURIComponent('root');
const authMechanism = 'DEFAULT';
const databaseName = 'web-tools';
const mongoUrl = `mongodb://${username}:${password}@localhost:27017/?authMechanism=${authMechanism}`;
const connectionOptions = {useNewUrlParser: true};

const client = new MongoClient(mongoUrl, connectionOptions);

const ENCODER = require('../utils/encoder');

function addUser(username, password) {
    client.connect((err) => {
        if (err)
            throw err;
        console.log("Connected to the database");

        const users = client
            .db(databaseName)
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
                .db(databaseName)
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