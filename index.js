// require('dotenv').config()
const ejs = require("ejs");
const express = require("express");

const app = new express();
app.set("view engine", "ejs");
app.use(express.static("public"));

const port = process.env.PORT;
app.listen(port, () => {
    console.log("Tokaku chat server listen at port", port);
});

// Route Handler
app.get("/", (req, res) => {
    res.render("chat");
});
