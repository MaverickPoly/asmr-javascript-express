import express from "express";

const router = express.Router()

router.get("/", (req, res) => {
    const queries = req.query;
    let result = "GET Request send with queries:<br />\n";
    for (const key in queries) {
        result += `\t- ${key}: ${queries[key]}<br />\n`;
    }
    res.send(result);
})

router.post("/", (req, res) => {
    const body = req.body;
    console.log(body)
    let result = "POST Request send with body data:<br />\n"
    for (const key in body) {
        result += `\t- ${key}: ${body[key]}<br />\n`
    }
    console.log(`Result: ${result}`)
    res.send(result);
})

router.delete("/", (req, res) => {
    res.send("DELETE request received successfully!")
})

router.put("/", (req, res) => {
    res.send("PUT request received successfully!")
})

router.patch("/", (req, res) => {
    res.send("PATCH request received successfully!")
})


export default router;