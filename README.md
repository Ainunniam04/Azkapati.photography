# Kanya Studio — Website Wedding Photography

Website statis (HTML + CSS + JS murni, tanpa framework atau proses build) untuk bisnis fotografi pernikahan. Dibuat agar mudah di-hosting gratis lewat **GitHub Pages**.

## Struktur folder

```
wedding-photography/
├── index.html          → Semua konten halaman (teks, harga, kontak)
├── css/style.css        → Semua styling & warna
├── js/script.js         → Menu mobile + form kontak
└── assets/images/       → Gambar placeholder (GANTI dengan foto asli Anda)
```

## Yang perlu Anda ganti sebelum publish

1. **Foto** — di `assets/images/`, ganti semua file `.svg` placeholder dengan foto asli (format `.jpg`/`.webp` disarankan untuk ukuran file lebih kecil). Nama file boleh sama, atau ubah nama lalu sesuaikan path di `index.html` (atribut `src`).
   - `hero.svg` → foto utama di bagian atas
   - `about.svg` → foto studio/fotografer
   - `paket-silver.svg`, `paket-gold.svg`, `paket-platinum.svg` → foto contoh hasil tiap paket
   - `gallery-1.svg` s.d. `gallery-3.svg` → cuplikan portofolio

2. **Teks & harga** — buka `index.html`, cari bagian `<!-- ===== PAKET HARGA ===== -->` untuk mengubah nama paket, harga, spesifikasi, dan barang yang didapat. Semua teks lain (nama studio, deskripsi "Tentang Kami", statistik) juga bisa diedit langsung di file ini.

3. **Kontak & sosial media** — cari bagian `<!-- ===== KONTAK ===== -->`:
   - Ganti nomor WhatsApp di `https://wa.me/6281234567890`
   - Ganti email di `mailto:hello@kanyastudio.id`
   - Ganti alamat studio
   - Ganti link Instagram/TikTok/Facebook

4. **Form kontak** — saat ini form hanya menampilkan pesan konfirmasi di layar (belum benar-benar mengirim data ke mana pun). Ada dua pilihan mudah, dijelaskan sebagai komentar di `js/script.js`:
   - Pakai layanan gratis seperti Formspree/Web3Forms, atau
   - Arahkan otomatis ke WhatsApp (kode contohnya sudah disiapkan, tinggal aktifkan).

## Cara publish ke GitHub Pages

1. Buat repository baru di GitHub, misalnya `wedding-photography`.
2. Upload semua isi folder ini ke repository tersebut (lewat GitHub Desktop, web upload, atau `git push`).
3. Di repository, buka **Settings → Pages**.
4. Pada bagian **Source**, pilih branch `main` dan folder `/ (root)`, lalu **Save**.
5. Tunggu 1-2 menit, GitHub akan memberi Anda alamat seperti:
   `https://namauser.github.io/wedding-photography/`

Tidak perlu instalasi Node.js, build tool, atau server — file HTML/CSS/JS ini langsung bisa dibuka di browser maupun di-host di GitHub Pages.

## Kustomisasi warna/font

Semua warna dan font didefinisikan sebagai variabel di bagian paling atas `css/style.css` (`:root { ... }`), jadi Anda bisa mengubah keseluruhan tampilan hanya dengan mengubah beberapa baris di sana.
