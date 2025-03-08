import express from "express"
import UsersData from "../data/users.js";

const router = express.Router();



// All Users
router.get("/", (req, res) => {
    res.send(UsersData);
})


// User with specific id
router.get("/:userId", (req, res) => {
    let { userId } = req.params;
    userId = parseInt(userId);
    if (userId === NaN) {
        res.status(400).send("Invalid ID!")
    }
    else {
        if (userId > UsersData.length || userId <= 0) {
            res.status(400).send(`User with ID ${userId} does not exist`,)
        } else {
            const UserData = UsersData[userId - 1];
            res.send(UserData);
        }
    }
})


export default router;
