const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
    stars: {
        type: Number,
        required: [true, 'Stars-feedback is required']
    },
    project: {
        type: String,
        required: [true, 'Project is required']
    },
    feedback: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
},
{ versionKey: false }
// disables the "__v" attribute
);

const Feedback = mongoose.model('feedback', FeedbackSchema);

module.exports = Feedback;