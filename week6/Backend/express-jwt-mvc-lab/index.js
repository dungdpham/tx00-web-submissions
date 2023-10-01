// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Import routes
const authRoutes = require('./routes/authRoutes');

app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
