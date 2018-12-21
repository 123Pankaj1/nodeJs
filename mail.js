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

var mailOptions = {
    from: 'mtest0598@gmail.com',
    to: 'khumaramkhileri@gmail.com',
    subject: 'using node js',
    text: 'hello khuma'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});