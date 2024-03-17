const { createNotes, getAllNotesUser, deleeteUserCreatedNote } = require("../controller/userActivityController")

const router = require("express").Router()

router

    .post("/createNote", createNotes)
    .get("/userAllNotes/:user_id", getAllNotesUser)
    .delete("/deleteUserCreateNote/:id", deleeteUserCreatedNote)


module.exports = router