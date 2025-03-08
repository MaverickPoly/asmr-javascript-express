import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv";
import connectDB from "./db/config.js";
import movieRouter from "./routes/movieRouter.js"

// DotEnv
dotenv.config()

const app = express();

// Constants
const PORT = process.env.PORT;


// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Connect to Database
connectDB()

// Routers
app.use("/movies/", movieRouter);


app.get("/", (req, res) => {
    res.send("CRUD Operation in MongoDB using Express and Mongoose!")
})


app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
