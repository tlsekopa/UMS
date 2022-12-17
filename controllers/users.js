var express = require('express');

var app = express();

const bodyParser = require('body-parser');

var sqlInsert = require("../models/users/insertusers");

var sqlRead = require("../models/users/readusers")

var sqlDelete = require("../models/users/deleteusers")

var sqlUpadate = require("../models/users/updateusers")


app.use(bodyParser.urlencoded({ extended: false }));

app.put('/user', function(req, res){

    req.accepts('json', 'html', 'text')

    resp = {  
        username:req.body.username,
        password:req.body.accesscode,
        activity:req.body.activity,
        avatar:req.body.avatar,
        role:req.body.actrole
    }; 

    sqlUpadate.updateUsers()
})

app.delete('/user', function(req, res){

    req.accepts('json','html','text')

    resp = {  
        username:req.body.username,
        password:req.body.accesscode,
        activity:req.body.activity,
        avatar:req.body.avatar,
        role:req.body.actrole
    }; 

    sqlDelete.deleteUsers(resp.username)
})

app.get('/user', function(req, res){

    req.accepts('json','html','text')

    resp = {  
        username:req.body.username,
        password:req.body.accesscode,
        activity:req.body.activity,
        avatar:req.body.avatar,
        role:req.body.actrole
    }; 


    var i = sqlRead.readUsers()
    console.log(i)

    res.end(JSON.stringify(i));  

});

app.post('/user', function (req, res){

    req.accepts('json','html','text','params')

    resp = {  
        username:req.body.username,
        password:req.body.accesscode,
        activity:req.body.activity,
        avatar:req.body.avatar,
        role:req.body.actrole
    }; 

    console.log(resp);  
     
    sqlInsert.insertingUsers(resp.username, resp.password, resp.activity, resp.avatar, resp.role)
    res.end(JSON.stringify(resp)); 
    

});


// inserting user records
const port = 3001 // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));
    



