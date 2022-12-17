var sql = require('mysql');


exports.readUsers = function(req, res)
{
      
        var con = sql.createConnection({
        host: 'localhost',
        user: 'admin',
        password: 'Password@123',
        database: 'users'
    })
    // selecting all records
    con.connect(function(err){

                if(err) throw err

                console.log("connected")

                var sql = "SELECT * FROM users"

                con.query(sql, function(err, results){
                    if (err) throw err
                    console.log(results)
                    res.send(results)
                    })
            

                })
    // selecting unique records according to 
}