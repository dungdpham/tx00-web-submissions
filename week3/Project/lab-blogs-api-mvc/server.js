const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const postsRouter = require('./routers/posts-router');
app.use(postsRouter);

const commentsRouter = require('./routers/comments-router');
app.use(commentsRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});