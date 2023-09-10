const express = require('express');
const app = express();
const port = 3001;
const userRouter = require('./routes/users');

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

// Configure user routes
app.use('/api/users', userRouter);