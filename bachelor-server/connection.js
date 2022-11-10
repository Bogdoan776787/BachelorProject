const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.r8xaq.mongodb.net/?retryWrites=true&w=majority`,
  () => {
    console.log("connected to MongoDB");
  }
);
