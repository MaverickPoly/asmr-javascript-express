import express from "express";

const app = express();
const PORT = 8000


app.use(express.json())

// Custom Router that throws you an error
app.get("/error", (req, res, next) => {
    const error = new Error("This is very nasty error!")
    error.status = 400;
    next(error);
})


// Router that works without error
app.get("/", (req, res) => {
    res.send("Welcome here! This is Simple Express Error Handling Project!");
})

// Route with intentional internal server error
app.get("/server-error", (req, res, next) => {
    try {
        let a = somethingHere;
    } catch (error) {
        // passing the error to the middleware
        next(error);
    }
});

// 404 Page Error Handler
app.use((req, res, next) => {
    res.status(404).json({error: "Route Not Found!"});
});

// Global Error Handling Middleware
app.use((error, req, res, next) => {
    console.error(err.stack);

    res.status(err.status || 500).json({
        error: err.message || "Internal Server error"
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
