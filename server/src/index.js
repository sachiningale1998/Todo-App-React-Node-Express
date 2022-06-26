const express = require('express');
const api = require('./api')
const app = express();
const PORT = 3002 ;

app.use("/api", api)
app.get("/", (req, res) => {
    console.log(req.body)
    res.json({
        message: "Welcome to home page"
    })
})


app.listen(PORT, (req, res) => {
    console.log(`Listening to http://localhost:${PORT}`);
})