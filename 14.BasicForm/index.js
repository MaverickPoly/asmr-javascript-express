const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");


const app = express()
const PORT = 3000

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, "static")));

app.post("/form", (req, res) => {
    const { title, amount, content } = req.body;
    console.log(title, amount, content);
    if (!title || !amount || !content) {
        return res.status(400).json({ error: "All fields are required!" });
    }
    res.json({ result: `Title: ${title}, Amount: ${amount}, Content: ${content}` });
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})
