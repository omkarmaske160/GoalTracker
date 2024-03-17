const { verify } = require("jsonwebtoken")
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const validator = require("validator")
const Notes = require("../models/Notes")



exports.createNotes = async (req, res) => {
    try {
        await Notes.create({ ...req.body })
        res.status(201).json({
            message: "note add success"
        })
    }
    catch (error) {
        res.status(500).json({
            message: error.message || "something went wrong"
        })
    }
}
exports.getAllNotesUser = async (req, res) => {
    try {
        const { user_id } = req.params
        console.log(req.params);

        const result = await Notes.find({ user_id })
        res.status(200).json({ message: "User Event Fetch successfully", result })
    }
    catch (error) {
        res.status(500).json({
            message: error.message || "something went wrong"
        })
    }
}
exports.deleeteUserCreatedNote = async (req, res) => {
    try {
        const { id: _id } = req.params
        const result = await Notes.findOneAndDelete(_id)
        res.status(200).json({ message: "User Event Delete successfully", result })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message || "something went wrong" })
    }
}


