import express from "express"
import Comments from "../data/comments.js";

const router = express.Router();


// All Comments
router.get("/", (req, res) => {
    res.send(Comments);
})


// Comment with specific ID
router.get("/:commentId", (req, res) => {
    let { commentId } = req.params;
    commentId = parseInt(commentId);

    if (commentId === NaN) {
        res.status(400).send("Invalid ID")
    } else {
        if (commentId > Comments.length || commentId <= 0) {
            res.status(400).send(`Comment with ID ${commentId} does not exist!`);
        } else {
            const CommentData = Comments[commentId - 1];
            res.send(CommentData);
        }
    }
})


export default router;
