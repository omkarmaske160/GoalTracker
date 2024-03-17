
const Goals = require("../models/Goals")



exports.createGoal = async (req, res) => {
    try {
        await Goals.create({ ...req.body })
        res.status(201).json({
            message: "Goal add success"
        })
    }
    catch (error) {
        res.status(500).json({
            message: error.message || "something went wrong"
        })
    }
}
exports.getAllUserGoals = async (req, res) => {
    try {
        const { user_id } = req.params
        console.log(req.params);

        const result = await Goals.find({ user_id })
        res.status(200).json({ message: "User Goal Fetch successfully", result })
    }
    catch (error) {
        res.status(500).json({
            message: error.message || "something went wrong"
        })
    }
}
exports.deleeteUserCreatedGoal = async (req, res) => {
    try {
        const { id: _id } = req.params
        const result = await Goals.findOneAndDelete(_id)
        res.status(200).json({ message: "User Goal Delete successfully", result })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message || "something went wrong" })
    }
}


