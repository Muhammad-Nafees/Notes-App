const mongoose = require("mongoose")

const Notes = new mongoose.Schema({

    title: {
        type: String,
        min: 5,
        max: 50,
        required: true
    },

    description: {
        type: String,
        min: 5,
        max: 200,
        required: true
    },

    postedBy: {
        type: String,
        date: Date.now()
    }

}, { timestamps: true })

const UserModal = mongoose.model("UserNotesmodal", Notes);

module.exports = UserModal;
