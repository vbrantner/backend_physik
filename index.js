const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./routes/api');

// using express
const app = express();

mongoose.connect('mongodb://localhost/feedback', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

// using routes
app.use('/api', routes);

// error handling
app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

// listen for requests
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});