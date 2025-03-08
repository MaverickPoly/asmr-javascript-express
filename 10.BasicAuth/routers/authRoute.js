import express from "express"

const router = express.Router();

let users = [
    {
        email: "test@gmail.com",
        username: "Test",
        password: "123456",
    },
]


router.post("/login", (req, res) => {
    const { email, password } = req.body;
    console.log(`Users: ${users}`)

    if (!email || !password) {
        return res.status(400).send("All fields are required! (email, password)")
    }

    const foundUser = users.find((item) => {
        return item.email === email;
    });
    if (!foundUser) {
        return res.status(400).send("Invalid credentials!");
    } else if (foundUser.password !== password) {
        return res.status(400).send("Invalid password!")
    } else {
        res.send(`Logged in as ${foundUser.username} - ${foundUser.email} successfully!`);
    }
});


router.post("/register", (req, res) => {
    const { username, email, password, confirmPassword } = req.body;
    console.log(`Users: ${users}`)

    if (!username || !email || !password || !confirmPassword) {
        return res.status(400).send("All fields are required")
    }

    if (password !== confirmPassword) {
        return res.status(400).send("Passwords do not match!")
    }

    const foundUser = users.find((item) => {
        return item.email === email && item.username === username;
    });

    if (foundUser) {
        return res.status(400).send("Username with that email or username already exists!");
    }

    const newUser = {
        email: email,
        username: username,
        password: password,
    }
    users.push(newUser);
    res.send(`Successfully registered user ${username} - ${email} and password ${password}`)
})

router.post("/logout", (req, res) => {
    res.send("Logged out successfully!")
})



export default router;
