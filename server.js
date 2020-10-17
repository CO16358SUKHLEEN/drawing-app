const express = require("express");
const app = express();
var server = app.listen(3000);
app.use(express.static('public'));
const io = require('socket.io')(server);
console.log("server running")

io.on('connect', socket => {
   console.log(socket.id);
   socket.on('coords', (mouseX, mouseY) => {
       console.log(mouseX, mouseY, "okkkk")
       socket.broadcast.emit("qwe", mouseX, mouseY);
   })
});

