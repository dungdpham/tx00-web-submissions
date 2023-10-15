const express = require('express');
const app = express();
const { ROLE, users } = require('./data');
const { authUser, authRole } = require('./auth/basicAuth');
const projectRouter = require('./routes/projectsRouter.js');

app.use(express.json());
app.use(setUser);

// Define routes using Express Router
// http://localhost:3000/projects
app.use('/projects', projectRouter);

// http://localhost:3000
app.get('/', (req, res) => {
  res.send('Home Page');
});

// http://localhost:3000/dashboard
app.get('/dashboard', authUser, (req, res) => {
  res.send('Dashboard Page');
});

// http://localhost:3000/admin
app.get('/admin', authUser, authRole(ROLE.ADMIN), (req, res) => {
  res.send('Admin Page');
});

// Middleware to set the user based on the request body
function setUser(req, res, next) {
  const userId = req.body.userId;
  if (userId) {
    req.user = users.find((user) => user.id === userId);
  }
  next();
}

const port = 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
