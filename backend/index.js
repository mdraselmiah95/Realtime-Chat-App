require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const socket = require("socket.io");
const colors = require("colors");
const userRoute = require("./routes/user.route");
const messageRoute = require("./routes/message.route");

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//Database Connection
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

// Route
app.use("/api/auth", userRoute);
app.use("/api/messages", messageRoute);

const server = app.listen(process.env.PORT, () => {
  console.log(colors.rainbow(`APP IS RUNNING ON PORT ${process.env.PORT}`));
});

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);

    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-receive", data.msg);
    }
  });
});
