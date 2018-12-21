var connection = require('./../config');
module.exports.postrestfulapi = function(req, res) {
    var users = req.body;
    // console.log(users);

    var data = {
        "Data": ""
    };

    var name = users.name;
    var age = users.age;
    var mobile_no = users.mobile_no;
    var fileId = users.image;

    //console.log(users);

    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('age', 'Age is required').notEmpty();
    req.checkBody('mobile_no', 'mobile_no is required').notEmpty();
    //  req.checkBody('fileId', 'file is required').notEmpty();

    var errors = req.validationErrors();
    console.log("errors", errors);
    if (errors) {
        data["err_data"] = errors;
        res.json(data);
    }else {
      connection.query("INSERT into user SET ?", users, function(err, rows, fields) {
        console.log(rows)
        // console.log(errors);
        if (errors) {
            data["err_data"] = errors;
            res.json(data);
        } else {
            if (err) {
                //console.log(err.sqlMessage)
                data["err_msg"] = err;
                res.json(data);
            }
            if (rows.length != 0) {
                data["Data"] = "Data Insert Successfully..";
                res.json(data);
            } else {
                data["Data"] = "Server Error.";
                res.json(data);
            }
        }


    });
    }
    
    
    
}
