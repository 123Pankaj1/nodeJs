var connection = require('./../config');
var fs = require('fs');
module.exports.getrestfulapi=function(req,res){
	var data = {
        "Data":""
    };
   
    connection.query("SELECT * from user",function(err, rows, fields){
        //console.log(rows)
		if(rows.length != 0){
            data["Data"] = rows;
            res.send(data);
        }else{
            data["Data"] = 'No data Found..';
            res.send(data);
        }
    });
}