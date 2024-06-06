//const { disconnect } = required("process");

// Ngambil elemen form
const formulir = document.querySelector("form");

// // Bikin trigger event submit pada elemen form
formulir.addEventListener("submit", (e) => {
  e.preventDefault();
  kirim();
});

function kirim() {
  // Ngambil elemen input
  const elemen_nama = document.querySelector("#id_model");
  const elemen_client = document.querySelector("#nama");
  const elemen_alamat = document.querySelector("#alamat");
  const elemen_jumlah = document.querySelector("#jumlah");

  // Ngambil value (id) dari elemen input
  const id = elemen_nama.dataset.id;
  const id_mobil = elemen_nama.value;
  const client = elemen_client.value;
  const alamat = elemen_alamat.value;
  const jumlah = elemen_jumlah.value;

  // Tambah catatan
  axios
    .post("https://user-2msivnarsq-et.a.run.app/client", {
      //"https://dosen-llz4uecrhq-et.a.run.app/dosen"
      id_mobil,
      client,
      alamat,
      jumlah,
    })
    .then(() => {
      // bersihin formnya
      elemen_nama.dataset.id = "";
      elemen_nama.value = "";
      elemen_client.value = "";
      elemen_alamat.value = "";
      elemen_jumlah.value = "";

      // manggil fungsi get catatan biar datanya di-refresh
      getCatatanMobil();
    })
    .catch((error) => console.log(error.message));
}

// Ngambil catatan list mobil
function getCatatanMobil() {
  //ini gweh coba bikin sendiri
  axios
    .get("https://user-2msivnarsq-et.a.run.app/client") //"https://dosen-llz4uecrhq-et.a.run.app/dosen"
    .then(({ data }) => {
      const table = document.querySelector("#table-client");
      const { data: cars } = data;
      let tampilan = "";
      let no = 1;

      for (const car of cars) {
        tampilan += displayMobil(no, car);
        no++;
      }
      table.innerHTML = tampilan;

      getOrderRequirement();
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
      <td class="id_mobil">${cars.id}</td>
      <td class="horsepower">${cars.horsepower}</td>
      <td class="tahun">${cars.th_produksi}</td>
      <td><button data-id=${cars.id} class='btn-edit'>Pilih</button></td>
    </tr>
  `;
}

function getOrderRequirement() {
  const kumpulan_tombol_edit = document.querySelectorAll(".btn-edit");

  kumpulan_tombol_edit.forEach((tombol_edit) => {
    tombol_edit.addEventListener("click", () => {
      const id = tombol_edit.dataset.id;
      const model =
        tombol_edit.parentElement.parentElement.querySelector(
          ".model_mobil"
        ).innerText;
      const id_model =
        tombol_edit.parentElement.parentElement.querySelector(
          ".id_mobil"
        ).innerText;

      // Ngambil elemen input
      const elemen_nama = document.querySelector("#model_mobil");
      const elemen_id = document.querySelector("#id_model");

      elemen_nama.dataset.id = id;
      elemen_nama.value = model;
      elemen_id.value = id_model;
    });
  });
}

getCatatanMobil();
