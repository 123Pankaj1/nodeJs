var connection = require('./../config');
var fs = require('fs');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: 'mtest0598@gmail.com',
        pass: 'pankaj@123'
    }
}));

module.exports.sendemailapi = function(req, res) {
    
    var mailOptions = {
        from: 'mtest0598@gmail.com',
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.message
    };

    console.log("mail",mailOptions)
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            res.json(error);
            console.log(error);
        } else {
            res.json(info);
            console.log('Email sent: ' + info.response);
        }
    });
}