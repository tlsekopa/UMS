const sql = require('mysql');

const express = require('express')

const app = express();


    // mysql connection pool
    var pool = sql.createPool(
    {
        connectionLimit: 10,
        host: 'localhost',
        user: 'admin',
        password: 'Password@123',
        database: 'users'
    })

    // Handle get request

    app.get('/users/:id', (req, res)=>{
        const {id} = req.params;

        //getting username and password from database
        const query = `SELECT username, accesscode FROM users WHERE userid = ${id}`;
        pool.query(query,(error, results, fields)=>{
            if(error){
                console.log(error)
            res.status(500).send('internal Server Error');
        } else if (results.length === 0){
            res.status(404).send('User no found');
        }else {
            const {username, password} = results[0];
            res.send(`Username: ${username}, Password: ${password}`);
        }
        });
    });
    //Start server
    app.listen(3000, ()=>{
        console.log('Server started on port 3000')
    })
    