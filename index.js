require("dotenv").config();
const PORT = process.env.PORT || 2000;
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    return res.status(200).send("API RUNNING")
})

// DEFINE ROUTER
const {eventsRouter, categoriesRouter} = require("./routers")
app.use("/events", eventsRouter)
app.use("/categories", categoriesRouter)

// ERROR HANDLING
app.use((error, req,res,next) => {
    return res.status(error.rc || 500).send(error)
})

app.listen(PORT, () => {
    console.log("API RUNNING", PORT);
})