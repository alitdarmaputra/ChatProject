require('dotenv').config()
const ejs = require("ejs");
const express = require("express");
const app = new express();

const http = require("http");
const server = http.createServer(app)
const {Server} = require("socket.io");
const io = new Server(server);

app.set("view engine", "ejs");
app.use(express.static("public"));

// Route Handler
app.get("/", (req, res) => {
    res.render("chat");
});

io.on("connection", socket => {
    socket.on("message", response => {
        socket.broadcast.emit("message", {
            "message": response,
            "user_id": socket.id
        });
    });
});

const port = process.env.PORT;

server.listen(port, () => {
    console.log("Tokaku chat server listen at port", port);
});