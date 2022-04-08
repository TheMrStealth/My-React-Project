const express = require('express');
const path = require("../model/User")
const router = express.Router();
const db = require("../db")
const {User} = require("../model/User");

router.post('/', (req, res) => {
    const user = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
    })

    user.save()
    .then(() => res.send(user))
    .catch((err) => res.send(err))
})

router.get('/', (req, res) => {
    User.find()
    .then(result => res.send(result))
    .catch(err => res.send(err))
})

// app.get("/posts", async (req, res) => {
//     const postDir = "./public/posts"
//     if(!fs.existsSync(postDir)) fs.mkdirSync(postDir);

//     const postsNames = fs.readdirSync(postDir)
//     const posts = [];

//     postsNames.forEach(postName => {
//         posts.push(JSON.parse(fs.readFileSync(postDir + "/" + postName)))
//     })

//     res.send(posts);
// })


module.exports = router;