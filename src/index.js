const express = require("express")
const { createServer } = require("http");
const path = require("path");
const { Server } = require("socket.io")

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use( express.static(path.join(__dirname, "views")) );

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

// app.get("/a", (req, res) => {
//     let dat = console.log("yes")

//     res = dat
// });

// io.on("connection", socket => {

//     // console.log("Client Connected: ", io.engine.clientsCount)
//     console.log("Client Socket ID", socket.id);

//     // socket.on("disconnect", () => {
//     //     console.log("Client: ", socket.id ,"Disconnect")
//     // })

//     socket.conn.once("upgrade", () => {
//         console.log("HTTP Long-Polling Move To: ", socket.conn.transport.name);
//     })

// });


/* ------------------------------------------- ENVIANDO EVENTOS ----------------------------------------------------------- */

io.on("connection", socket => {
    socket.emit("Welcome", "ConnectionDone Yep");
})

httpServer.listen(10000);