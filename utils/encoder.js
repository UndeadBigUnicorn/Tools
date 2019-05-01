const bcrypt = require('bcrypt');
const saltRounds = 10;

/**
 * Encrypts the password
 * @param password - plain text password to be encrypted
 * @returns {Promise<any>}
 */
function encrypt(password) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, function (err, hash) {
            if (err)
                reject(err);
            resolve(hash)
        });
    })
}

/**
 * Compare entered password with it's hash from database
 * @param password - plain text password that requires validation
 * @param hash - hashed password from database
 * @returns {Promise<any>}
 */
function compare(password, hash) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, function(err, res) {
            if (err)
                reject(err);
            resolve(res === true)
        });
    })
}

module.exports.encrypt = encrypt;
module.exports.compare = compare;
