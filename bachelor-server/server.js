const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/userRoutes.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//link server to userRoutes
app.use("/users", userRoutes);
//connecting to db
require("./connection");

const server = require("http").createServer(app);
const PORT = 5000;
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

server.listen(PORT, () => {
  console.log("listnen on port", PORT);
});
