import express from "express"
import Posts from "../data/posts.js";

const router = express.Router();


// All Posts
router.get("/", (req, res) => {
    res.send(Posts);
})


// Post with specific ID
router.get("/:postId", (req, res) => {
    let { postId } = req.params;
    postId = parseInt(postId);

    if (postId === NaN) {
        res.status(400).send("Invalid ID")
    } else {
        if (postId > Posts.length || postId <= 0) {
            res.status(400).send(`Post with ID ${postId} does not exist!`);
        } else {
            const PostData = Posts[postId - 1];
            res.send(PostData);
        }
    }
})


export default router;
