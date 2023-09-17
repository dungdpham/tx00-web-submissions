const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const connectDB = require('./config/db');
connectDB();

app.use(express.json());

const blogRoutes = require('./routes/blog-router');
app.use('/api/blogs', blogRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({error: `Internal server error: ${err.message}`});
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});