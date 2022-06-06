const express = require("express");
const app = express();
const http = require("http").Server(app);
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const { application } = require("express");
const path = require("path");
const cors = require('cors')
const { addUser, removeUser } = require("./user");

const server = require('http').createServer(app);
const io = require("socket.io")(server, {
  cors: '*'
});
// var http = require('http').Server(app);
// var io = require('socket.io')(http,  { cors: { origin: '*' } });

dotenv.config();
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));
app.use(cors())

app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect(process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true

  }
  ).then(console.log("Connected to MONGODB")).catch((err) => console.log(err));
// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify:true
//   })
//   .then(console.log("Connected to MongoDB"))
//   .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

const PORT = 5000;

io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, callBack) => {
    console.log("User Joined")
    const { user, error } = addUser({ id: socket.id, name, room });
    if (error) return callBack(error);
    console.log(name)

    socket.join(user.room);
    

    socket.broadcast
      .to(user.room)
      .emit("message", { user: "Admin", text: `${user.name} has joined!` });
    callBack(null);

    socket.on("sendMessage", ({ message }) => {
      io.to(user.room).emit("message", {
        user: user.name,
        text: message,
      });
    });
  });
  socket.on("disconnect", () => {
    const user = removeUser(socket.id);
    console.log(user);
    io.to(user.room).emit("message", {
      user: "Admin",
      text: `${user.name} just left the room`,
    });
    console.log("A disconnection has been made");
  });
});

server.listen(5000, () => {
    console.log("Backend is running.");
  });
