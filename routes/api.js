const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedback');

// get a list of feedback
router.get('/feedback', function(req, res, next){
    Feedback.find({}).then(function(feedbacks){
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(feedbacks, null, 3)); 
        // JSON.stringify(feedbacks, null, 3) for prettified json like view
    });
    console.log("get request");
});

// add a new feedback to the db
router.post('/feedback', function(req, res, next) {
    // also return a promise
    Feedback.create(req.body).then(function(feedback){
        res.send(feedback);
    }).catch(next);
});

module.exports = router;