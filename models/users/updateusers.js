var sql = require('mysql')

exports.updateUsers = function (){

    var con = sql.createConnection({
        host: 'localhost',
        user: 'admin',
        password: 'Password@123',
        database: 'users'
    })

    con.connect(function(err){
        if (err) throw err
        console.log("connected")
        var columns = {username_value: "", password_value:"", activity_value:"", avatar:"", role:""}
        var sql = "UPDATE users SET"
    })
}