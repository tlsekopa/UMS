var sql = require('mysql')

exports.deletePerson = function (username_value)
{
    var con =sql.createConnection({
        host: 'localhost',
        user: 'admin',
        password: 'Password@123',
        database: 'users'
    })

    con.connect(function(err){
        if (err) throw err
        //values = [{}]
        var sql = "DELETE FROM persons WHERE username = '" + username_value +"'"
        con.query(sql/*values*/)
        console.log(sql)
    })
}