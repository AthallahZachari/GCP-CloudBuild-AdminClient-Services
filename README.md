## How to setup

1. Clone/Download repository ini, kemudian buka lewat kode editor.
2. Jalankan **Apache** dan **MySQL** melalui xampp
3. Buatlah sebuah database bernama "kampus_upnvy", kemudian import database bernama `kampus_upnvy.sql` yang berada pada projek ini ke dalam **MySQL**
4. Masuk ke terminal atau cmd. Pastikan terminal atau cmd berada pada root direktori projek.
5. Install dependency dengan cara mengetik `npm i` di terminal atau cmd, tunggu sampai selesai.
6. Jalankan service dengan cara mengetik `npm run dev` atau `npm run start`

## Dokumentasi

GET `/dosen`

Response:

Status Code: 200

```
{
  "status": "Success",
  "message": "Berhasil mengambil daftar dosen',
  "data": [
    {
      "id": 1,
      "nama": "Bagus Muhammad Akbar",
      "nidn": "0001088905"
    },
    ...
  ]
}
```

---

GET `/dosen/:id`

Response:

Status Code: 200

```
{
  "status": "Success",
  "message": "Berhasil mengambil dosen',
  "data": {
    "id": 1,
    "nama": "Bagus Muhammad Akbar",
    "nidn": "0001088905"
  },
}
```

---

POST `/dosen`

Content-type: application/json

Request Body:

```
{
  "nama": "Budi",
  "nidn": "123123123"
}
```

Response:

Status Code: 201

```
{
  "status": "Success",
  "message": "Berhasil menambahkan dosen",
}
```

---

PUT `/dosen/:id`

Content-type: application/json

Request Body:

```
{
  "nama": "Agus",
  "nidn": "1293123921"
}
```

Response:

Status Code: 201

```
{
  "status": "Success",
  "message": "Berhasil mengubah data dosen",
}
```

---

DELETE `/dosen/:id`

Response:

Status Code: 200

```
{
  "status": "Success",
  "message": "Berhasil menghapus dosen",
}
```
