# AgriMatch

Website katalog hasil panen lokal dengan antarmuka responsif. Struktur halaman dan styling dibangun oleh JavaScript; tidak ada berkas `.html` di proyek.

## Menjalankan

Gunakan Node.js 22 atau lebih baru:

```powershell
node server.js
```

Buka `http://127.0.0.1:8000`.

## Fitur demo

- Pencarian dan filter pasokan berdasarkan nama, lokasi, dan kategori.
- Detail produk serta formulir permintaan pasokan.
- Dashboard untuk menambahkan hasil panen dan melihat ringkasan pasokan.
- Data pasokan dan permintaan disimpan di `localStorage` browser.

UI dan interaksi ada di `app.js`; server ada di `server.js`. Form login belum terhubung ke layanan akun, dan data demo tidak dikirim ke backend.

## Deploy ke Render

`render.yaml` sudah menyiapkan web service gratis. Push perubahan ke GitHub, hubungkan repository ke Render, lalu buat Blueprint dari `render.yaml`. Render akan membangun service dan memberikan URL publik `*.onrender.com`. Paket gratis dapat tidur saat idle, sehingga akses pertama setelah idle mungkin perlu menunggu service menyala.