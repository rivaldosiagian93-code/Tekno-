# AgriMatch

Website katalog hasil panen lokal dengan antarmuka responsif. Struktur halaman dan styling dibangun oleh JavaScript; tidak ada berkas `.html` di proyek.

## Menjalankan

Gunakan Node.js 22 atau lebih baru dan siapkan database PostgreSQL (misalnya Supabase atau Neon). Atur `DATABASE_URL` ke connection string database tersebut sebelum menjalankan server:

```powershell
npm install
$env:DATABASE_URL = "postgresql://USER:PASSWORD@HOST:5432/DATABASE?sslmode=require"
npm start
```

Buka `http://127.0.0.1:8000`.

Tabel akun dan sesi dibuat otomatis saat server dimulai. Jangan masukkan connection string ke Git; gunakan environment variable. Form daftar membuat akun pembeli atau pemasok, dan login menggunakan email serta kata sandi. Kata sandi disimpan sebagai hash scrypt, bukan teks biasa; sesi menggunakan cookie HttpOnly dengan masa berlaku tujuh hari.

## Fitur

- Beranda marketplace responsif dengan kategori, produk unggulan, cara kerja, dan informasi untuk petani.
- Pencarian dan filter pasokan berdasarkan nama, lokasi, dan kategori.
- Detail produk serta formulir permintaan pasokan.
- Pendaftaran dan login akun pembeli/pemasok tersimpan di PostgreSQL.
- Katalog dapat dibuka tanpa akun; halaman pesanan memerlukan login dan dasbor memerlukan akun pemasok.
- Data produk, pesanan, dan pesan masih berupa demo yang disimpan di `localStorage` browser; belum dibagikan antar pengguna.

UI dan interaksi ada di `app.js`; API akun dan server ada di `server.js`; koneksi, skema, dan operasi database ada di `database.js`. Endpoint `/healthz` juga memeriksa koneksi database.

## Deploy ke Render

`render.yaml` menyiapkan web service gratis dan meminta `DATABASE_URL` saat Blueprint dibuat. Buat database PostgreSQL di penyedia pilihan Anda, lalu masukkan connection string-nya pada pengaturan environment Render. Push perubahan ke GitHub, hubungkan repository ke Render, lalu buat Blueprint dari `render.yaml`. Setelah deploy berhasil, Render memberikan URL publik `*.onrender.com` yang bisa dibuka orang lain tanpa akun untuk melihat katalog. Paket gratis dapat tidur saat idle, sehingga akses pertama setelah idle mungkin perlu menunggu service menyala.