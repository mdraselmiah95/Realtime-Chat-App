require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const colors = require("colors");
const userRoute = require("./routes/user.route");

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//Database Connection
// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log(colors.red.underline("DB Connection Successful"));
//   })
//   .catch((err) => {
//     console.log(colors.red(err.message));
//   });

// DB connection
mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }).then(() => {
  console.log(`Database Connection Is Successful 🥇`.rainbow.bold);
});

//Route
app.use("/api/auth", userRoute);

const server = app.listen(process.env.PORT, () => {
  console.log(colors.rainbow(`APP IS RUNNING ON PORT ${process.env.PORT}`));
});
