const express = require('express');
const app = express();
const port = 3001;
const postsRouter = require('./api/posts/posts-router')

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

app.use('/api/posts', postsRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({message: err.message})
})
