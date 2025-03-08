import express from "express";

const app = express();
const PORT = 5000

function generatePassword({length=12, number, punctuation, lowercase, uppercase}) {
    let chars = ""
    if (lowercase !== "false") chars += "abcdefghijklmnopqrstuvwxyz"
    if (uppercase !== "false") chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (number !== "false") chars += "1234567890";
    if (punctuation !== "false") chars += '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'

    let password = '';
    for(let i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    return password;
}


app.get("/", (req, res) => {
    res.send("Random Password Generator API. Go to /password to generate. Available queries: number, punctuation, lowercase, uppercase.")
});


app.get("/password", (req, res) => {
    const {length, number, punctuation, lowercase, uppercase} = req.query;

    const password = generatePassword({
        length: parseInt(length) || 12,
        number: number,
        punctuation: punctuation,
        lowercase: lowercase,
        uppercase: uppercase
    });
    res.json({password});
});


app.listen(PORT, function () {
    // Sample URL: localhost:5000/password?length=12&number=true&punctuation=true&lowercase=true&uppercase=true
    console.log(`Server is listening on http://localhost:${PORT}`)
});
