require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/DB/db");

connectDB();
app.listen(process.env.PORT, () => {
  console.log("server is running on", process.env.PORT);
});
