import express from "express"

const router = express.Router()

router.get("/404", (req, res) => {
    res.status(404).render("404");
})


router.get("/500", (req, res) => {
    res.status(500).render("500");
})


router.get("/429", (req, res) => {
    res.status(429).render("429");
})

export default router