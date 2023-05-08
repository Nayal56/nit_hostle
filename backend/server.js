// Import required libraries
const express = require('express');
const mysql = require('mysql2/promise');

// Create a new Express app
const app = express();

// Set up middleware to parse incoming request bodies as JSON
app.use(express.json());

// Define a route to handle incoming POST requests containing registration form data
app.post('/register', async (req, res) => {
  // Extract the registration form data from the request body
  const { firstName, lastName, email, password } = req.body;

  // Create a new MySQL connection pool
  const pool = await mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nit_hostle'
  });

  try {
    // Insert the registration form data into the MySQL database
    await pool.query(`
      INSERT INTO users (first_name, last_name, email, password)
      VALUES (?, ?, ?, ?)
    `, [firstName, lastName, email, password]);

    // Send a success response to the frontend
    res.status(200).json({ message: 'Registration successful' });
  } catch (err) {
    // Handle any errors that may occur during the insertion process
    console.error(err);
    res.status(500).json({ error: 'An error occurred during registration' });
  } finally {
    // End the MySQL connection pool
    pool.end();
  }
});

// Start the Express app listening on port 3000
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
