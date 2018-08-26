const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const argv = require('minimist')(process.argv.slice(2), {
  string: 'mongodbURL', // --mongodbURL
  int: 'port', // --port
  default: { mongodbURL: 'mongodb://localhost/feedback', port: 3000 },
});
const routes = require('./routes/api');

// using express
const app = express();

mongoose.connect(argv.mongodbURL, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use((req, res, next) => {
  // websites to allow to connect
  res.setHeader('Acces-Control-Allow-Origin', '*');

  // requests methods to allow
  res.setHeader('Acces-Control-Allow-Methods', 'GET, POST');
  next();
});

// using routes
app.use('/api', routes);

// error handling for not routed requests
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

// error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
  next();
});

// listen for requests
app.listen(argv.port, () => {
  console.log(`App is listening on port ${argv.port}`);
  console.log(`conntected to ${argv.mongodbURL}`);
});
