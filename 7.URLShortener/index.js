import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


let urls = [];

function writeData(data) {
    // Add data to the json file:
    urls.push(data);
    fs.writeFile("urls.json", JSON.stringify(urls), (err) => {
        if (err) {
            throw err;
        }
        console.log("Done writing urls!");
    });
}

function readData() {
    try {
        const data = fs.readFileSync("urls.json");
        urls = JSON.parse(data);
    } catch (err) {
        if (err.code = "ENOENT") {
            urls = [];
        } else {
            console.error("Error reading urls.json:", err);
        }
    }
}

function shortenUrl(targetUrl) {
    const shortId = Math.random().toString(36).substring(2, 8);
    const shortUrl = `/s/${shortId}`;
    writeData({ shortUrl, targetUrl });
    return shortUrl;
}

app.get("/", (req, res) => {
    const context = {
        shortUrl: null,
        targetUrl: null,
    }
    res.render("index", context);
});

app.post("/shorten", (req, res) => {
    const { targetUrl } = req.body;
    const shortenedUrl = shortenUrl(targetUrl);
    const context = {
        shortUrl: shortenedUrl,
        targetUrl: targetUrl,
    };
    res.render("index", context);
});

app.get("/s/:shortId", (req, res) => {
    const shortId = req.params.shortId;
    const shortUrl = `/s/${shortId}`;
    const foundUrl = urls.find((url) => url.shortUrl === shortUrl);
    if (foundUrl) {
        res.redirect(foundUrl.targetUrl);
    } else {
        res.status(404).send("Short URL not found!");
    }
})

app.listen(8000, () => {
    readData();
    console.log("Server is running on: http://localhost:8000");
});
