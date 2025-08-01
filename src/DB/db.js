const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("DB connect successfully");
    })
    .catch(() => [console.log("DB connection fail")]);
}

module.exports = connectDB;
