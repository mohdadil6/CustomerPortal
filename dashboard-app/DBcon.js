// Import required modules
const express = require('express');
const mysql = require('mysql2');
const cors= require('cors');
// Create an Express application
const app = express();

// Database connection configuration
const db = mysql.createConnection({
  host: 'localhost',       // Change to your MySQL server host
  user: 'root',   // Change to your MySQL username
  password: 'root', // Change to your MySQL password
  database: 'dash', // Change to your MySQL database name
  waitForConnections: true,
  connectionLimit: 10, // Adjust the connection limit as needed
  queueLimit: 0,
});

app.use(express.json());
app.use(cors());

app.post('/post-query', (req, res) => {
  const { queryText } = req.body;
  const query = 'INSERT INTO queries (text) VALUES (?)';

// Establish the database connection
db.query(query, [queryText], (err, results) => {
    if (err) {
        console.error('Query insertion error:', err);
        return res.status(500).json({ error: 'Failed to post query' });
      }
  
      res.status(201).json({ message: 'Query posted successfully' });
    });
  });
  app.get('/get-queries', (req, res) => {
    const query = 'SELECT text FROM queries';
  
    db.query(query, (err, results) => {
      if (err) {
        console.error('Query retrieval error:', err);
        return res.status(500).json({ error: 'Failed to retrieve queries' });
      }
  
      const queries = results.map((row) => row.text);
      res.json(queries);
    });
  });

// Start your Express server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
