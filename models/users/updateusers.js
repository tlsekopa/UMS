var sql = require('mysql')

exports.updateUsers = function (username_value, accesscode_value, activity_value, avatar_value, actrole_value){

    var con = sql.createConnection({
        host: 'localhost',
        user: 'admin',
        password: 'Password@123',
        database: 'users'
    })

    con.connect(function(err){
        if (err) throw err
        console.log("connected")
        //var columns = {username_value: "", password_value:"", activity_value:"", avatar:"", role:""}
        var sql = "UPDATE users SET accesscode ='"+accesscode_value+"',activity ='"+activity_value+"', avatar ='"+avatar_value+"role="+actrole_value+", WHERE username ='"+username_value+"'"
        con.query(sql)
    })
}