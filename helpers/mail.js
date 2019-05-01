const nodeMailer = require('nodemailer');
const CONFIG = require("../config");

let transporter = nodeMailer.createTransport({
    host: CONFIG.MAIL_SERVER,
    port: CONFIG.MAIL_PORT,
    secure: false,
    auth: {
        user: CONFIG.MAIL_USER,
        pass: CONFIG.MAIL_PASSWORD
    }
    //authMethod: "TLS"
});


/*
* Send email
* @to - string, user's email adress
* @subject - string, email subject
* @text - string, email text
* @html - string, email html
*/
module.exports.sendMail = function(to, subject, text, html, callback){
    console.log(2);
    let mailOptions = {
        from: CONFIG.MAIL_SENDER, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
        html: html // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        //TODO: log this in db
        console.log('Message %s sent: %s', info.messageId, info.response);
        callback();
    });
}
