//-----------Requires-----------//
const cors = require('cors');
const express = require('express');
require('dotenv').config();

//-----------Importing Controllers-----------//
const UsersController = require('./controllers/usersController');
const ClassActivitiesController = require('./controllers/classActivityController');
const NewsLettersController = require('./controllers/newsLetterController');
const ChatController = require('./controllers/chatController');

//------------Importing Routers--------------//
const UsersRouter = require('./routers/usersRouter');
const ClassActivitesRouter = require('./routers/classActivityRouter');
const NewsLetterRouter = require('./routers/newsLetterRouter');
const ChatRouter = require('./routers/chatRouter');

//--------------Importing DB----------------//
const db = require('./db/models/index');
const {
  child,
  chat,
  chatRooms,
  classActImgs,
  classActivity,
  newsImgs,
  newsLetter,
  user,
} = db;

//----------Importing Middlewares-----------//
const jwtAuth = require('./middlewares/jwtAuth');

//---------Initializing Controllers---------//
const usersController = new UsersController(user, child);
const classActivityController = new ClassActivitiesController(
  classActivity,
  classActImgs
);
const newsLetterController = new NewsLettersController(newsLetter, newsImgs);
const chatController = new ChatController(chatRooms, chat, child);

//-----------Initializing Routers-----------//
const usersRouter = new UsersRouter(usersController, jwtAuth).routes();
const classActivityRouter = new ClassActivitesRouter(
  classActivityController
).routes();
const newsLetterRouter = new NewsLetterRouter(newsLetterController).routes();
const chatRouter = new ChatRouter(chatController).routes();

const PORT = process.env.DB_PORT;
const app = express();

//-----------Enable CORS access to this server-----------//
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//-----------Using the Routers-----------//
app.use('/user', usersRouter);
app.use('/classactivity', classActivityRouter);
app.use('/newsletter', newsLetterRouter);
app.use('/chat', chatRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
