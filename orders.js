// Mengimport package
const express = require("express");
const router = express.Router();
const connection = require("./config");

//[GET] semua list order
router.get("/", async (req, res) => {
  try {
    //const query = "SELECT * FROM order_mobil";
    const query =
      "SELECT order_mobil.id_pesanan, order_mobil.jumlah, order_mobil.client, order_mobil.client_address, car_list.car_model FROM order_mobil JOIN car_list ON order_mobil.order_mobil = car_list.id";
    const data = await connection.promise().query(query);

    res.status(200).json({
      status: "Success",
      message: "Berhasil mengambil order mobil",
      data: data[0],
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      status: "Error mas, coba cek lagi",
      message: error.message,
    });
  }
});

//[DELETE] menghapus order (process order)
router.delete("/:id_pesanan", async (req, res) => {
  try {
    // mengambil id dari parameter
    const { id_pesanan } = req.params;

    // Execute query ke database 
    const query = "DELETE FROM order_mobil"
    /* const query =
      "DELETE FROM order_mobil WHERE `order_mobil`.`id_pesanan` = ?"; */
    await connection.promise().query(query, [id_pesanan]);

    // mengirimkan respons jika berhasil
    res.status(200).json({
      status: "Success",
      message: "Data order berhasil diproses",
    });
  } catch (error) {
    // mengirimkan respons jika gagal
    res.status(error.statusCode || 500).json({
      status: "Error bestiee",
      message: error.message,
    });
  }
});

module.exports = router;
