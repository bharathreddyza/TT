const express = require("express");

const Data = require("./data.js");
const DB = require("./models/index");
const { Db } = require("mongodb");
//app config
const app = express();
const PORT = 9000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader("Acces-Control-Allow-Origin", "*"),
    res.setHeader("Acces-Control-Allow-Headers", "*"),
    next();
});
//db config

//api endpoints
app.get("/", (req, res) => {
  res.status(200).send("helo world");
});

app.get("/v1/posts", (req, res) => {
  res.status(200).send("hello");
});

app.get("/v2/posts", (req, res) => {
  DB.TiktokVideos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
app.post("/v2/posts", (req, res) => {
  const dbVideos = req.body;
  DB.TiktokVideos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//listen
app.listen(process.env.PORT || PORT, () =>
  console.log(`server started at ${PORT}`)
);

//lwhLg3gj6RxlZNIg  admin
