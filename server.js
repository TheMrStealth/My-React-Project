const express = require("express");
const app = express();
const port = process.env.PORT || 1027
const fs = require("fs");
const path = require("path")
const favicon = require ("express-faavicon");
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get("/posts", async (req, res) => {
    const postDir = "./public/posts"
    if(!fs.existsSync(postDir)) fs.mkdirSync(postDir);

    const postsNames = fs.readdirSync(postDir)
    const posts = [];

    postsNames.forEach(postName => {
        posts.push(JSON.parse(fs.readFileSync(postDir + "/" + postName)))
    })

    res.send(posts);
})

app.listen(port, ()=> console.log("listening to: ", port))