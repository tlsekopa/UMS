var sql = require ('mysql')

exports.insertingContacts = function ( cellphone_value, email_value, linkedin_value, facebook_value, twitter_value, tiktok_value){
var con = sql.createConnection({
    host: 'localhost',
    user: 'admin',
    password: 'Password@123',
    database: 'users'
})

con.connect(function(err){

    if (err) throw err

    console.log("connected")

    var sql = "INSERT INTO contacts (cellphone, email, linkedin, facebook, twitter, tiktok) VALUES ('"+ cellphone_value +"','"+ email_value +"','"+ linkedin_value +"','" +facebook_value +"','"+ twitter_value +"','"+ tiktok_value+ "')"

    if (err) throw err;
    con.query(sql, function(err, results, fields){
        console.log(err);
        console.log(fields)
        console.log(results)
    })
    
    console.log("added")
   })
}

