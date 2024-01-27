const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/path')

router.get("/",(req, res) => {
    res.sendFile(path.join(rootDir,"views","form.html"));
})
router.post("/data",(req, res) => {
    const {username,password, dob, remark, gender} = req.body;
    res.render('data',{
        username,
        password,
        dob,
        gender,
        remark
    })
})

module.exports = router;