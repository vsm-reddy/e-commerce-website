const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pandu',
    database: 'ourwebsite'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});

// Register endpoint
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    // Check if user already exists
    const checkUserQuery = 'SELECT * FROM users WHERE email = ?';
    db.query(checkUserQuery, [email], (err, results) => {
        if (err) {
            console.error('Error checking user:', err);
            return res.status(500).send({ message: 'Server error' });
        }

        if (results.length > 0) {
            return res.status(409).send({ message: 'User already exists' });
        }

        // Hash the password
        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) {
                console.error('Error hashing password:', err);
                return res.status(500).send({ message: 'Server error' });
            }

            // Insert user into the database
            const insertUserQuery = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
            db.query(insertUserQuery, [username, email, hashedPassword], (err, result) => {
                if (err) {
                    console.error('Error inserting user:', err);
                    return res.status(500).send({ message: 'Server error' });
                }
                res.send({ message: 'Registration successful' });
            });
        });
    });
});
