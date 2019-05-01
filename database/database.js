const MongoClient = require('mongodb').MongoClient;
const username = encodeURIComponent('root');
const password = encodeURIComponent('root');
const authMechanism = 'DEFAULT';
const databaseName = 'web-tools';

const mongoUrl = `mongodb://${username}:${password}@localhost:27017/?authMechanism=${authMechanism}`;
const connectionOptions = {useNewUrlParser: true};

const client = new MongoClient(mongoUrl, connectionOptions);

function addUser(username, password) {
    client.connect((err) => {
        if (err)        // todo - consider removing
            throw err;
        console.log("Connected to the database");

        const users = client
            .db(databaseName)
            .collection('users');
        const user = {
            username: username,
            password: password
        };

        users
            .insertOne(user)
            .then(() => console.log('User ' + JSON.stringify(user) + ' has been inserted'));

        client.close();
    });
}

function exists(username, password) {
    return new Promise((resolve) => {
        client.connect((err) => {
            if (err)        // todo - consider removing
                throw err;
            console.log("Connected to the database");

            const users = client
                .db(databaseName)
                .collection('users');

            users.findOne({
                username: username,
                password: password
            }).then((exists) => {
                resolve(exists !== null);
                client.close();
            });
        });
    });
}


function test() {
    let l = exists("tet", "kek").then(res => console.log(res));
    console.log()
}

test();