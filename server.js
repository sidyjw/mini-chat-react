const express = require("express");
const app = express();
const PORT = process.env.PORT || 5500;
const socketio = require("socket.io");

const server = app.listen(PORT, () =>
  console.log(`[Server] Running on: http://localhost:${PORT} `)
);

const io = socketio(server);

io.on("connection", (socket) => {
  socket.on("new-message", (msg) =>
    socket.broadcast.emit("add-new-message", msg)
  );
});
