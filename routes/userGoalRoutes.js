const { deleeteUserCreatedGoal, getAllUserGoals, createGoal } = require("../controller/userCreateGoal")

const router = require("express").Router()

router

    .post("/creategoal", createGoal)
    .get("/userAllgoal/:user_id", getAllUserGoals)
    .delete("/deleteUserCreategoal/:id", deleeteUserCreatedGoal)


module.exports = router