// Mengimport package
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8081;
const carRouter = require("./cars");
const orderRouter = require("./orders");

// Supaya API dapat diakses di domain yang berbeda
app.use(cors());

// Buat ngubah request body yang berupa json ke dalam object
app.use(express.json());

//semua list mobill ada disini
app.use("/cars", carRouter);
//semua list order
app.use("/orders", orderRouter);

app.get("/", (req, res) => {
  res.send("Hello from car-service! 😁");
});

// Menjalankan server di port 3001
app.listen(port, () => console.log("Server terkoneksi pada port " + port));
