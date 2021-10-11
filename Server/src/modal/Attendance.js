const mongoose = require('mongoose');

const schema = mongoose.Schema;

const AttandanceSchema = new schema({

    date: {
        type: String,
        required:true,
    },
    nic: {
        type: String,
        required:true,
    },
      arrivedTime: {
        type: String,
        required:true,
    },
    leavedTime: {
        type: String,
        
    },
    month: {
        type: String,
        required:true
    },
    year: {
        type: String,
        required:true
    }
})
const Attandance = mongoose.model("Attandance", AttandanceSchema)
module.exports = Attandance;