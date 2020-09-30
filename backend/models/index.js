const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDb connected"))
  .catch((err) => console.log(err));
