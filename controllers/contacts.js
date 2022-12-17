var express = require('express');

var app = express();

const bodyParser = require('body-parser');

var sql = require("../models/contacts/insertcontacts");

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/contact', function(req, res){

    req.accepts('json','html','text')

    res.json()

});

app.post('/contact', function (req, res){

    req.accepts('json','html','text','params')

    resp = {  
        cellphone:req.body.cellphone,
        email:req.body.email,
        facebook:req.body.facebook,
        linkedin:req.body.linkedin,
        twitter:req.body.twitter,
        tiktok:req.body.tiktok
    }; 

    console.log(resp);  
    sql.insertingContacts(resp.cellphone, resp.email, resp.facebook, resp.linkedin, resp.twitter, resp.tiktok)
    res.end(JSON.stringify(resp)); 
    

});


// inserting user records
const port = 3001 // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));
    



