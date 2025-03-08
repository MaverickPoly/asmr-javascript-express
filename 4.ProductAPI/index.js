import express from "express";
import products from "./products.js";


const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Home Page of API</h1>")
});

app.get("/products", (req, res) => {
    res.json(products);
})

app.listen(8000, () => {
    console.log("Server is up and running on post 8000");
})