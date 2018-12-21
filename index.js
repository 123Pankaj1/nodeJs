
var cors = require('cors')
var express=require("express");
var nodemailer = require("nodemailer");
var bodyParser=require('body-parser');
var app = express();
var busboy = require("then-busboy");
var fileUploadVar = require('express-fileupload');
var expressValidator = require('express-validator');
app.use(cors())
var http = require('http').Server(app);
app.use(express.static(__dirname));
var restfulApiController=require('./controllers/getrestfulapi-controller');
var postRestfulApiController=require('./controllers/postrestfulapi-controller');
var sendEmailApiController=require('./controllers/sendemailapi-controller');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(fileUploadVar());
/* route to handle login and registration */
app.get('/api/getrestfulapi',restfulApiController.getrestfulapi);
app.post('/api/postrestfulapi',postRestfulApiController.postrestfulapi);
app.post('/api/sendemailapi',sendEmailApiController.sendemailapi);

app.get('/',function(req,res){
     res.sendFile(__dirname+'/index.html');
});

/*var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "******",
        pass: "***"
    }
});*/

http.listen(5000, function(){
  console.log('listening on *:5000');
});