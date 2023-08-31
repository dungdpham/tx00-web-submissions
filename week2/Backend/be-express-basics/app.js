const express = require('express');
const app = express();
const port = 3001;

// // Endpoint 1: Text Response
// app.get('/text', (req, res) => {
//   res.send('This is a simple text response.');
// });

// // Endpoint 2: JSON Response
// app.get('/json', (req, res) => {
//   const jsonData = {
//     message: 'This is an updated JSON response.',
//     timestamp: new Date()
//   };

//   res.json(jsonData);
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });


// BEGIN: Middleware Definition
const requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
  };
// END: Middleware Definition

// Adding the Middleware Globally
app.use(requestTime);

// Defining the '/stats' Route
app.get('/stats', (req, res) => {
    let responseText = 'Hello World!<br>';
    responseText += `<small>Requested at: ${Date(req.requestTime).toString()}</small>`;
    res.send(responseText);
});

// Start the Server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});