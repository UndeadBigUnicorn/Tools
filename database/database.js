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
                password: hash,
                UUID: null
            };
            users
                .insertOne(user)
                .then(() => {
                    console.log('User ' + JSON.stringify(user) + ' has been inserted');
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
                resolve(res[0].adj);
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
                resolve(res[0].name);
            });
        });
    });
}

function addUUIDToUser(username, UUID) {
    client.connect((err) => {
        if (err)
            throw err;
        console.log("Connected to the database");

        const users = client
            .db(CONFIG.databaseName)
            .collection(CONFIG.users);

        users.updateOne({username: username}, {$set : {"UUID":UUID}})
    });
}

function selectUserByUUID(uuid) {
    return new Promise((resolve, reject) => {
        client.connect((err) => {
            if (err)
                throw err;
            console.log("Connected to the database");

            const users = client
                .db(CONFIG.databaseName)
                .collection(CONFIG.users);

            users.findOne({
                UUID: uuid
            }).then(user => {
                resolve(user);
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
    selectRandomAnimal,
    selectUserByUUID,
    addUUIDToUser
};