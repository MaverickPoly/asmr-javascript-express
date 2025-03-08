import express from "express";
import bodyParser from "body-parser";

// Routers
import usersRouter from "./routers/users_route.js";
import postsRouter from "./routers/posts_route.js"
import todosRouter from "./routers/todos_route.js"
import commentsRouter from "./routers/comments_route.js"
import methodsRouter from "./routers/methods_route.js"
import simulateRouter from "./routers/simulate_route.js"
import authRouter from "./routers/auth_router.js"

const PORT = process.env.PORT || 8000;
const app = express();


const requestLogger = (req, res, next) => {
    res.on("finish", () => {
        console.log(`[${new Date().toISOString()}] ${req.method}: ${req.originalUrl} ${res.statusCode}`);
    });
    next();
}


app.set("view engine", "ejs");

// Setup
app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestLogger)

// Routes
app.use("/users/", usersRouter)
app.use("/posts/", postsRouter)
app.use("/todos/", todosRouter)
app.use("/request/", methodsRouter)
app.use("/simulate/", simulateRouter)
app.use("/comments/", commentsRouter)
app.use("/auth/", authRouter)


app.get("/", (req, res) => {
    res.render("index")
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});
