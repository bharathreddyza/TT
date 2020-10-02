const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TiktokVideos = require("./dbModel");
mongoose
  .connect(
    "mongodb+srv://admin:lwhLg3gj6RxlZNIg@cluster0.2lk3e.gcp.mongodb.net/tiktok?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDb connected"))
  .catch((err) => console.log(err));

module.exports = {
  TiktokVideos,
};
