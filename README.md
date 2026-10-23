# Editorial Tech Portfolio — Portofolio Kreatif dengan Aksen Ungu

Website portofolio modern dengan gaya **High-Editorial Magazine Minimalis** yang dibangun menggunakan **Vue.js 3 (Composition API)**, **Vite**, dan **Tailwind CSS**. Desain ini dirancang khusus mengikuti arahan [`DESIGN.md`](file:///screenshoot/DESIGN.md) dan referensi visual tangkapan layar [`screenshoot/Portofolio Kreatif dengan Aksen Ungu.png`](file:///screenshoot/Portofolio%20Kreatif%20dengan%20Aksen%20Ungu.png).

---

## 🎨 Karakteristik & Sistem Desain (DESIGN.md)

- **Estetika High-Fashion Magazine:** Grid majalah 12 kolom asimetris, tipografi display monumental, dan hairline framing halus.
- **Palet Warna:**
  - **Canvas Base:** `#FAF9FD` / `#F8F6F3`
  - **Ink / Tipografi Utama:** `#121316` / `#1B1B1F`
  - **Secondary Accent (Electric Lavender):** `#8B5CF6` (Aksen ungu khas untuk badge, fokus, dan ilustrasi visual)
  - **Primary Accent (Royal Cobalt):** `#1D4ED8` (Tombol aktif dan navigasi utama)
  - **Highlight (Butter Yellow):** `#FEF08A` (Pill tag teknologi dan penanda visual)
  - **Hairline Bounded:** `rgba(18, 19, 22, 0.08)` / `#E6E2DC`
  - **Micro-Shadows:** `2px 2px 0px #121316` (Hard-edge offset)
- **Hirarki Tipografi:**
  - **Display & Headline:** `Syne` (Bold 700 / 800)
  - **Body & Longform:** `Plus Jakarta Sans` (400 / 500 / 600)
  - **Labels, Metadata & Code:** `Space Grotesk` (Uppercase, tracked)
  - **Handwritten Notes:** `Caveat` (Aksen "Hi, I'm" & catatan tangan)

---

## 🚀 Fitur Utama Dari Atas ke Bawah

1. **Frosted Glass Navigation Bar:**
   - Logo bintang asterisk 8-sudut ungu berputar saat hover.
   - Menu navigasi interaktif (*Home*, *About*, *Experience*, *Projects*, *Skills*, *Contact*) dengan *scroll spy*.
   - Tombol **Download CV** yang membuka modal dossier CV interaktif dengan fitur cetak / simpan PDF.
   - Menu *responsive drawer* untuk pengguna mobile & tablet.

2. **Hero Section (Persis 1:1 Sesuai Screenshot):**
   - Counter folio top-right: `01 / 04` dengan garis hairline vertikal.
   - Teks raksasa **PORTFOLIO** menggunakan font `Syne`.
   - Doodle tangan *"Hi, I'm"* dengan percikan sinar kuning (*yellow radiant rays*).
   - Potret developer di bagian tengah dengan efek pendaran aura ungu halus (*ambient purple glow*).
   - Kolom kiri: Pill badge *"Web Developer"*, judul utama *"Turning Ideas into Digital Solutions"*, bio, dan pill teknologi (*Laravel*, *Vue.js*, *MySQL*, *Tailwind*).
   - Kolom kanan: Doodle loop kuning, catatan tangan ungu *"Let's build something great together!"*, serta 4 tombol akses cepat (*Web Development*, *Academic Projects*, *Organization*, *About Me*).
   - Bagian bawah: Tombol banner arang gelap *"Explore my work ──"* dan gelombang lengkung gradasi ungu (*Scroll Down ↓*).

3. **About Me & Engineering Spec Sheet:**
   - Notasi majalah editorial (`VOL. 26`, `NO. 03`, `MAGANGHUB 2026`).
   - *Pull quote* dengan border ungu lavender dan sorotan *Butter Yellow*.
   - **Engineering Spec Sheet:** Grid informasi terstruktur dengan status live berkedip `● Available for MagangHub 2026`, gelar akademik S1 Sistem Informasi (Cum Laude), dan kompetensi utama.

4. **Exhibition (Selected Works & Projects):**
   - Kartu proyek bergaya editorial dengan indeks nomor besar samar (`01`, `02`, `03`, `04`).
   - Tag teknologi dalam kapsul *Butter Yellow* (`#FEF08A`).
   - Metrik hasil terukur (*Lighthouse 98/100*, *+45% query speed*, *1,500+ records*).
   - Tombol **Inspect System** yang membuka modal arsitektur sistem (alur frontend, API layer, dan persistensi database).

5. **Trajectory (Experience Timeline):**
   - Timeline interaktif pencapaian kandidat *MagangHub 2026*, kepemimpinan di Himpunan Mahasiswa Sistem Informasi (HMSI), magang industri, dan asisten laboratorium.

6. **Technical Arsenal (Skills Taxonomy):**
   - Pembagian domain: *Frontend Development*, *Backend & Systems*, *Databases & Cloud*, dan *Design & Systems Thinking*.
   - Bar pengukur progres dengan gradasi warna kobalt ke lavender dan tag level keahlian.

7. **Get in Touch (Editorial Consultation):**
   - Formulir kontak minimalis dengan *bottom baseline rule* (`1.5px solid #121316`), input transparan, dan label *Space Grotesk*.
   - Kartu kontak langsung: tombol salin email dengan notifikasi *toast*, tautan WhatsApp, profil LinkedIn, dan repositori GitHub.

8. **Editorial Footer:**
   - Masthead publikasi majalah, folio cetak, navigasi cepat, dan tombol *Return to Top*.

---

## 🛠️ Struktur Berkas Proyek

```text
portofolio_siti/
├── public/
│   ├── logo-star.svg               # Logo ikon bintang ungu
│   ├── person_cutout.png           # Foto developer transparan
│   ├── person.png                  # Crop foto developer
│   └── portfolio-hero.png          # Asset hero komprehensif
├── screenshoot/
│   ├── DESIGN.md                   # Spesifikasi sistem desain
│   └── Portofolio Kreatif dengan Aksen Ungu.png  # Referensi visual
├── src/
│   ├── assets/                     # Asset gambar dan style
│   ├── components/
│   │   ├── Navbar.vue              # Navigasi sticky frosted
│   │   ├── HeroSection.vue         # Hero section 1:1 sesuai mockup
│   │   ├── AboutSection.vue        # About & Engineering Spec Sheet
│   │   ├── ProjectsSection.vue     # Kartu pameran proyek
│   │   ├── ExperienceSection.vue   # Timeline pengalaman & MagangHub
│   │   ├── SkillsSection.vue       # Taksonomi skill teknis
│   │   ├── ContactSection.vue      # Form konsultasi & kontak
│   │   ├── FooterSection.vue       # Footer editorial
│   │   ├── CvModal.vue             # Modal interaktif preview & cetak CV
│   │   └── ProjectModal.vue        # Modal inspeksi arsitektur sistem
│   ├── data/
│   │   └── portfolio.js            # Pusat data konten & profil
│   ├── App.vue                     # Root komponen aplikasi
│   ├── main.js                     # Inisialisasi Vue 3
│   └── style.css                   # Tailwind v4 tema & token desain
├── index.html                      # HTML root dengan Google Fonts
├── vite.config.js                  # Konfigurasi Vite & Tailwind plugin
└── package.json                    # Dependensi proyek
```

---

## 💻 Cara Menjalankan Proyek

### 1. Jalankan Mode Pengembangan (Dev Server)
```bash
npm run dev
```
Buka browser pada alamat yang ditampilkan (biasanya `http://localhost:5173`).

### 2. Membangun untuk Produksi (Production Build)
```bash
npm run build
```

### 3. Menjalankan Preview Hasil Build
```bash
npm run preview
```

---

## ✏️ Kustomisasi Data Portofolio

Semua teks, proyek, pengalaman kerja, kontak, dan tautan sosial dapat disesuaikan langsung di satu tempat pada berkas:
[`src/data/portfolio.js`](file:///src/data/portfolio.js).
