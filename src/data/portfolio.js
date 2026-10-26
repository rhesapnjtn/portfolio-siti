export const portfolioData = {
  personal: {
    name: "Siti Nuraini Tambunan",
    displayName: "Siti Nuraini",
    role: "Lulusan Sistem Informasi · Pengadaan & IT Support",
    badge: "Pengadaan & IT Support",
    tagline: "Mengubah Data Menjadi Kejelasan Operasional",
    bio: "Lulusan Sistem Informasi dari Universitas Advent Indonesia dengan minat kuat di bidang Pengadaan Barang/Jasa (Procurement) dan Teknologi Informasi. Berpengalaman dalam administrasi pengadaan, pengolahan data, serta manajemen dokumen—teliti, adaptif, dan siap berkontribusi mewujudkan operasional kerja yang lebih efisien dan terstruktur.",
    avatar: "/person.png",
    heroFull: "/portfolio-hero.png",
    status: {
      text: "Terbuka untuk Peluang Pengadaan & IT",
      isAvailable: true
    },
    location: "Matraman, Jakarta, Indonesia",
    degree: "Sarjana Sistem Informasi (S.Kom) — Universitas Advent Indonesia",
    gpa: "3.66 / 4.00",
    educationPeriod: "Agustus 2022 — Juni 2026",
    email: "tambunansiti260@gmail.com",
    phone: "+62 852-1620-4204",
    linkedin: "https://www.linkedin.com/in/sititambunan",
    whatsapp: "https://wa.me/6285216204204",
    cvFile: "/CV-Siti-Nuraini-Tambunan.pdf",
    cvUrl: "/CV-Siti-Nuraini-Tambunan.pdf"
  },

  heroTechPills: [
    { name: "Microsoft Excel", bg: "bg-[#FEF08A]", text: "text-[#121316]", border: "border-transparent" },
    { name: "SAP (Dasar)", bg: "bg-[#8B5CF6]/15", text: "text-[#6B21A8]", border: "border-[#8B5CF6]/30" },
    { name: "Inventaris IT", bg: "bg-white", text: "text-[#121316]", border: "border-[#121316]/10" },
    { name: "Pengolahan Data", bg: "bg-white", text: "text-[#121316]", border: "border-[#121316]/10" }
  ],

  quickNav: [
    { id: "projects", chapter: "03", label: "Karya Pengadaan", icon: "Briefcase", target: "#projects", color: "bg-[#8B5CF6]" },
    { id: "experience", chapter: "04", label: "Organisasi", icon: "Users2", target: "#experience", color: "bg-[#8B5CF6]" },
    { id: "about", chapter: "02", label: "Pendidikan", icon: "GraduationCap", target: "#about", color: "bg-[#8B5CF6]" },
    { id: "contact", chapter: "06", label: "Kontak", icon: "Mail", target: "#contact", color: "bg-[#8B5CF6]" }
  ],

  specSheet: [
    { label: "GELAR PENDIDIKAN", value: "Sarjana Sistem Informasi (S.Kom)" },
    { label: "UNIVERSITAS", value: "Universitas Advent Indonesia" },
    { label: "INDEKS PRESTASI (IPK)", value: "3.66 / 4.00" },
    { label: "PERIODE STUDI", value: "Agustus 2022 — Juni 2026" },
    { label: "STATUS SAAT INI", value: "Terbuka untuk Peluang Kerja", highlight: true },
    { label: "FOKUS UTAMA", value: "Administrasi Pengadaan & IT Support" },
    { label: "PERANGKAT KERJA", value: "Excel · Word · PowerPoint · SAP (Dasar) · Inventaris IT" },
    { label: "LOKASI DOMISILI", value: "Matraman, Jakarta" },
    { label: "PENGUASAAN BAHASA", value: "Bahasa Indonesia (Aktif) · Bahasa Inggris (TOEFL 470)" }
  ],

  education: {
    institution: "Universitas Advent Indonesia",
    program: "Sistem Informasi",
    degree: "Sarjana Sistem Informasi",
    degreeShort: "S.Kom",
    period: "Agustus 2022 — Juni 2026",
    graduation: "Lulus Juni 2026",
    gpa: "3.66",
    gpaMax: "4.00",
    gpaPercent: 91.5,
    credentials: [
      { label: "TOEFL", value: "470" },
      { label: "Alibaba Cloud Associate", value: "Apr 2024" },
      { label: "IT Specialist — Database", value: "Nov 2025" }
    ],
    milestones: [
      { year: "2022", title: "Mulai Studi", detail: "S1 Sistem Informasi — Universitas Advent Indonesia" },
      { year: "2024", title: "Sertifikasi Cloud", detail: "Alibaba Cloud Associate — April 2024" },
      { year: "2025", title: "Magang & Sertifikasi", detail: "PTPN IV Regional III · IT Specialist Database" },
      { year: "2026", title: "Lulus", detail: "S.Kom · IPK 3.66 / 4.00" }
    ],
    gallery: [
      {
        src: "/education/wisuda-01.jpg",
        thumb: "/education/wisuda-01-sm.jpg",
        alt: "Dokumentasi kelulusan Siti Nuraini Tambunan, 7 Juni 2026 — foto 1",
        label: "Arsip Kelulusan",
        meta: "07.06.2026",
        index: "01"
      },
      {
        src: "/education/wisuda-02.jpg",
        thumb: "/education/wisuda-02-sm.jpg",
        alt: "Dokumentasi kelulusan Siti Nuraini Tambunan, 7 Juni 2026 — foto 2",
        label: "Arsip Kelulusan",
        meta: "07.06.2026",
        index: "02"
      },
      {
        src: "/education/wisuda-03.jpg",
        thumb: "/education/wisuda-03-sm.jpg",
        alt: "Dokumentasi kelulusan Siti Nuraini Tambunan, 7 Juni 2026 — foto 3",
        label: "Arsip Kelulusan",
        meta: "07.06.2026",
        index: "03"
      }
    ]
  },

  projects: [
    {
      id: "01",
      title: "Administrasi Pengadaan IT",
      subtitle: "PTPN IV Regional III · Magang Pengadaan IT",
      role: "Intern Pengadaan IT",
      year: "2025",
      category: "Pengadaan",
      featured: true,
      description: "Mendukung proses administratif pengadaan Teknologi Informasi di PTPN IV Regional III—menyiapkan serta mengarsipkan surat permintaan, penawaran harga vendor, notulen rapat, dan berkas pendukung agar rekaman pengadaan selalu tertata rapi dan mudah ditelusuri.",
      problem: "Pengadaan TI memerlukan alur administrasi yang rapi, akuntabel, dan terdokumentasi dengan baik agar surat permintaan, penawaran harga vendor, dan dokumen pendukung dapat dilacak, diverifikasi, serta diserahterimakan secara transparan.",
      solution: "Menyiapkan dan mengarsipkan dokumen pengadaan secara teliti, berkoordinasi aktif dengan tim internal dan unit kerja terkait, serta menyusun rekapitulasi data pengadaan guna mendukung kegiatan pemantauan dan evaluasi operasional.",
      tags: ["Surat Permintaan Pembelian", "Penawaran Harga Vendor", "Notulen & Berita Acara", "Pelaporan Data", "Manajemen Dokumen"],
      metrics: [
        { label: "Periode", value: "Mei–Jul" },
        { label: "Tahun", value: "2025" },
        { label: "Fokus", value: "Pengadaan IT" }
      ],
      colorAccent: "#1D4ED8"
    },
    {
      id: "02",
      title: "Humas & Komunikasi Acara",
      subtitle: "Himpunan Mahasiswa FTI · Divisi Hubungan Masyarakat",
      role: "Anggota Divisi Humas",
      year: "2023–2024",
      category: "Organisasi",
      featured: true,
      description: "Berperan aktif dalam Divisi Humas untuk menyampaikan informasi kepada mahasiswa, organisasi intra-kampus, dan pihak eksternal—mengkoordinasikan publikasi informasi, komunikasi acara, dan keterlibatan peserta secara berkelanjutan.",
      problem: "Kegiatan kampus membutuhkan alur komunikasi yang jelas antar-divisi kepanitiaan serta narahubung yang sigap untuk menjembatani panitia, narasumber, sponsor, dan peserta.",
      solution: "Berkoordinasi dengan seluruh divisi dalam penyebaran publikasi, bertindak sebagai narahubung utama panitia terhadap peserta dan mitra eksternal, serta mendampingi pelaksanaan program kerja dari persiapan hingga evaluasi.",
      tags: ["Komunikasi Acara", "Publikasi Informasi", "Narahubung Mitra", "Keterlibatan Mahasiswa"],
      metrics: [
        { label: "Periode", value: "2023–24" },
        { label: "Peran", value: "Divisi Humas" },
        { label: "Lingkup", value: "Fakultas TI" }
      ],
      colorAccent: "#8B5CF6"
    },
    {
      id: "03",
      title: "Koordinasi Konsumsi Kegiatan",
      subtitle: "Badan Pengurus Asrama Putri · Divisi Konsumsi",
      role: "Anggota Divisi Konsumsi",
      year: "2024–2025",
      category: "Operasional Acara",
      featured: true,
      description: "Merencanakan kebutuhan konsumsi dan anggaran belanja untuk agenda keorganisasian asrama, menyelaraskan vendor katering dengan jumlah peserta serta jadwal acara secara efisien.",
      problem: "Setiap kegiatan memiliki jumlah peserta, susunan waktu, dan alokasi anggaran yang berbeda—kebutuhan konsumsi harus dihitung dengan cermat agar tepat jumlah, tepat waktu, dan tidak terjadi pemborosan.",
      solution: "Menyusun rincian kebutuhan konsumsi, mengkalkulasi anggaran belanja secara akurat, serta menjalin komunikasi intensif dengan panitia dan pihak katering agar distribusi makanan berjalan tepat waktu sesuai jadwal.",
      tags: ["Perencanaan Acara", "Kalkulasi Anggaran", "Koordinasi Vendor", "Logistik Katering"],
      metrics: [
        { label: "Periode", value: "2024–25" },
        { label: "Peran", value: "Divisi Konsumsi" },
        { label: "Lingkup", value: "Asrama Putri" }
      ],
      colorAccent: "#1D4ED8"
    },
    {
      id: "04",
      title: "Perencanaan Program Sosial & Budaya",
      subtitle: "Badan Eksekutif Mahasiswa · Departemen Sosial Budaya",
      role: "Anggota Departemen Sosial & Budaya",
      year: "2025–2026",
      category: "Organisasi",
      featured: true,
      description: "Merancang konsep kegiatan, lini masa kerja, susunan rundown, dan pembagian tugas kepanitiaan di Departemen Sosial Budaya sekaligus mengelola kelengkapan proposal, surat perizinan, dan laporan pertanggungjawaban (LPJ).",
      problem: "Program sosial dan kebudayaan berskala kampus membutuhkan perencanaan terpadu, pembagian tanggung jawab yang jelas, serta pencatatan administrasi yang lengkap mulai dari pengajuan proposal hingga LPJ akhir.",
      solution: "Menyusun jadwal kegiatan dan rundown terperinci, mendistribusikan penugasan panitia, berkoordinasi dengan pengurus inti BEM dan mitra kampus, serta menyusun proposal, surat-menyurat resmi, izin acara, hingga laporan LPJ.",
      tags: ["Perencanaan Program", "Rundown Acara", "Koordinasi Panitia", "Proposal & Izin", "Laporan LPJ"],
      metrics: [
        { label: "Periode", value: "2025–26" },
        { label: "Peran", value: "Sosial Budaya" },
        { label: "Organisasi", value: "BEM Kampus" }
      ],
      colorAccent: "#8B5CF6"
    }
  ],

  experiences: [
    {
      period: "Mei 2025 — Juli 2025",
      role: "Intern Pengadaan IT",
      company: "PTPN IV Regional III",
      type: "Program Magang",
      location: "Regional III",
      description: "Mendukung kelancaran alur administrasi pengadaan perangkat dan layanan Teknologi Informasi secara sistematis, terstruktur, dan terdokumentasi dengan baik.",
      highlights: [
        "Menyiapkan, mengarsipkan, dan mengelola dokumen pengadaan meliputi surat permintaan pembelian, penawaran harga vendor, notulen rapat, dan berkas pendukung.",
        "Berkoordinasi secara aktif dengan tim internal dan unit kerja terkait agar tahapan administrasi pengadaan berjalan sesuai SOP dan jadwal yang ditentukan.",
        "Menyusun dan merekapitulasi laporan data pengadaan barang/jasa guna mendukung proses monitoring serta evaluasi berkala.",
        "Memelihara kerapian arsip fisik dan digital sehingga seluruh rekam jejak pengadaan dapat ditelusuri dengan cepat dan akurat."
      ],
      statusPill: "Magang"
    },
    {
      period: "September 2023 — September 2024",
      role: "Anggota Divisi Hubungan Masyarakat",
      company: "Himpunan Mahasiswa Fakultas Teknologi Informasi",
      type: "Pengalaman Organisasi",
      location: "Universitas Advent Indonesia",
      description: "Membangun komunikasi yang komunikatif dan efektif dengan mahasiswa, lembaga internal kampus, serta pihak eksternal untuk mendukung keberhasilan program kerja.",
      highlights: [
        "Berkoordinasi dengan seluruh divisi dalam mempublikasikan kegiatan organisasi demi meningkatkan antusiasme dan partisipasi mahasiswa.",
        "Bertindak sebagai narahubung utama antara panitia penyelenggara dengan peserta, narasumber, sponsor, dan mitra kolaborasi.",
        "Terlibat aktif dalam setiap tahapan program kerja—mulai dari tahap perencanaan, persiapan teknis, pelaksanaan di lapangan, hingga evaluasi akhir."
      ],
      statusPill: "Organisasi"
    },
    {
      period: "September 2024 — September 2025",
      role: "Anggota Divisi Konsumsi",
      company: "Badan Pengurus Asrama Putri",
      type: "Pengalaman Organisasi",
      location: "Universitas Advent Indonesia",
      description: "Merencanakan kebutuhan menu, logistik katering, dan alokasi anggaran konsumsi untuk berbagai agenda keorganisasian asrama berdasarkan jumlah peserta.",
      highlights: [
        "Menyusun rincian kebutuhan konsumsi secara terperinci dan menghitung alokasi anggaran belanja secara efisien dan hemat biaya.",
        "Menjalin koordinasi intensif dengan panitia pelaksana, pihak penyedia katering, dan unit asrama untuk menjamin hidangan tersaji tepat waktu sesuai jadwal acara."
      ],
      statusPill: "Organisasi"
    },
    {
      period: "September 2025 — Mei 2026",
      role: "Anggota Departemen Sosial & Budaya",
      company: "Badan Eksekutif Mahasiswa (BEM)",
      type: "Pengalaman Organisasi",
      location: "Universitas Advent Indonesia",
      description: "Merancang konsep tematik, lini masa pelaksanaan acara, dan dukungan administrasi terpadu untuk berbagai agenda kerja Departemen Sosial Budaya.",
      highlights: [
        "Menyusun jadwal kegiatan (timeline), rundown acara terperinci, serta pembagian tugas panitia agar kegiatan terlaksana sesuai rencana.",
        "Berkoordinasi berkala dengan pimpinan BEM, panitia pelaksana, dan pihak kampus selama tahap persiapan hingga pelaksanaan selesai.",
        "Mengelola tertib administrasi kegiatan, termasuk pembuatan proposal kegiatan, surat-menyurat resmi, izin pelaksanaan, hingga laporan pertanggungjawaban (LPJ)."
      ],
      statusPill: "Organisasi"
    }
  ],

  skillCategories: [
    {
      name: "Perangkat Lunak & Sistem",
      icon: "Monitor",
      description: "Aplikasi perkantoran, sistem enterprise, dan inventaris yang digunakan untuk kegiatan operasional dan administrasi harian.",
      skills: [
        { name: "Microsoft Excel", tag: "Data & Pelaporan" },
        { name: "Microsoft Word", tag: "Dokumentasi & Surat" },
        { name: "Microsoft PowerPoint", tag: "Presentasi Kerja" },
        { name: "SAP (Dasar)", tag: "Tingkat Dasar" },
        { name: "Inventaris IT", tag: "Praktik Terapan" }
      ]
    },
    {
      name: "Pengolahan Data & Administrasi",
      icon: "Database",
      description: "Pengorganisasian data dan rekaman kerja agar informasi selalu akurat, tersusun sistematis, dan mudah diakses.",
      skills: [
        { name: "Pengolahan Data (Data Processing)", tag: "Praktik Terapan" },
        { name: "Administrasi Pengadaan (Procurement)", tag: "Pengalaman Magang" },
        { name: "Manajemen Dokumen & Arsip", tag: "Praktik Terapan" },
        { name: "Penyusunan Rekapitulasi & Laporan", tag: "Praktik Terapan" },
        { name: "Konsep Dasar Basis Data", tag: "Tersertifikasi" }
      ]
    },
    {
      name: "Kolaborasi & Manajemen Kerja",
      icon: "Users",
      description: "Koordinasi aktif lintas tim, komunikasi profesional, serta kepatuhan pada jadwal dan tenggat waktu kerja.",
      skills: [
        { name: "Komunikasi Interpersonal", tag: "Keahlian Inti" },
        { name: "Kolaborasi Tim", tag: "Keahlian Inti" },
        { name: "Koordinasi & Negosiasi Ringan", tag: "Keahlian Inti" },
        { name: "Penyelesaian Masalah (Problem Solving)", tag: "Keahlian Inti" },
        { name: "Ketelitian & Kerapian Dokumen", tag: "Keahlian Inti" }
      ]
    },
    {
      name: "Bahasa & Sertifikasi Resmi",
      icon: "Award",
      description: "Sertifikasi keahlian dan kompetensi bahasa yang mendukung kemampuan teknologi informasi, data, dan sistem.",
      skills: [
        { name: "Bahasa Indonesia", tag: "Bahasa Ibu / Fasih" },
        { name: "Bahasa Inggris", tag: "Skor TOEFL 470" },
        { name: "Alibaba Cloud Associate", tag: "Apr 2024" },
        { name: "IT Specialist — Database", tag: "Nov 2025" },
        { name: "Konsep Cloud & Database", tag: "Tersertifikasi" }
      ]
    }
  ]
};
