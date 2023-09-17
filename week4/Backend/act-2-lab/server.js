require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const connectDB = require('./config/db');
connectDB();

app.use(express.json());

const userRoutes = require('./routes/user-router');
app.use('/api/users', userRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({error: `Internal server error: ${err.message}`});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});