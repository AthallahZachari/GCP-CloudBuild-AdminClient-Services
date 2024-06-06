// Ngambil elemen form
const formulir = document.querySelector("form");

// // Bikin trigger event submit pada elemen form
formulir.addEventListener("submit", (e) => {
  e.preventDefault();
  kirim();
});

function kirim() {
  // Ngambil elemen input
  const elemen_nama = document.querySelector("#model_mobil");
  const elemen_konfigurasi = document.querySelector("#mesin");
  const elemen_power = document.querySelector("#horsepower");
  const elemen_tahun = document.querySelector("#tahun");

  // Ngambil value (id) dari elemen input
  const id = elemen_nama.dataset.id;
  const model_mobil = elemen_nama.value;
  const mesin = elemen_konfigurasi.value;
  const horsepower = elemen_power.value;
  const tahun = elemen_tahun.value;

  // Ngecek apakah harus POST atau PUT
  if (id == "") {
    // Tambah catatan
    axios
      .post("http://localhost:8081/cars", {
        //"https://dosen-llz4uecrhq-et.a.run.app/dosen"
        model_mobil,
        mesin,
        horsepower,
        tahun,
      })
      .then(() => {
        // bersihin formnya
        elemen_nama.dataset.id = "";
        elemen_nama.value = "";
        elemen_konfigurasi.value = "";
        elemen_power.value = "";
        elemen_tahun.value = "";

        // manggil fungsi get catatan biar datanya di-refresh
        getCatatanMobil();
      })
      .catch((error) => console.log(error.message));
  } else {
    axios
      .put(`http://localhost:8081/cars/${id}`, {
        //`https://dosen-llz4uecrhq-et.a.run.app/dosen/${id}`
        model_mobil,
        mesin,
        horsepower,
        tahun,
      })
      .then(() => {
        // bersihin formnya
        elemen_nama.dataset.id = "";
        elemen_nama.value = "";
        elemen_nidn.value = "";

        // manggil fungsi get catatan biar datanya direfresh
        getCatatanMobil();
      })
      .catch((error) => console.log(error));
  }
}

// Ngambil catatan list mobil
function getCatatanMobil() {
  //ini gweh coba bikin sendiri
  axios
    .get("http://localhost:8081/cars") //"https://dosen-llz4uecrhq-et.a.run.app/dosen"
    .then(({ data }) => {
      const table = document.querySelector("#table-mobil");
      const { data: cars } = data;
      let tampilan = "";
      let no = 1;

      for (const car of cars) {
        tampilan += displayMobil(no, car);
        no++;
      }
      table.innerHTML = tampilan;

      hapusCatatan();
      editCatatan();
    })
    .catch((error) => {
      console.log(error.message);
    });
}

function displayMobil(no, cars) {
  return `
    <tr>
      <td>${no}</td>
      <td class="model_mobil">${cars.car_model}</td>
      <td class="mesin">${cars.konfigurasi_mesin}</td>
      <td class="horsepower">${cars.horsepower}</td>
      <td class="tahun">${cars.th_produksi}</td>
      <td><button data-id=${cars.id} class='btn-edit'>Edit</button></td>
      <td><button data-id=${cars.id} class='btn-hapus'>Hapus</button></td>
    </tr>
  `;
}

// Ngambil catatan list order
function getCatatanOrder() {
  //ini gweh coba bikin sendiri
  axios
    .get("http://localhost:8081/orders") //"https://dosen-llz4uecrhq-et.a.run.app/dosen"
    .then(({ data }) => {
      const table = document.querySelector("#table-pesanan");
      const { data: orders } = data;
      let tampilan = "";
      let no = 1;

      if (orders.length === 0) {
        tampilan = "<tr><td colspan='6'>Dagangan ga laku...</td></tr>";
      } else {
        for (const order of orders) {
          tampilan += displayOrder(no, order);
          no++;
        }
      }

      table.innerHTML = tampilan;

      if (orders.length > 0) {
        hapusCatatanOrder();
        editCatatan();
      }

    })
    .catch((error) => {
      console.log(error.message);
    });
}

function displayOrder(no, orders) {
  return `
    <tr>
      <td>${no}</td>
      <td class="order_mobil">${/*orders.car_model*/orders.order_mobil}</td>
      <td class="jumlah">${orders.jumlah}</td>
      <td class="client">${orders.client}</td>
      <td class="client_address">${orders.client_address}</td>
      <td><button data-id=${orders.id_pesanan} class='btn_order'>Process Order</button></td>
    </tr>
  `;
}

//DELETE catatan list mobil
function hapusCatatan() {
  const kumpulan_tombol_hapus = document.querySelectorAll(".btn-hapus");

  kumpulan_tombol_hapus.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      axios
        .delete(`http://localhost:8081/cars/${id}`)
        .then(() => getCatatanMobil())
        .catch((error) => console.log(error));
    });
  });
}

//DELETE catatan order
function hapusCatatanOrder() {
  const kumpulan_tombol_hapus = document.querySelectorAll(".btn_order");

  kumpulan_tombol_hapus.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id_pesanan = btn.dataset.id;

      console.log(id_pesanan);
      axios
        .delete(`http://localhost:8081/orders/${id_pesanan}`)
        .then(() => getCatatanOrder())
        .catch((error) => console.log(error));
    });
  });
}

function editCatatan() {
  const kumpulan_tombol_edit = document.querySelectorAll(".btn-edit");

  kumpulan_tombol_edit.forEach((tombol_edit) => {
    tombol_edit.addEventListener("click", () => {
      const id = tombol_edit.dataset.id;
      const model =
        tombol_edit.parentElement.parentElement.querySelector(
          ".model_mobil"
        ).innerText;
      const spesifikasi =
        tombol_edit.parentElement.parentElement.querySelector(
          ".mesin"
        ).innerText;
      const power =
        tombol_edit.parentElement.parentElement.querySelector(
          ".horsepower"
        ).innerText;
      const tahun =
        tombol_edit.parentElement.parentElement.querySelector(
          ".tahun"
        ).innerText;

      // Ngambil elemen input
      const elemen_nama = document.querySelector("#model_mobil");
      const elemen_spesifikasi = document.querySelector("#mesin");
      const elemen_power = document.querySelector("#horsepower");
      const elemen_tahun = document.querySelector("#tahun");

      elemen_nama.dataset.id = id;
      elemen_nama.value = model;
      elemen_spesifikasi.value = spesifikasi;
      elemen_power.value = power;
      elemen_tahun.value = tahun;
    });
  });
}

getCatatanMobil();
getCatatanOrder();
