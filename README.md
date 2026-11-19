# AgriMatch

Website katalog hasil panen lokal dengan antarmuka responsif. Struktur halaman dan styling dibangun oleh JavaScript; tidak ada berkas `.html` di proyek.

## Menjalankan

Gunakan Node.js 18 atau lebih baru:

```powershell
node server.js
```

Buka `http://127.0.0.1:8000`.

## Fitur demo

- Pencarian dan filter pasokan berdasarkan nama, lokasi, dan kategori.
- Detail produk serta formulir permintaan pasokan.
- Dashboard untuk menambahkan hasil panen dan melihat ringkasan pasokan.
- Data pasokan dan permintaan disimpan di `localStorage` browser.

UI dan interaksi ada di `app.js`; server lokal ada di `server.js`. Form login belum terhubung ke layanan akun, dan data demo tidak dikirim ke backend.