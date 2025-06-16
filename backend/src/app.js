require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
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

// Add Swagger documentation middleware
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Basic routes
app.get('/api', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the API',
    endpoints: ['/api/test', '/api/feedback']
  });
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Gacor, Backend ready gan ingfokan!!!' });
});

app.use('/api/feedback', feedbackRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

app.use(errorHandler);

module.exports = app;