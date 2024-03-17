const { registerUser, loginUser, logout } = require("../controller/userController")

const router = require("express").Router()

router
    .post("/register", registerUser)
    .post("/login", loginUser)
    .post("/logout", logout)


module.exports = router