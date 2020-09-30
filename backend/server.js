const express = require("express");
const app = express();

const PORT = 9000;

app.get("/", (req, res) => {
  res.status(200).send("helo world");
});

app.listen(process.env.PORT || PORT, () =>
  console.log(`server started at ${PORT}`)
);
