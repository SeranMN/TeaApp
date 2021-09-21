const express = require('express');
const router = express.Router();
const FeedbackController = require('../controller/feedback.controller');

module.exports = function (){
    router.post('/add', FeedbackController.addFeedback);
    router.get('/', FeedbackController.getAllFeedbacks);
    return router;
}