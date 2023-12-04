//-----------Requires-----------//
const cors = require('cors');
const express = require('express');
require('dotenv').config();

//-----------Importing Controllers-----------//
const UsersController = require('./controllers/usersController');

//------------Importing Routers--------------//
const UsersRouter = require('./routers/usersRouter');

//--------------Importing DB----------------//
const db = require('./db/models/index');
const { user } = db;

//----------Importing Middlewares-----------//
const jwtAuth = require('./middlewares/jwtAuth');

//---------Initializing Controllers---------//
const usersController = new UsersController(user);

//-----------Initializing Routers-----------//
const usersRouter = new UsersRouter(usersController, jwtAuth).routes();

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

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
