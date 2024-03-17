const mongoose = require("mongoose")

const notesSchema = new mongoose.Schema({

    user_id: {
        type: String,
        required: true,
    },
    note: {
        type: String,
        required: true,
    },
}, { timeStapms: true })

module.exports = mongoose.model("notes", notesSchema)