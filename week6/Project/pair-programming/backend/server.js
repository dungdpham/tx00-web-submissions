const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const {
  reqLogger,
  unknownEndpoint,
  errorHandler,
} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(reqLogger);

app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Serve frontend
app.get('/', (req, res) => res.send('Please set to production'));

app.use(unknownEndpoint);

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
