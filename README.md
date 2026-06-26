# 🏛️ SURYANAGARI — Website Wisata Trowulan Majapahit

> Website resmi paket wisata **Suryanagari**, destinasi wisata sejarah Kerajaan Majapahit di kawasan Trowulan, Mojokerto, Jawa Timur.

---

## 🌐 Apa Itu Aplikasi Ini?

**Suryanagari** adalah sebuah **website landing page** (halaman promosi digital) yang dirancang untuk memperkenalkan dan memasarkan paket wisata sejarah di kawasan Trowulan, Mojokerto.

Website ini bisa diakses oleh siapa saja melalui browser (Chrome, Firefox, Safari, dll.) di **HP maupun komputer**, tanpa perlu menginstal apapun.

---

## ✨ Fitur-Fitur Website

### 🏠 Halaman Utama (Hero)
Tampilan pembuka yang menarik dengan foto latar destinasi wisata dan tombol aksi untuk langsung melihat paket atau melakukan booking.

### 📖 Tentang Kami (About)
Menjelaskan secara singkat visi, misi, dan keunikan wisata Suryanagari — mengangkat kekayaan sejarah Kerajaan Majapahit.

### 🖼️ Galeri Foto
Koleksi foto destinasi wisata seperti Candi Tikus, Kolam Segaran, Wringin Lawang, dan berbagai situs bersejarah lainnya.

### 📦 Paket Wisata
Tiga pilihan paket yang bisa dipilih sesuai kebutuhan:

| Paket | Waktu | Harga |
|---|---|---|
| **Suryanagari** | 08.00 – 15.00 WIB | Rp 270.000/orang |
| **Sandyakala** | 15.00 – 21.00 WIB | Rp 350.000/orang |
| **Candramawa** | 15.00 – 09.00 WIB (menginap) | Rp 650.000/orang |

Setiap paket menampilkan detail destinasi, highlights, dan tombol booking langsung.

### 🗺️ Itinerary
Jadwal perjalanan lengkap per paket — mulai dari jam berapa, destinasi apa saja yang dikunjungi, sampai estimasi waktu di setiap lokasi.

### 📱 QR Experience
Fitur inovatif di mana setiap titik destinasi fisik memiliki **QR Code** yang bisa di-scan menggunakan kamera HP. Setelah scan, pengunjung akan mendapatkan:
- 📚 Informasi sejarah dan cerita lokal
- 🏆 Quiz interaktif berhadiah
- 🎫 Digital Passport (kumpulkan stamp di tiap lokasi)

### 🎯 Kegiatan Wisata
Daftar aktivitas yang tersedia: Tur Bersejarah, Meditasi & Yoga, dan Wisata Keluarga.

### 💬 Testimoni
Ulasan nyata dari pengunjung yang sudah pernah berwisata bersama Suryanagari.

### 📝 Booking
Form pemesanan langsung di website. Tamu bisa mengisi nama, tanggal kunjungan, jumlah orang, dan memilih paket.

### 🎵 Background Music
Musik ambient khas Nusantara (oleh Donkgedank) yang otomatis berjalan saat website dibuka, dengan tombol play/pause di pojok kanan bawah.

### 💬 Tombol WhatsApp
Tombol cepat di pojok kanan bawah untuk langsung menghubungi tim Suryanagari via WhatsApp.

### 🏛️ Halaman Destinasi Khusus
Website juga memiliki halaman khusus untuk masing-masing destinasi wisata yang menampilkan gambar dan cerita sejarahnya:
- [/bajang-ratu](/bajang-ratu) — Candi Bajang Ratu
- [/candi-brahu](/candi-brahu) — Candi Brahu
- [/candi-tribuana](/candi-tribuana) — Candi Tribuana Tunggadewi
- [/candi-kedaton](/candi-kedaton) — Candi Kedaton & Sumur Upas
- [/gapura-wringin-lawang](/gapura-wringin-lawang) — Gapura Wringin Lawang
- [/kampung-batik](/kampung-batik) — Kampung Batik Trowulan
- [/kawasan-jatisumber](/kawasan-jatisumber) — Kawasan Jatisumber (Pohon Keramat)
- [/sentra-patung](/sentra-patung) — Sentra Pembuatan Patung Trowulan

---

## 🚀 Cara Menjalankan Website (untuk Developer)

> Bagian ini untuk tim teknis yang perlu mengelola atau mengembangkan website.

### Prasyarat
Pastikan sudah terinstall di komputer:
- [Node.js](https://nodejs.org/) versi 18 ke atas
- Aplikasi terminal (Command Prompt, PowerShell, atau Terminal)

### Langkah-langkah

**1. Download / Clone project ini**
```bash
git clone <url-repository>
cd app
```

**2. Install semua dependensi (library yang dibutuhkan)**
```bash
npm install
```
> ⏳ Proses ini membutuhkan koneksi internet dan mungkin memakan waktu beberapa menit.

**3. Jalankan website di komputer lokal**
```bash
npm run dev
```
> Setelah berhasil, buka browser dan ketik `http://localhost:5173` di address bar.

**4. Build untuk production (upload ke hosting)**
```bash
npm run build
```
> Hasil build akan tersimpan di folder `dist/` — folder inilah yang di-upload ke server/hosting.

---

## 📁 Struktur Folder (Gambaran Umum)

```
app/
├── public/              ← File gambar, audio, dan aset statis
│   ├── images/          ← Foto-foto destinasi wisata
│   └── voice/           ← File musik background
├── src/
│   ├── sections/        ← Setiap bagian halaman (Hero, About, dll.)
│   ├── components/      ← Komponen kecil yang digunakan ulang
│   └── App.tsx          ← File utama yang menyusun semua bagian
├── index.html           ← Pintu masuk website
└── package.json         ← Daftar library yang digunakan
```

---

## 🛠️ Teknologi yang Digunakan

| Teknologi | Fungsi |
|---|---|
| **React** | Framework untuk membangun tampilan website |
| **TypeScript** | Bahasa pemrograman (versi JavaScript yang lebih aman) |
| **Vite** | Tools untuk menjalankan & build website dengan cepat |
| **Tailwind CSS** | Framework untuk styling/desain tampilan |
| **GSAP** | Library animasi halus saat scroll |
| **Lenis** | Smooth scroll (scroll halus seperti di majalah digital) |

---

## 📞 Kontak

- 📍 Kawasan Cagar Budaya Trowulan, Mojokerto, Jawa Timur
- 📧 info@suryanagari.com
- 📱 WhatsApp: +62 812-3456-7890

---

> Est. 2026 · © 2026 Suryanagari. All rights reserved.
> 🎵 *Background music provided by Donkgedank — BANDHAWA (Backsound Nusantara)*
