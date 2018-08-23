const express = require('express');

const router = express.Router();
const feedback = require('../models/feedback');

// get a list of feedback
router.get('/feedback', (req, res, next) => {
  feedback.find({}).then((feedbacks) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(feedbacks, null, 3));
    // JSON.stringify(feedbacks, null, 3) for prettified json like view
  });
  console.log('get request');
});

// add a new feedback to the db
router.post('/feedback', (req, res, next) => {
  // also return a promise
  feedback.create(req.body).then((feedbackRes) => {
    res.send(feedbackRes);
  }).catch(next);
});

module.exports = router;
