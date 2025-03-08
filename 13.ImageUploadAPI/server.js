const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express()
const port = 3000;


const storage = multer.diskStorage({
    destination: "./uploads/images/",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage }).single("image");


app.post("/upload", (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }

        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }
        const imageUrl = `${req.protocol}://${req.get("host")}/uploads/images/${req.file.filename}`;

        res.json({ imageUrl: imageUrl });
    });
});


app.use("/uploads", express.static("uploads"));
app.use(express.static(path.join(__dirname, "static")));

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
