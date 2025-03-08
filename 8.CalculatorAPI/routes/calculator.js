import express from "express"


const router = express.Router();


router.get("/add", (req, res) => {
    const { num1, num2 } = req.query;
    const result = Number(num1) + Number(num2);
    res.send(`<h1>Result: ${num1} + ${num2} = ${result}</h1>`)
})

router.get("/subtract", (req, res) => {
    const { num1, num2 } = req.query;
    const result = Number(num1) - Number(num2);
    res.send(`<h1>Result: ${num1} - ${num2} = ${result}</h1>`)
})

router.get("/multiply", (req, res) => {
    const { num1, num2 } = req.query;
    const result = Number(num1) * Number(num2);
    res.send(`<h1>Result: ${num1} * ${num2} = ${result}</h1>`)
})

router.get("/divide", (req, res) => {
    const { num1, num2 } = req.query;
    const result = Number(num1) / Number(num2);
    res.send(`<h1>Result: ${num1} / ${num2} = ${result}</h1>`)
})

export default router;
