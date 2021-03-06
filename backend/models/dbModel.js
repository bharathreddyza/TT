const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TiktokSchema = new Schema({
  url: String,
  channel: String,
  song: String,
  likes: String,
  messages: String,
  description: String,
  shares: String,
});

module.exports = TiktokVideos = mongoose.model("tiktokvideos", TiktokSchema);
