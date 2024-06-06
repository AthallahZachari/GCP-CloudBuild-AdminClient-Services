const express = require("express");
const cors = require("cors");
const port = 8081;
const app = express();
const clientRouter = require("./mahasiswa");
const orderRouter = require("./order");

app.use(cors());

//req body berupa json dirubah ke bentuk object
app.use(express.json());

//
app.use("/client", clientRouter);
app.use("/order", orderRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Client Service! 😁");
});

app.listen(port, () => {
  console.log("Server Connected on PORT: " + port + "/");
});
