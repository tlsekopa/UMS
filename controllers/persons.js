var express = require('express');

var app = express();

const bodyParser = require('body-parser');

var sql = require("../models/persons/insertpersons");


app.use(bodyParser.urlencoded({ extended: false }));

app.get('/person', function(req, res){

    req.accepts('json','html','text')

    res.json()

});

app.post('/person', function (req, res){

    req.accepts('json','html','text','params')

    resp = {  
        age:req.body.age,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        gender:req.body.gender,
    }; 

    console.log(resp);  
     
    sql.insertingPersons(resp.age, resp.firstname, resp.lastname, resp.gender)
    res.end(JSON.stringify(resp)); 
    

});


// inserting user records
const port = 3001 // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));
    



