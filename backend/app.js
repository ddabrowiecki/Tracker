const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  return res.send("You are now connected");
});

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});
