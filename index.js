





const express= require('express');
const mysql = require('mysql2');
const cors= require('cors');
require('dotenv').config();
const app= express();
app.use(cors());
const port= 3000;

const connection= mysql.createConnection({
                                                    // Remote DB credentials
  host: 'roundhouse.proxy.rlwy.net',
  user: 'root',
  password: 'Be6fDgBbg2eh21-e-5dCeAa33FfBg-C1',
  database: 'railway',
  port:25819
});
connection.connect((err) => {
  if(err){
    console.error('Error connecting', err);
    return;
  }
  console.log("Connected to server");
})
// current week  leaderboard
// API endpoint to display current week leaderboard (Top 200)
app.get('/score_card', (req, res) => {
  // Query database for top 200 leaderboard entries for current week
  const query = `
    SELECT *
    FROM score_card
    WHERE WEEK(Timestamp) = WEEK(NOW())
    ORDER BY Score DESC
    LIMIT 200;
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});


app.get('/last-week-leaderboard', (req, res) => {
  const country = req.query.country; // Get country from request query parameter

  // Query database for top 200 leaderboard entries for last week and given country
  const query = `
    SELECT UID, Name, Country, Timestamp, Score
    FROM score_card
    WHERE WEEK(Timestamp, 1) = WEEK(NOW(), 1) - 1
    AND YEAR(Timestamp) = YEAR(NOW())
    AND Country = ?
    ORDER BY Score DESC, Timestamp DESC
    LIMIT 200;
  `;

  connection.query(query, [country], (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});

app.get('/user-rank/:userId', (req, res) => {
  const userId = req.params.userId.toString();

  const query = `
    SELECT COUNT(*) + 1 AS UserRank
    FROM score_card
    WHERE Score > (
      SELECT Score
      FROM score_card
      WHERE UID = ?
    );
  `;

  // Execute SQL query
  connection.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    if (results.length === 0) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    const userRank = results[0].UserRank;
    res.json({ userId, rank: userRank });
  });
});

  
  
 app.listen(port, ()=>{
  console.log(`Server Listening at ${port}`);
});