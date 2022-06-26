const express = require('express')

const router = express.Router()

const items  = require("./items");

router.get("/", (req,res)=>{
    res.json({
        message : "Welcome to API"
    })
});

router.post("/todo/new", (req, res) => {
    console.log(req.body)
 })

router.use("/items", items);



module.exports = router ;