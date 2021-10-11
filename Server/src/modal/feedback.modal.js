const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
    productID: { type: String, required: true },
    email: { type: String, required: true},
    feedbackType: { type: String, required: true},
    description: {type:String, required: true},
    rating: {type:Number, required: true},
});

const Feedback = mongoose.model('feedback', FeedbackSchema);
module.exports = Feedback;