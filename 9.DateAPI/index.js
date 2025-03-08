import express from "express";
import dateController from "./controllers/date.js";
import timeController from "./controllers/time.js";

const app = express();


app.get("/", (req, res) => {
    res.send(`<div>
                <h1>Date and Time API</h1>
                <a href="/date">Date</a>
                <a href="/time">Time</a>
              </div>`)
})
app.get("/date", dateController)
app.get("/time", timeController)


app.listen(8000, () => {
    console.log("Listening on http://localhost:8000");
})
