import express from "express";
import authRouter from "./routers/authRoute.js"
import bodyParser from "body-parser";


// Constants
const PORT = 8000

const app = express();

// Uses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routers
app.use("/auth/", authRouter);

app.get("/", (req, res) => {
    res.send("Basic Authentication GateWay!")
})


app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`);
});
