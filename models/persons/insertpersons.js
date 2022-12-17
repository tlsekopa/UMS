var sql = require ('mysql')

exports.insertingPersons = function ( age_value, firstname_value, lastname_value, gender_value){
var con = sql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'Password@123',
    database: 'users'
})

con.connect(function(err){

    if (err) throw err

    console.log("connected")

    var sql = "INSERT INTO persons (age, firstname, lastname, gender) VALUES ('"+age_value +"','"+ firstname_value +"','"+ lastname_value +"','"+ gender_value + "')"

    if (err) throw err;
    con.query(sql, function(err, results, fields){
        console.log(err);
        console.log(fields)
        console.log(results)
    })
    
    console.log("added")
   })
}

