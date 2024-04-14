const mongoose = require('mongoose')

const messageSchema  = mongoose.Schema({
    name: {
        type : String,
    },
    email : {
        type : String
    },
    subject : {
        type : String
    },
    message : {
        type : String
    }
});

// Creating Model
const message = mongoose.model('Message', messageSchema)

module.exports = message;