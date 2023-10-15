const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Workout API',
      version: '1.0.0',
      description: 'API for managing workouts',
    },
    servers: [
      {
        url: 'http://localhost:4000/api', // Update with your API server URL
      },
    ],
  },
  apis: ['routes/workouts.js', 'routes/user.js'],
};

const specs = swaggerJsdoc(options);
module.exports = specs;
