import express from "express"
import calculateRouter from "./routes/calculator.js"


const app = express()

app.use("/", calculateRouter)


app.get("/", (req, res) => {
    res.send(`<div>
                <h1>Simple Calculator API</h1>
                <a href="/add?num1=5&num2=5">Add</a>
                <a href="/subtract?num1=5&num2=5">Subtract</a>
                <a href="/multiply?num1=5&num2=5">Multiply</a>
                <a href="/divide?num1=5&num2=5">Divide</a>
             </div>`)
})

app.listen(8000, () => {
    console.log("Server is listening on localhost:8000")
})