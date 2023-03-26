require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const colors = require("colors");

const app = express();

app.use(cors());
app.use(express.json());

const server = app.listen(process.env.PORT, () => {
  console.log(colors.rainbow(`APP IS RUNNING ON PORT ${process.env.PORT}`));
});
