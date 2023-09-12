const mongoose = require("mongoose");
const { Schema, model } = mongoose;
mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => {
    console.log("mongoose connected");
  })
  .catch(() => {
    console.log("failed");
  });

const logInSchema = new Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
  phone: {
    type: Number,
  },
});

const LogInCollection = new model("LogInCollection", logInSchema);

module.exports = LogInCollection;
