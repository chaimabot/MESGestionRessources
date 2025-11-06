require("dotenv").config();
const express = require("express");
const connect = require("./config/db");

const app = express();
connect();

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
