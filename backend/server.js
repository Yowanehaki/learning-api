const express = require('express');
const app = express();
const port = 3000;

// API routes
app.get('/api/test', (req, res) => {
  res.status(200).send('Test endpoint working');
});

app.get('/api', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the API',
    endpoints: ['/api/test']
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
