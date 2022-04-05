const express = require("express");
const db = require("./db")
const app = express();
const port = process.env.PORT || 1027
const fs = require("fs");
const path = require("path")
const favicon = require ("express-favicon");
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const users = require("./routes/users")

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

app.use(express.static(path.join(__dirname, "mrreactproject", "build")));

app.use(users)

app.listen(port, ()=> console.log("listening to: ", port))

