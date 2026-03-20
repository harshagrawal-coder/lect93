const mongoose = require("mongoose");

function connection() {
  if (!process.env.MONGO_URI) {
    console.log("No DB URI found, skipping DB connection");
    return;
  }

  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log("database connected");
    })
    .catch(err => console.log(err));
}

module.exports = connection;