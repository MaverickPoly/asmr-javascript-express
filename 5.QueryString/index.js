import express from "express";


const app = express();

app.get("/", (req, res) => {
    res.send("<h3>Go to /greet by specifying your name and age as a qeury parameters!</h3>");
})

app.get("/greet", (req, res) => {
    const { name, age } = req.query;
    res.send(`<div>
                  <h2>Name: ${name}</h2>
                  <h2>Age: ${age}</h2>
              </div>`);
});

app.get("/any", (req, res) => {
    const queries = req.query;
    let result = "";
    console.log(queries);
    for (const key in queries) {
        result += `<h3>${key}: ${queries[key]}</h3>`;
    }
    res.send(result);
})


app.listen(8000, () => {
    console.log("Server is up and running on server: http://localhost:8000");
});
