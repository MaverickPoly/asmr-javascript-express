import express from "express"
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./db/connect.js";
import tasksRouter from "./routers/tasksRoute.js"

dotenv.config()
const app = express();
const PORT = process.env.PORT;
connectDB();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/tasks", tasksRouter)


app.get("/", (req, res) => {
    res.send("Simple Tasks API Project built using Mongoose and Express JS");
})


app.listen(PORT, () => {
    console.log(`Server is listening on https://localhost:${PORT}`);
});
