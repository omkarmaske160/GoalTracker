const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config({ path: "./.env" })

mongoose.connect(process.env.MONGO_URL)
const app = express()

//middlewares call
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))



//routes
app.use("/api/v1/auth", require("./routes/userRoutes"))
app.use("/api/v1/userNotes", require("./routes/userActivityRoutes"))
app.use("/api/v1/userGoals", require("./routes/userGoalRoutes"))

//db connection 
mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED");
    app.listen(process.env.PORT, console.log("SERVER STARTED"))
})
