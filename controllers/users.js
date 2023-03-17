const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const mysql = require('mysql');

const sqlInsert = require("../models/users/insertusers");

const sqlRead = require("../models/users/readusers");

const sqlDelete = require("../models/users/deleteusers");

const sqlUpadate = require("../models/users/updateusers");


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

    sqlUpadate.updateUsers(resp.username, resp.password, resp.activity, resp.avatar, resp.role)
    res.status(200).json("awe my bro")
})

app.delete('/user', function(req, res){
    req.accepts('json','html','text','params')
    console.log(req.body.username)
    resp  = {username : req.body.username}
    sqlDelete.deleteUsers(resp.username)
    //res.end(JSON.stringify(resp)); 
    res.send(JSON.stringify.stringify(resp))
})

app.get('/user/:id', (req, res) => {
    //
   try{ 
    req.accepts('json', 'html', 'text', 'params')
    const {id} = req.params;
   
    console.log(req.params.username)
    sqlRead.readUsers(id)
    res.send(JSON.stringify(resp));
    }catch{
        console.log(err)
    }
});

app.post('/user', function(req, res) {
   
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



