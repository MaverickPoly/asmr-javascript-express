import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    name: { type: String, required: true },
    content: { type: String, required: true },
})


const TaskModel = mongoose.model("Task", taskSchema)


/*
* CRUD OPERATIONS ON 'TASK' MODEL
*/

// Create New Task
const createTask = async (name, content) => {
    try {
        const result = await TaskModel.create({ name: name, content: content });
        console.log(`Added task with name ${name}`)
        return result;
    } catch (error) {
        console.error(`Error creating Task: ${error}`)
        throw error;
    }
}

// Get All Tasks
const getAllTasks = async () => {
    try {
        const tasks = await TaskModel.find()
        console.log(`Movies: ${tasks}`)
        return tasks;
    } catch (error) {
        console.error(`Error Fetching Tasks: ${error}`)
        throw error;
    }
}

// Get Specific Task with ID
const getTaskWithId = async (id) => {
    try {
        const result = await TaskModel.findById(id);
        return result;
    } catch (error) {
        console.error(`Error getting a Task: ${error}`)
        throw error;
    }
}

// Delete Task with ID
const deleteTaskWithId = async (id) => {
    try {
        const result = await TaskModel.findByIdAndDelete(id);
        console.log(`Deleted a movie with id ${id} successfully!`)
        return result;
    } catch (error) {
        console.error(`Error Deleting a Task: ${error}`)
        throw error;
    }
}

// Update Task With ID
const updateTask = async (id, newTask) => {
    try {
        const result = await TaskModel.findByIdAndUpdate(id, newTask, { new: true });
        console.log(`Updated movie with id ${id} successfully!`)
        return result;
    } catch (error) {
        console.error(`Error Updating a Task: ${error}`)
        throw error;
    }
}


export { TaskModel, createTask, getAllTasks, getTaskWithId, deleteTaskWithId, updateTask };
