const emailCheck = require('email-check');

/**
 * 
 * @param {string} email - email adress to validate
 * @returns {boolean}
 */
function checkEmail(email, callback){
    emailCheck(email)
    .then(function (res) {
        return callback(res);
      // Returns "true" if the email address exists, "false" if it doesn't.
    })
    .catch(function (err) {
      if (err.message === 'refuse') {
        // The MX server is refusing requests from your IP address.
      } else {
        // Decide what to do with other errors.
      }
    });
}

module.exports.checkEmail = checkEmail;