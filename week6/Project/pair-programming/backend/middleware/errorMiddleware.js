const reqLogger = (req, res, next) => {
  console.log('Method', req.method);
  console.log('Path', req.path);
  console.log('Body', req.body);
  console.log('-----');
  next();
};

const unknownEndpoint = (req, res) => {
  res.status(404).json({ error: 'Unknown endpoint' });
};

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({ error: `Internal server error: ${err.message}` });
};

module.exports = {
  reqLogger,
  unknownEndpoint,
  errorHandler,
};
