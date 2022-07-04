const mongoose = require("mongoose");
const config = require("config");

const connectDB = async () => {
  try {
    await mongoose.connect(config.get("mongooseURI"));
    console.log("DB connected ...");
  } catch (error) {
    console.log("Error Connecting to DB");
    console.log(error.message);
  }
};

module.exports = connectDB;
