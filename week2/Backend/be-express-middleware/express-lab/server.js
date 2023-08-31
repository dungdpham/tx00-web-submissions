// server.js

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.get('/endpoint1', (req, res) => {
    //res.send('This is the first endpoint.');
    throw new Error('Intentional server error');
});

app.get('/endpoint2', (req, res) => {
    res.send('This is the second endpoint.');
});

app.use((req, res, next) => {
    res.status(404).send("Sorry, the requested page couldn't be found.");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(`Something went wrong on the server. Detail: ${err.message}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});