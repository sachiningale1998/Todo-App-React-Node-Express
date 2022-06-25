const express = require('express');
const api = require('./api')
const app = express();
const PORT = 3002 ;

app.use("/api", api)
app.get("/", (req, res) => {
    res.json({
        meassage: "Welcome to home page"
    })
})

// app.get("/DMSans-Regular.ttf", (req, res) => {
//     res.json({
//         message: "nothing"
//     })
// })

app.listen(PORT, (req, res) => {
    console.log(`Listening to http://localhost:${PORT}`);
})