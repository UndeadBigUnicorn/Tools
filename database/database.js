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
            .collection(CONFIG.users);

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
                .collection(CONFIG.users);

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

function addAdjective(adj) {
    client.connect((err) => {
        if (err)
            throw err;
        console.log("Connected to the database");

        const adjectives = client
            .db(CONFIG.databaseName)
            .collection(CONFIG.adjectives);

        adjectives
            .insertOne({
                adj: adj
            })
            .then(() => {
                console.log('Adjective ' + adj + ' has been inserted');
                client.close();
            });
    });
}

function addAnimal(am) {
    client.connect((err) => {
        if (err)
            throw err;
        console.log("Connected to the database");

        const animals = client
            .db(CONFIG.databaseName)
            .collection(CONFIG.animals);

        animals
            .insertOne({
                name: am
            })
            .then(() => {
                console.log('Animal ' + am + ' has been inserted');
                client.close();
            });
    });
}

function selectRandomAdjective() {
    return new Promise((resolve, reject) => {
        client.connect((err) => {
            if (err)
                throw err;
            console.log("Connected to the database");

            const adjectives = client
                .db(CONFIG.databaseName)
                .collection(CONFIG.adjectives);

            adjectives
                .aggregate([{$sample: {size: 1}}]).toArray(function (err, res) {
                if (err)
                    reject(err);
                resolve(res);
                client.close();
            })
        });
    });
}

function selectRandomAnimal() {
    return new Promise((resolve, reject) => {
        client.connect((err) => {
            if (err)
                throw err;
            console.log("Connected to the database");

            const animals = client
                .db(CONFIG.databaseName)
                .collection(CONFIG.animals);

            animals.aggregate([{$sample: {size: 1}}]).toArray(function (err, res) {
                if (err)
                    reject(err);
                resolve(res);
                client.close();
            });
        });
    });
}

module.exports = {
    addUser,
    exists,
    addAdjective,
    addAnimal,
    selectRandomAdjective,
    selectRandomAnimal
};