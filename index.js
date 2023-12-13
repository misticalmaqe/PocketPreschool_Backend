//-----------Requires-----------//
const cors = require("cors");
const express = require("express");
// const socketIO = require('socket.io');
require("dotenv").config();

//-----------Importing Controllers-----------//
const UsersController = require("./controllers/usersController");
const ClassActivitiesController = require("./controllers/classActivityController");
const NewsLettersController = require("./controllers/newsLetterController");
const ChatController = require("./controllers/chatController");
const TeacherClassController = require("./controllers/teacherClassController");

//------------Importing Routers--------------//
const UsersRouter = require("./routers/usersRouter");
const ClassActivitesRouter = require("./routers/classActivityRouter");
const NewsLetterRouter = require("./routers/newsLetterRouter");
const ChatRouter = require("./routers/chatRouter");
const TeacherClassRouter = require("./routers/teacherClassRouter");

//--------------Importing DB----------------//
const db = require("./db/models/index");
const {
  child,
  chat,
  chatRooms,
  classActImgs,
  classActivity,
  newsImgs,
  newsLetter,
  user,
  sessionTable,
  teacherClass,
} = db;

//----------Importing Middlewares-----------//
const jwtAuth = require("./middlewares/jwtAuth");

//---------Initializing Controllers---------//
const usersController = new UsersController(user, child, sessionTable);
const classActivityController = new ClassActivitiesController(
  classActivity,
  classActImgs
);
const newsLetterController = new NewsLettersController(newsLetter, newsImgs);
const chatController = new ChatController(chatRooms, chat, child);
const teacherClassController = new TeacherClassController(teacherClass);

//-----------Initializing Routers-----------//
const usersRouter = new UsersRouter(usersController, jwtAuth).routes();
const classActivityRouter = new ClassActivitesRouter(
  classActivityController,
  jwtAuth
).routes();
const newsLetterRouter = new NewsLetterRouter(
  newsLetterController,
  jwtAuth
).routes();
const chatRouter = new ChatRouter(chatController, jwtAuth).routes();
const teacherClassRouter = new TeacherClassRouter(
  teacherClassController,
  jwtAuth
).routes();

const PORT = process.env.DB_PORT || 8080; // Use PORT as the default if it's not specified
const app = express();

//-----------Enable CORS access to this server-----------//
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//-----------Using the Routers-----------//
app.use("/user", usersRouter);
app.use("/classactivity", classActivityRouter);
app.use("/newsletter", newsLetterRouter);
app.use("/chat", chatRouter);
app.use("/teacherclass", teacherClassRouter);

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
  socket.on("join-room", (chatroomId) => {
    console.log(chatroomId);
    socket.join(chatroomId);
  });
});
