## How to setup locally

1. Clone/Download repository ini, kemudian buka lewat kode editor.
2. Jalankan **Apache** dan **MySQL** melalui xampp
3. Buatlah sebuah database bernama "kampus_upnvy", kemudian import database bernama `kampus_upnvy.sql` yang berada pada projek ini ke dalam **MySQL**
4. Masuk ke terminal atau cmd. Pastikan terminal atau cmd berada pada root direktori projek.
5. Install dependency dengan cara mengetik `npm i` di terminal atau cmd, tunggu sampai selesai.
6. Jalankan service dengan cara mengetik `npm run dev` atau `npm run start`.

## Dokumentasi

GET `/mahasiswa`

Response:

Status Code: 200

```
{
  "status": "Success",
  "message": "Berhasil mengambil daftar mahasiswa',
  "data": [
    {
      "id": 1,
      "nama": "Muhammad Rafli",
      "nim": "123210078"
    },
    ...
  ]
}
```

---

GET `/mahasiswa/:id`

Response:

Status Code: 200

```
{
  "status": "Success",
  "message": "Berhasil mengambil mahasiswa',
  "data": {
    "id": 1,
    "nama": "Muhammad Rafli",
    "nim": "123210078"
  },
}
```

---

POST `/mahasiswa`

Content-type: application/json

Request Body:

```
{
  "nama": "Budi",
  "nim": "123210050"
}
```

Response:

Status Code: 201

```
{
  "status": "Success",
  "message": "Berhasil menambahkan mahasiswa",
}
```

---

PUT `/todos/:id`

Content-type: application/json

Request Body:

```
{
  "nama": "Bagus",
  "nim": "123210051"
}
```

Response:

Status Code: 201

```
{
  "status": "Success",
  "message": "Berhasil mengubah mahasiswa",
}
```

---

DELETE `/todos/:id`

Response:

Status Code: 200

```
{
  "status": "Success",
  "message": "Berhasil menghapus mahasiswa",
}
```
