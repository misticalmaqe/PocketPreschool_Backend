const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");
require("dotenv").config();

const UsersController = require("./controllers/usersController");
const UsersRouter = require("./routers/usersRouter");
const db = require("./db/models/index");
const { user } = db;
const jwtAuth = require("./middlewares/jwtAuth");

const usersController = new UsersController(user);
const usersRouter = new UsersRouter(usersController, jwtAuth).routes();

const PORT = process.env.DB_PORT || 8080; // Use PORT as the default if it's not specified
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const server = app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});

const io = require("socket.io")(server, {
  cors: {
    origin: true,
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log(`New connection made, the socket id is: ${socket.id}`);

  socket.on("send-message", (message, chatroomId) => {
    console.log(
      `message from frontend/client: ${JSON.stringify(
        message
      )} from room ${chatroomId}`
    );

    socket.to(chatroomId).emit("receive-message", message);
  });

  socket.on("user-typing", (userId, chatroomId) => {
    socket.to(chatroomId).emit("user-typing-response", userId);
  });

  socket.on("attachment-table-updated", (chatroomId) => {
    console.log("chatroom id: ", chatroomId);
    if (chatroomId) {
      socket.to(chatroomId).emit("refresh-attachments");
    }
  });
});
