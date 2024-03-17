const mongoose = require("mongoose")

const goalSchema = new mongoose.Schema({

    user_id: {
        type: String,
        required: true,
    },
    goal_title: {
        type: String,
        required: true,
    },
    goal_desc: {
        type: String,
        required: true,
    },
    starting_date: {
        type: String,
        required: true,
    },
    end_date: {
        type: String,
        required: true,
    },
    priority_level: {
        type: String,
        required: true,
    },
}, { timeStapms: true })

module.exports = mongoose.model("goals", goalSchema)