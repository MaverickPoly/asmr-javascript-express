import express from "express";
import path from "path";

const app = express();

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(path.join(process.cwd(), "public/index.html"));
})

app.get("/about", (req, res) => {
    res.sendFile(path.join(process.cwd(), "public/about.html"));
})

app.get("/contact", (req, res) => {
    res.sendFile(path.join(process.cwd(), "public/contact.html"));
})



app.listen(8000, () => {
    console.log("Server is up and running on port 8000!");
})
