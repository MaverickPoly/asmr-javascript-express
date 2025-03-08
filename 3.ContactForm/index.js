import express from "express";
import bodyParser from "body-parser";
import session from "express-session";

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());


app.use(session({
    secret: 'a_very_strong_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/form", (req, res) => {
    res.render("form");
});

app.post("/form", (req, res) => {
    const formData = req.body;
    console.log("Form Data: " + formData);
    req.session.formData = formData;
    res.redirect("/result");
});

app.get("/result", (req, res) => {
    const formData = req.session.formData
    console.log("Result: " + formData);
    res.render("result", formData)
});



app.listen(8000, () => {
    console.log("Server is up and running on post 8000");
})