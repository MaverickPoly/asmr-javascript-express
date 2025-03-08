import express from "express";
import { createTask, getAllTasks, getTaskWithId, deleteTaskWithId, updateTask } from "../models/taskModel.js";
import mongoose from "mongoose";


const router = express.Router();

router.post("/new", async (req, res) => {
    try {
        const { name, content } = req.body;
        const newTask = await createTask(name, content);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

router.get("/all", async (req, res) => {
    try {
        const allTasks = await getAllTasks();
        res.json(allTasks);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.get("/task/:id/", async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ error: "Invalid ID" });
        }
        const task = await getTaskWithId(id);
        if (!task) {
            return res.status(404).json({ error: `Task with ID ${id} not found!` })
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.delete("/task/:id/delete", async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ error: "Invalid ID" });
        }
        const deletedTask = await deleteTaskWithId(id);
        if (!deletedTask) {
            return res.status(404).json({ error: `Task with ID ${id} not found!` });
        }
        res.json({ message: "Task Deleted successfully!" })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});


router.put("/task/:id/update", async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid ID" });
        }

        const { name, content } = req.body;
        const updatedTask = await updateTask(id, { name, content });
        if (!updatedTask) {
            return res.status(404).json({ error: "Task not found!" })
        }
        res.json(updatedTask)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


export default router;