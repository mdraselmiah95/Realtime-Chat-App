require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const colors = require("colors");
const userRoute = require("./routes/user.route");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

//Route
app.use("/api/auth", userRoute);

// Database Connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(colors.red.underline("DB Connection Successful"));
  })
  .catch((err) => {
    console.log(colors.red(err.message));
  });

const server = app.listen(process.env.PORT, () => {
  console.log(colors.rainbow(`APP IS RUNNING ON PORT ${process.env.PORT}`));
});
