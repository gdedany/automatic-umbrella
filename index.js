const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.static("static"));

app.get("/health", (req, res) => {
  res.send("ok");
});

app.listen(PORT, () => {
  console.log(`listening at ${PORT}`);
});

