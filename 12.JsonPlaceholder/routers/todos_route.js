import express from "express"
import Todos from "../data/todos.js";

const router = express.Router();


// All Todos
router.get("/", (req, res) => {
    res.send(Todos);
})


// Todo with specific ID
router.get("/:todoId", (req, res) => {
    let { todoId } = req.params;
    todoId = parseInt(todoId);

    if (todoId === NaN) {
        res.status(400).send("Invalid ID")
    } else {
        if (todoId > Todos.length || todoId <= 0) {
            res.status(400).send(`Todo with ID ${todoId} does not exist!`);
        } else {
            const TodoData = Todos[todoId - 1];
            res.send(TodoData);
        }
    }
})


export default router;
