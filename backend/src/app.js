require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const feedbackRoutes = require('./routes/feedbackRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Lebih detail CORS config
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));
app.use(express.json());
app.use(morgan('dev'));

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is connected!' });
});

app.use('/api/feedback', feedbackRoutes);
app.use(errorHandler);

module.exports = app;