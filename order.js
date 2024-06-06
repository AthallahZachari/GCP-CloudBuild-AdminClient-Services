const express = require("express");
const router = express.Router();
const connection = require("./config");

//[POST] post daftar order
router.post("/", async (req, res) => {
  try {
    // mengambil nama dan nim dari request body
    const { id_mobil, client, alamat, jumlah } = req.body;

    // kalau ada input yang kosong  di request body
    if (!id_mobil || !client || !alamat || !jumlah) {
      const msg = `Kolom inputnya gabole kosong 😠`;
      const error = new Error(msg);
      error.statusCode = 401;
      throw error;
    }

    // Execute query ke database
    const command =
      "INSERT INTO order_mobil (order_mobil, jumlah, client, client_address) VALUES (?, ?, ?, ?)";
    await connection
      .promise()
      .query(command, [id_mobil, client, alamat, jumlah]);

    // mengirimkan respons jika berhasil
    res.status(201).json({
      status: "Success",
      message: "Berhasil menambahkan orderan",
    });
  } catch (error) {
    // mengirimkan respons jika gagal
    res.status(error.statusCode || 500).json({
      status: "Error",
      message: error.message,
    });
  }
});

module.exports = router;
