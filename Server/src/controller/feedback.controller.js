const Feedback = require("../modal/feedback.modal");
const mongoose = require("mongoose");


const addFeedback = async (req, res) => {
    if (req.body) {
        const feedback = new Feedback(req.body);
        await feedback.save()
            .then(data => res.status(200).send({data: data}))
            .catch(err => res.status(200).send(err));
    }
}


const getAllFeedbacks = async (req, res) => {
    await Feedback.find()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.send(error);
        });
}

module.exports = {
    addFeedback,
    getAllFeedbacks,
    
}