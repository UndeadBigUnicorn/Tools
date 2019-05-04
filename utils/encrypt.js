const crypto = require('crypto');


/**
 * SHA256
 * @param str - string to be encrypted
 * @returns {string}
 */
function SHA256(str) {
    const hash = crypto.createHash('sha256')
                   .update(str)
                   .digest('hex');
    return hash;
}

module.exports.SHA256 = SHA256;
