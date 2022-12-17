var sql = require ('mysql')

//function insertingContacts(){
var con = sql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'Password@123',
    database: 'users'
})

con.connect(function(err){

    if (err) throw err

    console.log("connected")

    var sql = "SELECT * FROM users.contacts;"

    if (err) throw err;
    con.query(sql, function(err, results, fields){
        console.log(err);
        console.log(fields)
        console.log(results)
    })
    
    console.log("added")
   })
//}
//export default insertingContacts
