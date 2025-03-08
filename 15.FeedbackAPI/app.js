import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

const app = express();
const PORT = 5000;
const STORAGE_FILE = "feedbacks.json";

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Function to read feedbacks from the file
const getFeedbacks = () => {
    try {
        if (!fs.existsSync(STORAGE_FILE)) {
            return [];
        }
        const data = fs.readFileSync(STORAGE_FILE, "utf8");
        return JSON.parse(data) || [];
    } catch (error) {
        console.error("Error reading feedbacks:", error);
        return [];
    }
};

// Function to save feedbacks to the file
const saveFeedbacks = (feedbacks) => {
    try {
        fs.writeFileSync(STORAGE_FILE, JSON.stringify(feedbacks, null, 2), "utf8");
    } catch (error) {
        console.error("Error saving feedbacks:", error);
    }
};

// Basic Info about project
app.get("/", (req, res) => {
    res.send("Simple Feedback API");
});


// Add a new feedback
app.post("/add", (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: "Feedback text is required" });
    }

    const feedbacks = getFeedbacks();
    feedbacks.push(text);
    saveFeedbacks(feedbacks);

    res.json({ message: `Added feedback successfully!`, feedback: text });
});

// All Feedbacks
app.get("/all", (req, res) => {
    const feedbacks = getFeedbacks();
    res.json(feedbacks);
});

app.listen(PORT, () => {
    console.log(`Server is up and running on http://localhost:${PORT}`);
});
