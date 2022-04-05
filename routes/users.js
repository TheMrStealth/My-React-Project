const express = require('express');
const path = require("path")
const router = express.Router();
const db = require("../db")


router.post('/user', (req, res) => {
    
})

router.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
})

module.exports = router;