const express = require("express");
require("dotenv").config();
const PORT = process.env.DB_PORT;
const app = express();

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
