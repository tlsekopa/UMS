const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
//const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());

// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'user_management'
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL', err);
        return;
    }
    console.log('Connected to MySQL 0656655727');
});

// Register endpoint
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
  // Check if email already exists
  connection.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
    if (error) {
        console.error('Error querying MySQL', error);
        return res.status(500).send('Internal server error.');
    }

    if (results.length > 0) {
        return res.status(400).send('User already registered.');
    }

    // Create new user
    //const salt = await bcrypt.genSalt(10);
    //const hashedPassword = await bcrypt.hash(password, salt);

    connection.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword], (error, results) => {
        if (error) {
            console.error('Error querying MySQL', error);
            return res.status(500).send('Internal server error.');
        }

      // Generate token
       // const token = jwt.sign({ id: results.insertId }, 'jwtPrivateKey');

       // res.header('x-auth-token', token).send({ name, email });
    });
});
});

// Login endpoint
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    connection.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
    if (error) {
        console.error('Error querying MySQL', error);
        return res.status(500).send('Internal server error.');
    }

    if (results.length == 0) {
        return res.status(400).send('Invalid email or password.');
    }

    const user = results[0];
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
        return res.status(400).send('Invalid email or password.');
    }
    // Generate token
    const token = jwt.sign({ id: user.id }, 'jwtPrivateKey');
        res.header('x-auth-token', token).send({ name: user.name, email: user.email });
    });
});

/* Protected endpoint
app.get('/profile', async (req, res) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Access denied. No token provided.');
    try {
        const decoded = jwt.verify(token, 'jwtPrivateKey');
        connection.query('SELECT id, name, email FROM users WHERE id = ?', [decoded.id], (error, results) => {
        if (error) {
            console.error('Error querying MySQL', error);
            return res.status(500).send('Internal server error.');
        }
            if (results.length == 0) 
            {
                return res.status(400).send('Okay');
            }
        })
    } 
    catch
    {
        console.log(error)
    }
});*/
// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
