var sql = require ('mysql')

exports.insertingUsers = function ( username_value, accesscode_value, activity_value, avatar_value, actrole_value){
var con = sql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'Password@123',
    database: 'users'
})

con.connect(function(err){

    if (err) throw err

    console.log("connected")

    var sql = "INSERT INTO users (username, accesscode, activity, avatar, actrole) VALUES ('"+username_value +"','"+ accesscode_value +"','"+ activity_value +"','"+ avatar_value +"','"+ actrole_value + "')"
    if (err) throw err;
    con.query(sql, function(err, results, fields){
        console.log(err);
        console.log(fields)
        console.log(results)
    })
    
    console.log("added")
   })
}
