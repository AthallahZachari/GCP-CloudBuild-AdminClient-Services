// Mengimport package
const express = require("express");
const router = express.Router();
const connection = require("./config");

// [GET] Mengambil daftar mobil
router.get("/", async (req, res) => {
  try {
    // Execute query ke database
    const query = "SELECT * FROM car_list";
    const data = await connection.promise().query(query);

    // Mengirimkan respons jika berhasil
    res.status(200).json({
      status: "Success",
      message: "Berhasil mengambil daftar mobil",
      data: data[0],
    });
  } catch (error) {
    // mengirimkan respons jika gagal
    res.status(error.statusCode || 500).json({
      status: "Error",
      message: error.message,
    });
  }
});

// [POST] Memasukkan mahasiswa baru ke dalam daftar mahasiswa
router.post("/", async (req, res) => {
  try {
    // mengambil nama dan nim dari request body
    const { id_mobil, jumlah, client, alamat } = req.body;

    // kalau ada input yang kosong  di request body
    if (!id_mobil || !client || !alamat || !jumlah) {
      const msg = `Kolom inputnya gabole kosong 😠`;
      const error = new Error(msg);
      error.statusCode = 401;
      throw error;
    }

    // Execute query ke database
    const command = "INSERT INTO order_mobil (order_mobil, jumlah, client, client_address) VALUES (?, ?, ?, ?)";
    await connection.promise().query(command, [id_mobil, jumlah, client, alamat]);

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


// [GET] Mengambil mahasiswa berdasarkan ID
router.get("/:id", async (req, res) => {
  try {
    // mengambil id dari parameter
    const { id } = req.params;

    // Execute query ke database
    const command = "SELECT * FROM mahasiswa WHERE id = ?";
    const [[data]] = await connection.promise().query(command, [id]);

    if (!data) {
      const error = new Error("mahasiswa tidak ditemukan.");
      error.statusCode = 404;
      throw error;
    }

    // Mengirimkan respons jika berhasil
    res.status(200).json({
      status: "Success",
      message: "Berhasil mengambil mahasiswa",
      data: data,
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
