if (!process.env.PASSWORD) console.log("ALERT: NO PASSWORD");
const express = require("express");
const db = require("./db")
const app = express();
const port = process.env.PORT || 1027
const fs = require("fs");
const path = require("path")
const favicon = require ("express-favicon");
const cors = require("cors")
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const users = require("./routes/users")


app.use(express.static(path.join(__dirname, "mrreactproject", "build")));

app.use('/users',users);
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));


app.listen(port, ()=> console.log("listening to: ", port))

