const express = require("express");
const app = express();
const port = 5000;
const routes = require("./routes");
const cors = require("cors");
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
