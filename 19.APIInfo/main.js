const express = require("express");
const axios = require("axios");


const PORT = 4000
const app = express()

app.get("/", async (req, res) => {
    try {
        const ipResponse = await axios.get("https://api64.ipify.org?format=json");
        const ip = ipResponse.data.ip;
        console.log(`IP Address: ${ip}`);

        const { data } = await axios.get(`http://ip-api.com/json/${ip}`);
        console.log(data);

        res.json({
            ip: data.query,
            country: data.country,
            city: data.city,
            region: data.regionName,
            timezone: data.timezone,
            isp: data.isp,
        })
    } catch (error) {
        console.error(`Error fetching IP details: ${error.message}`);
        res.status(500).json({ error: "Failed to retrieve IP details!" });
    }
})


app.listen(PORT, function () {
    console.log(`Server is listening on http://localhost:${PORT}`);
})
