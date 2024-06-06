                      // Mengimport package
const express = require("express");
const router = express.Router();
const connection = require("./config");


//[GET] semua list mobil
router.get("/", async (req, res) => {
  try{
    const query = "SELECT * FROM car_list";
    const data = await connection.promise().query(query);

    res.status(200).json({
      status: "Success",
      message: "Berhasil mengambil data mobil",
      data: data[0],
    });
  } catch(error){
    res.status(error.statusCode || 500).json({
      status: "Error",
      message: error.message,
    });
  }
});

// [POST] Memasukkan mobil baru ke daftar dosen
router.post("/", async (req, res) => {
  try {
    // mengambil nama dan nidn dari request body
    const { model_mobil, mesin, horsepower, tahun } = req.body;

    // kalau nama/nidn kosong atau gaada kolom nama/nidn di request body
    if (!model_mobil || !mesin || !horsepower || !tahun) {
      const msg = `Kolomnya gabole kosong 😠`;
      const error = new Error(msg);
      error.statusCode = 401;
      throw error;
    }

    // Execute query ke database
    const query = "INSERT INTO car_list (car_model, th_produksi, konfigurasi_mesin, horsepower) VALUES (?, ?, ?, ?)";
    await connection.promise().query(query, [model_mobil, tahun, mesin, horsepower]);

    // mengirimkan respons jika berhasil
    res.status(201).json({
      status: "Success",
      message: "Berhasil menambahkan model mobil baru",
    });
  } catch (error) {
    // mengirimkan respons jika gagal
    res.status(error.statusCode || 500).json({
      status: "Error broo",
      message: error.message,
    });
  }
});

// [PUT] Mengubah data mobil berdasarkan id
router.put("/:id", async (req, res) => {
  try {
    // mengambil id dari parameter
    const { id } = req.params;

    // mengambil model mobil dan atribut lainnya dari request body
    const { model_mobil, mesin, horsepower, tahun } = req.body;

    // kalau nama/nidn kosong atau gaada kolom nama/nidn di request body
    if (!model_mobil || !mesin || !horsepower || !tahun) {
      const msg = `Kolomnya gabole kosong woiii😠`;
      const error = new Error(msg);
      error.statusCode = 401;
      throw error;
    }

    // Execute query ke database
    const command = "UPDATE car_list SET car_model = ?, th_produksi = ?, konfigurasi_mesin = ?, horsepower = ? WHERE id = ?";
    await connection.promise().query(command, [model_mobil, tahun, mesin, horsepower, id]);

    // mengirimkan respons jika berhasil
    res.status(201).json({
      status: "Success",
      message: "Berhasil mengubah data mobil",
    });
  } catch (error) {
    // mengirimkan respons jika gagal
    res.status(error.statusCode || 500).json({
      status: "Error",
      message: error.message,
    });
  }
});

// [DELETE] Menghapus data mobil berdasarkan id
router.delete("/:id", async (req, res) => {
  try {
    // mengambil id dari parameter
    const { id } = req.params;

    // Execute query ke database
    const query = "DELETE FROM car_list WHERE id = ?";
    await connection.promise().query(query, [id]);

    // mengirimkan respons jika berhasil
    res.status(200).json({
      status: "Success",
      message: "Berhasil menghapus data mobil",
    });
  } catch (error) {
    // mengirimkan respons jika gagal
    res.status(error.statusCode || 500).json({
      status: "Error oii",
      message: error.message,
    });
  }
});

// [GET] Mengambil data mobil berdasarkan Keyword yg mirip
router.get("/:model_mobil", async (req, res) => {
  try {
    // mengambil id dari parameter
    const { model_mobil } = req.params;

    // Execute query ke database
    const command = "SELECT * FROM car_list WHERE car_model LIKE ?";
    const [data] = await connection.promise().query(command, [`${model_mobil}%`]);

    if (!data) {
      const error = new Error("Mobil tidak ditemukan.");
      error.statusCode = 404;
      throw error;
    }

    // Mengirimkan respons jika berhasil
    res.status(200).json({
      status: "Success",
      message: `Berhasil mengambil daftar brand: ${model_mobil}`,
      data: data,
    });
  } catch (error) {
    // mengirimkan respons jika gagal
    res.status(error.statusCode || 500).json({
      status: "Error ndann",
      message: error.message,
    });
  }
});

module.exports = router;
