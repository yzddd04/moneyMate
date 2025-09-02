# MoneyMate — Financial Education Platform

> Dokumentasi gambar (letakkan file di `public/screenshots/` atau `docs/screenshots/`).

| Halaman | Pratinjau |
|---|---|
| Landing | ![Landing](public/screenshots/landing.png) |
| MateLearn | ![MateLearn](public/screenshots/matelearn.png) |
| MateVest | ![MateVest](public/screenshots/matevest.png) |

Jika path berbeda, sesuaikan tautan di atas. Anda juga bisa menggunakan format HTML agar mengatur lebar gambar:

```html
<img src="public/screenshots/landing.png" alt="Landing" width="900" />
```


MoneyMate adalah platform edukasi finansial modern berbasis Next.js yang membantu pengguna belajar, menghitung, merencanakan, dan berinvestasi dengan percaya diri melalui konten interaktif dan alat simulasi.

## Isi Produk

- MateLearn
  - Konten video & artikel, carousel hero, pencarian, filter, bookmark, dan progress tracking per materi
  - Modal konten dilengkapi embed YouTube (responsive 16:9) untuk materi berformat video
  - Setiap artikel dapat menampilkan ringkasan dan “Full Article” (±500 kata)

- MateVest
  - Investment Calculator: perhitungan target/investasi (format angka konsisten, locale disesuaikan)
  - Investment Portfolio: analisis nilai masa depan dan hasil investasi
  - Investment Personality: kuisioner profil risiko tanpa indikator persen di header pertanyaan

## Demo Alur Utama

1) Landing (`/`)
   - Hero dengan tagline “Educate, Calculate, with MoneyMate”, CTA ke MateLearn
   - Trust (ticker/market cards dengan locale angka konsisten)
   - Features (kartu ringkas ke MateLearn dan MateVest)
   - Solutions (showcase dua pilar produk)
   - FAQ + Footer

2) MateLearn (`/learn`)
   - Hero carousel (auto-advance) + filter dan pencarian
   - Grid konten (video/artikel), bookmark, dan progress per item
   - Modal Detail
     - Jika type video → embed YouTube responsif
     - Jika artikel → menampilkan ringkasan dan Full Article (±500 kata)

3) MateVest (`/invest`)
   - Tiga tools: Calculator, Portfolio, Personality
   - Calculator dan Portfolio menampilkan angka dengan locale konsisten
   - Personality: progres pertanyaan, tanpa persen di heading, hasil profil risiko + rekomendasi

## Teknologi Utama

- Next.js 15.5.2 (App Router)
- React 18
- TypeScript
- Tailwind CSS (custom breakpoints: `xs: 390px`, `tablet: 820px`, `2xl: 1440px`)
- lucide-react (ikon)

## UX/Theme

- Mode gelap adalah default. Tema disimpan di `localStorage` dan diterapkan segera saat load untuk mencegah flash putih.
- Implementasi: `app/layout.tsx` menyisipkan inline script yang mengeset class `dark/light` sebelum hydration, dan `lib/theme-context.tsx` menjaga sinkronisasi state + DOM class.

Rincian Theme Architecture:
- Default: `dark`
- State: React Context (`ThemeProvider`) dengan `toggleTheme()`
- Penyimpanan: `localStorage.theme`
- Early-apply: inline IIFE di `app/layout.tsx` mencegah FOUC (flash putih)

## Pencegahan Hydration Mismatch

- Format angka yang dirender server dan client diseragamkan, misalnya:
  - `toLocaleString('en-US')` pada komponen pasar/stock dan chart tooltip
  - Hal ini mencegah perbedaan seperti `856,59` vs `856.59`

## Struktur Proyek (ringkas)

```
app/
  page.tsx                # Landing: Hero, Trust, Features, Solutions, FAQ, Footer
  layout.tsx              # Global layout, theme bootstrap script
  learn/                  # Halaman MateLearn (carousel, grid, modal konten)
  invest/                 # Halaman MateVest (hub)
    calculator/
    personality/
    portofolio/
components/
  Hero.tsx, Header.tsx, Footer.tsx, Trust.tsx, Features.tsx, Solutions.tsx, FAQ.tsx
  ui/* (komponen utilitas Tailwind/shadcn)
lib/
  theme-context.tsx       # Context & toggler tema
tailwind.config.ts        # Breakpoints & theme tokens
```

## Standar Kode & Aksesibilitas

- Penamaan variabel/komponen deskriptif, gaya fungsional, dan penghindaran nested yang dalam
- Kontras warna gelap/terang sudah diperhatikan; ikon menggunakan label aria bila relevan
- Navigasi link jelas, tombol mempunyai state hover/focus

## Menjalankan Secara Lokal

```bash
# 1) Instal dependency
npm install

# 2) Jalankan dev server (pilih salah satu)
npm run dev          # Next.js dev server
npm run dev:turbo    # Dev dengan Turbopack (lebih cepat)

# 3) Build/Export
npm run build        # Production build
npm run export       # Static export (opsional sesuai kebutuhan deploy)

# 4) Utilitas
npm run lint         # ESLint
npm run type-check   # TypeScript checking
```

## Build & Deploy

- Production build: `npm run build`
- Static export (opsional): `npm run export` → output ke `out/`
- Vercel/Node hosting: gunakan build Next.js standar; inline theme script aman diproduksi

## Konfigurasi & Variabel Lingkungan

Untuk saat ini tidak ada variabel environment yang wajib. Jika kelak ditambahkan (mis. API analytics), letakkan contoh pada `.env.example` dan dokumentasikan di sini.

## Konvensi & Catatan Implementasi

- Responsif untuk tiga target ukuran: 390×844 (mobile), 820×1180 (tablet), 1440×1024 (desktop)
- Warna dan gaya konsisten menggunakan utilitas Tailwind; aksen biru pada MateLearn & MateVest
- Beberapa dekorasi (bulatan) pada section tertentu dihapus untuk visual yang lebih bersih
- Ikon hero menggunakan ikon uang (`DollarSign`) agar sesuai identitas MoneyMate

## Roadmap Singkat

- Akun pengguna + sinkronisasi progress ke backend
- Export/Share rekomendasi portofolio (PDF/PNG)
- Integrasi analytics (privacy-friendly)
- Tema sistem (mengikuti prefers-color-scheme jika user belum memilih)

## Troubleshooting

- Tema kembali putih saat refresh
  - Pastikan inline theme bootstrap di `app/layout.tsx` tidak dihapus, dan `localStorage.theme` ter-set

- Hydration mismatch angka
  - Pastikan semua `toLocaleString()` diberi locale tetap, misal `'en-US'` atau `'id-ID'` sesuai konteks

## Kontribusi

1) Fork & clone repo
2) Buat branch fitur: `feat/nama-fitur`
3) Jalankan `npm run lint && npm run type-check` sebelum commit
4) Buat PR dengan deskripsi yang jelas dan screenshot bila UI berubah

## Lisensi

Proyek ini untuk tujuan edukasi/demonstrasi internal. Sesuaikan lisensi sesuai kebutuhan distribusi Anda.
