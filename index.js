//-----------Requires-----------//
const cors = require('cors');
const express = require('express');
require('dotenv').config();

//-----------Importing Controllers-----------//

//------------Importing Routers--------------//

//--------------Importing DB----------------//

//----------Importing Middlewares-----------//

//---------Initializing Controllers---------//

//-----------Initializing Routers-----------//

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

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
