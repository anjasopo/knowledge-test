# Aplikasi REST API

Aplikasi ini menyediakan REST API untuk mengelola pengguna (users) dan produk (products).

## Basis URL
```
http://localhost:3000/api
```

## Daftar Rute

### 1. **Pengguna (Users)**

#### 1.1 Pendaftaran Pengguna Baru

- **Metode:** POST
- **Endpoint:** `/auth/register`
- **Deskripsi:** Mendaftarkan pengguna baru dengan informasi yang diberikan.
- **Request Body:**
  ```json
  {
    "name": "Nama Pengguna",
    "email": "contoh@email.com",
    "password": "katasandi",
    "gender": "Male/Female"
  }
  ```
- **Response Sukses:**
  ```json
  {
    "_id": "id_pengguna",
    "name": "Nama Pengguna",
    "email": "contoh@email.com",
    "gender": "Male/Female"
  }
  ```
- **Response Gagal:**
  ```json
  {
    "error": "Deskripsi Kesalahan"
  }
  ```

#### 1.2 Masuk (Login)

- **Metode:** POST
- **Endpoint:** `/auth/login`
- **Deskripsi:** Memeriksa kredensial pengguna dan menghasilkan token akses.
- **Request Body:**
  ```json
  {
    "email": "contoh@email.com",
    "password": "katasandi"
  }
  ```
- **Response Sukses:**
  ```json
  {
    "user": {
      "_id": "id_pengguna",
      "name": "Nama Pengguna",
      "email": "contoh@email.com",
      "gender": "Male/Female"
    },
    "token": "token_jwt"
  }
  ```
- **Response Gagal:**
  ```json
  {
    "error": "Deskripsi Kesalahan"
  }
  ```

#### 1.3 Profil Pengguna

- **Metode:** GET
- **Endpoint:** `/auth/profile`
- **Deskripsi:** Mendapatkan profil pengguna yang terautentikasi.
- **Request Header:**
  ```
  Authorization: Bearer [token_jwt]
  ```
- **Response Sukses:**
  ```json
  {
    "_id": "id_pengguna",
    "name": "Nama Pengguna",
    "email": "contoh@email.com",
    "gender": "Male/Female"
  }
  ```
- **Response Gagal:**
  ```json
  {
    "error": "Deskripsi Kesalahan"
  }
  ```

### 2. **Produk (Products)**

#### 2.1 Semua Produk

- **Metode:** GET
- **Endpoint:** `/products`
- **Deskripsi:** Mendapatkan semua produk yang tersedia.
- **Response Sukses:**
  ```json
  [
    {
      "_id": "id_produk",
      "name": "Nama Produk",
      "description": "Deskripsi Produk",
      "price": 12345
    },
    // ... daftar produk lainnya
  ]
  ```
- **Response Gagal:**
  ```json
  {
    "error": "Deskripsi Kesalahan"
  }
  ```

#### 2.2 Produk Berdasarkan ID

- **Metode:** GET
- **Endpoint:** `/products/:id`
- **Deskripsi:** Mendapatkan detail produk berdasarkan ID.
- **Response Sukses:**
  ```json
  {
    "_id": "id_produk",
    "name": "Nama Produk",
    "description": "Deskripsi Produk",
    "price": 12345
  }
  ```
- **Response Gagal:**
  ```json
  {
    "error": "Deskripsi Kesalahan"
  }
  ```

#### 2.3 Menambahkan Produk Baru

- **Metode:** POST
- **Endpoint:** `/products`
- **Deskripsi:** Menambahkan produk baru.
- **Request Header:**
  ```
  Authorization: Bearer [token_jwt]
  ```
- **Request Body:**
  ```json
  {
    "name": "Nama Produk Baru",
    "description": "Deskripsi Produk Baru",
    "price": 6789
  }
  ```
- **Response Sukses:**
  ```json
  {
    "_id": "id_produk",
    "name": "Nama Produk Baru",
    "description": "Deskripsi Produk Baru",
    "price": 6789
  }
  ```
- **Response Gagal:**
  ```json
  {
    "error": "Deskripsi Kesalahan"
  }
  ```

#### 2.4 Memperbarui Produk Berdasarkan ID

- **Metode:** PUT
- **Endpoint:** `/products/:id`
- **Deskripsi:** Memperbarui produk berdasarkan ID.
- **Request Header:**
  ```
  Authorization

: Bearer [token_jwt]
  ```
- **Request Body:**
  ```json
  {
    "name": "Nama Produk yang Diperbarui",
    "description": "Deskripsi Produk yang Diperbarui",
    "price": 9999
  }
  ```
- **Response Sukses:**
  ```json
  {
    "_id": "id_produk",
    "name": "Nama Produk yang Diperbarui",
    "description": "Deskripsi Produk yang Diperbarui",
    "price": 9999
  }
  ```
- **Response Gagal:**
  ```json
  {
    "error": "Deskripsi Kesalahan"
  }
  ```

#### 2.5 Menghapus Produk Berdasarkan ID

- **Metode:** DELETE
- **Endpoint:** `/products/:id`
- **Deskripsi:** Menghapus produk berdasarkan ID.
- **Request Header:**
  ```
  Authorization: Bearer [token_jwt]
  ```
- **Response Sukses:**
  ```json
  {
    "_id": "id_produk",
    "name": "Nama Produk yang Dihapus",
    "description": "Deskripsi Produk yang Dihapus",
    "price": 12345
  }
  ```
- **Response Gagal:**
  ```json
  {
    "error": "Deskripsi Kesalahan"
  }
  ```

## Kesimpulan
Itulah dokumentasi lengkap terkait REST API. Pastikan untuk selalu menyertakan token akses yang valid dalam header untuk rute yang memerlukan otentikasi. Juga, bisa dipastikan untuk menangani kesalahan dengan baik dan memberikan respons yang sesuai. Semoga dokumentasi ini membantu dalam memahami cara menggunakan API yang sudah dibuat.