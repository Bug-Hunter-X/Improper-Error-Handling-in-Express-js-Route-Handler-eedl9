const express = require('express');
const app = express();
const db = require('./db'); // Assuming a database module

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.getUser(userId, (err, user) => {
    if (err) {
      console.error('Error fetching user:', err); // Log the error for debugging
      res.status(500).json({ error: 'Failed to fetch user' }); // More informative error response
      return; // Important to stop further execution
    }
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.json(user);
  });
});
