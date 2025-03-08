import express from "express";


const router = express.Router();

router.get("/login/", (req, res) => {
    res.send("Login Route. Try making a POST request.")
})

router.post("/login/", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).send("Email or password is missing in the body!");
    } else {
        res.send(`Logged in as ${email} and password ${password}`);
    }
})


router.get("/register/", (req, res) => {
    res.send("Register route. Try making a POST request.")
})

router.post("/register/", (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    if (!username || !email || !password || !confirmPassword) {
        res.status(400).send("Request body should contain fields: username, email, password and confirmPassword. Some of them are missing!")
    } else if (password != confirmPassword) {
        res.status(400).send("Passwords do not match!")
    }
    else {
        res.send(`User successfully registered as Username: ${username}, Email: ${email} and password ${password}`)
    }
})


router.get("/logout/", (req, res) => {
    res.send("Logout route. Try making a POST request.")
})

router.post("/logout/", (req, res) => {
    res.send("Logged out successfully!")
})


export default router;
