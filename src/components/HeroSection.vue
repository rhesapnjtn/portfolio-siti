<template>
  <section
    id="home"
    ref="heroSection"
    class="relative min-h-screen pt-24 pb-16 lg:pb-0 flex flex-col justify-between overflow-hidden bg-[#FAF9FD]"
  >

    <!-- Main Hero Composition Area -->
    <div class="max-w-7xl mx-auto w-full px-6 lg:px-12 flex-1 flex flex-col justify-center relative my-auto z-10">

      <!-- DESKTOP HERO ARCHITECTURE (>= 1024px) -->
      <div class="hidden lg:block relative w-full">

        <!-- Top canvas: masthead + portrait -->
        <div class="relative w-full h-[600px]">

          <!-- LAYER 0 · Ambient Purple Glow -->
          <div class="absolute left-1/2 top-[54%] -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
            <div
              ref="glowLayer"
              class="w-[520px] h-[520px] rounded-full bg-[#8B5CF6]/20 blur-[110px] will-change-transform"
            ></div>
          </div>

          <!-- LAYER 1 · Micro editorial row (stays above the portrait) -->
          <div class="absolute inset-x-0 top-0 z-20 pointer-events-none select-none">
            <div class="hero-fade-up flex items-center justify-between border-b border-[#121316]/10 pb-2.5 font-['Space_Grotesk'] text-[10px] font-semibold uppercase tracking-[0.26em] text-[#8F91A0]" style="animation-delay: 520ms">
              <span>Folio Editorial</span>
              <span class="hidden xl:inline text-[#121316]/40">Sistem Informasi · Pengadaan &amp; IT Support</span>
              <span class="flex items-center gap-3">
                <span class="hidden sm:inline">Jakarta, ID</span>
                <span class="w-8 h-px bg-[#121316]/20"></span>
                <span class="text-[#121316]">01 / 06</span>
              </span>
            </div>
          </div>

          <!-- LAYER 1.5 · Giant word PORTFOLIO (Sits Behind Portrait: z-10) -->
          <div class="absolute inset-x-0 top-[48px] z-10 pointer-events-none select-none">
            <div ref="wordLayer" class="will-change-transform">
              <div class="overflow-hidden pb-1 -mb-1">
                <h1
                  aria-label="Portfolio"
                  class="flex items-end justify-between font-['Syne'] font-extrabold text-[clamp(64px,7.2vw,100px)] xl:text-[112px] leading-[0.85] tracking-[-0.05em]"
                >
                  <span class="inline-block overflow-hidden">
                    <span class="hero-word-inner hero-masked-word inline-block pointer-events-auto cursor-default">PORT</span>
                  </span>
                  <span class="inline-block overflow-hidden">
                    <span class="hero-word-inner hero-masked-word inline-block pointer-events-auto cursor-default" style="animation-delay: 0.2s">FOLIO</span>
                  </span>
                </h1>
              </div>
            </div>
          </div>

          <!-- LAYER 2 · Center Portrait (In front of letters T & F: z-20) -->
          <div class="absolute left-1/2 bottom-0 -translate-x-1/2 z-20 w-[490px] xl:w-[530px] max-w-full h-[580px] xl:h-[620px] flex items-end justify-center pointer-events-none xl:left-[calc(50%-55px)]">
            <div class="hero-portrait-in h-full w-full">
              <div ref="portraitLayer" class="h-full w-full will-change-transform">
                <img
                  src="/person-portrait.webp"
                  alt="Siti Nuraini Tambunan"
                  width="900"
                  height="1100"
                  fetchpriority="high"
                  class="h-full w-full object-contain object-bottom drop-shadow-[0_20px_35px_rgba(18,19,22,0.18)] select-none"
                />
              </div>
            </div>
          </div>

        </div>

        <!-- Copy band · flanks the portrait at xl, sits beneath it below xl -->
        <div class="relative z-20 mt-12 border-t border-[#121316]/10 pt-10 lg:absolute lg:inset-x-0 lg:top-[200px] lg:mt-0 lg:border-t-0 lg:pt-0">
          <div class="grid grid-cols-12 items-start gap-x-10 gap-y-8 lg:grid-cols-[1fr_460px_1fr] xl:grid-cols-[280px_minmax(0,1fr)_401px]">

            <!-- Left: intro, headline, bio, tools -->
            <div class="col-span-7 lg:col-span-1 lg:col-start-1">
              <div ref="copyLayer" class="will-change-transform">

                <!-- Doodle: Halo, Saya + badge -->
                <div class="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <div class="hero-fade-up relative inline-block" style="animation-delay: 220ms">
                    <svg class="absolute -top-3.5 -right-6 w-6 h-6 text-[#EAB308]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                      <line x1="5" y1="12" x2="2" y2="10" />
                      <line x1="12" y1="5" x2="14" y2="2" />
                      <line x1="17" y1="9" x2="21" y2="7" />
                    </svg>
                    <span class="font-['Caveat'] text-3xl font-bold text-[#121316] tracking-wide -rotate-6 inline-block">
                      Halo, Saya
                    </span>
                  </div>

                  <span class="hero-fade-up inline-flex items-center px-4 py-1 rounded-full bg-[#8B5CF6]/15 text-[#7C3AED] text-sm font-semibold tracking-wide" style="animation-delay: 300ms">
                    Pengadaan &amp; IT Support
                  </span>
                </div>

                <!-- Main Headline -->
                <h2 class="hero-fade-up font-['Syne'] font-bold text-[clamp(32px,3vw,44px)] xl:text-[34px] leading-[1.1] tracking-[-0.025em] text-[#121316] mb-4 max-w-[560px] xl:max-w-none" style="animation-delay: 380ms">
                  Mengubah Data<br />Menjadi Kejelasan Operasional
                </h2>

                <!-- Subtitle Bio -->
                <p class="hero-fade-up font-['Plus_Jakarta_Sans'] text-[15px] xl:text-[14px] leading-relaxed text-[#575965] mb-6 max-w-[520px] xl:max-w-none" style="animation-delay: 460ms">
                  Lulusan Sistem Informasi dari Universitas Advent Indonesia, berfokus pada administrasi pengadaan, pengolahan data, dan manajemen dokumen yang menjaga operasional tetap rapi dan terukur.
                </p>

                <!-- Key tools -->
                <div class="hero-fade-up flex flex-wrap items-center gap-2.5 xl:gap-2" style="animation-delay: 540ms">
                  <span class="px-5 py-1.5 xl:px-4 rounded-full bg-[#FEF08A] text-[#121316] text-xs font-['Space_Grotesk'] font-bold tracking-wider uppercase border border-black/5 shadow-2xs transition-transform hover:scale-105">
                    Excel
                  </span>
                  <span class="px-5 py-1.5 xl:px-4 rounded-full bg-[#8B5CF6]/15 text-[#6B21A8] text-xs font-['Space_Grotesk'] font-bold tracking-wider uppercase border border-[#8B5CF6]/25 shadow-2xs transition-transform hover:scale-105">
                    SAP (Dasar)
                  </span>
                  <span class="px-5 py-1.5 xl:px-4 rounded-full bg-white text-[#121316] text-xs font-['Space_Grotesk'] font-bold tracking-wider uppercase border border-black/10 shadow-2xs transition-transform hover:scale-105">
                    Inventaris IT
                  </span>
                  <span class="px-5 py-1.5 xl:px-4 rounded-full bg-white text-[#121316] text-xs font-['Space_Grotesk'] font-bold tracking-wider uppercase border border-black/10 shadow-2xs transition-transform hover:scale-105">
                    Pengolahan Data
                  </span>
                </div>

              </div>
            </div>

            <!-- Right: handwritten note + quick links -->
            <div class="col-span-5 flex justify-end lg:col-span-1 lg:col-start-3">
              <div ref="navLayer" class="will-change-transform w-full max-w-[460px] flex flex-col items-end">

                <!-- Handwritten note + arrow in purple -->
                <div class="hero-fade-up relative mb-5 mr-2 max-w-[280px] text-right" style="animation-delay: 500ms">
                  <svg class="absolute -left-9 bottom-0 w-7 h-7 text-[#8B5CF6] -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4c0 8 4 12 12 14" />
                    <polyline points="12 14 16 18 12 22" />
                  </svg>
                  <p class="font-['Caveat'] text-2xl font-bold text-[#8B5CF6] leading-tight rotate-1">
                    Mari wujudkan alur kerja lebih lancar bersama!
                  </p>
                </div>

                <!-- Quick Navigation Cards -->
                <div class="hero-fade-up grid w-full grid-cols-2 gap-3" style="animation-delay: 560ms">

                  <button
                    @click="$emit('navigate-page', { id: 'projects', name: 'Karya Pilihan', chapter: 'BAB 03', href: '#projects' })"
                    class="group flex items-center gap-3 rounded-2xl border border-black/5 bg-white/70 p-3.5 transition-all duration-200 hover:bg-white hover:shadow-sm cursor-pointer text-left"
                  >
                    <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#8B5CF6]/12 text-[#7C3AED] transition-colors duration-200 group-hover:bg-[#8B5CF6] group-hover:text-white">
                      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                    </span>
                    <span class="text-[13px] font-semibold leading-snug text-[#121316] transition-colors group-hover:text-[#7C3AED]">
                      Karya Pengadaan
                    </span>
                  </button>

                  <button
                    @click="$emit('navigate-page', { id: 'experience', name: 'Pengalaman', chapter: 'BAB 04', href: '#experience' })"
                    class="group flex items-center gap-3 rounded-2xl border border-black/5 bg-white/70 p-3.5 transition-all duration-200 hover:bg-white hover:shadow-sm cursor-pointer text-left"
                  >
                    <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#8B5CF6]/12 text-[#7C3AED] transition-colors duration-200 group-hover:bg-[#8B5CF6] group-hover:text-white">
                      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </span>
                    <span class="text-[13px] font-semibold leading-snug text-[#121316] transition-colors group-hover:text-[#7C3AED]">
                      Organisasi
                    </span>
                  </button>

                  <button
                    @click="$emit('navigate-page', { id: 'about', name: 'Tentang Saya', chapter: 'BAB 02', href: '#about' })"
                    class="group flex items-center gap-3 rounded-2xl border border-black/5 bg-white/70 p-3.5 transition-all duration-200 hover:bg-white hover:shadow-sm cursor-pointer text-left"
                  >
                    <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#8B5CF6]/12 text-[#7C3AED] transition-colors duration-200 group-hover:bg-[#8B5CF6] group-hover:text-white">
                      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    </span>
                    <span class="text-[13px] font-semibold leading-snug text-[#121316] transition-colors group-hover:text-[#7C3AED]">
                      Pendidikan &amp; Profil
                    </span>
                  </button>

                  <button
                    @click="$emit('navigate-page', { id: 'contact', name: 'Kontak', chapter: 'BAB 06', href: '#contact' })"
                    class="group flex items-center gap-3 rounded-2xl border border-black/5 bg-white/70 p-3.5 transition-all duration-200 hover:bg-white hover:shadow-sm cursor-pointer text-left"
                  >
                    <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#8B5CF6]/12 text-[#7C3AED] transition-colors duration-200 group-hover:bg-[#8B5CF6] group-hover:text-white">
                      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </span>
                    <span class="text-[13px] font-semibold leading-snug text-[#121316] transition-colors group-hover:text-[#7C3AED]">
                      Kontak Langsung
                    </span>
                  </button>

                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <!-- MOBILE / TABLET HERO ARCHITECTURE (< 1024px) -->
      <div class="lg:hidden flex flex-col items-center text-center pt-2 pb-8 space-y-6">

        <!-- Full-bleed Editorial Masthead -->
        <div class="-mx-6 w-[calc(100%+3rem)]">
          <div class="overflow-hidden">
            <h1 ref="mobileWordLayer" class="will-change-transform font-['Syne'] font-extrabold text-[clamp(36px,10vw,60px)] leading-[0.85] tracking-[-0.05em] text-center whitespace-nowrap">
              <span class="hero-word-inner hero-masked-word inline-block pointer-events-auto cursor-default">PORTFOLIO</span>
            </h1>
          </div>
          <div class="hero-fade-up mt-3 mx-6 flex items-center justify-between border-t border-[#121316]/10 pt-2.5 font-['Space_Grotesk'] text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8F91A0]" style="animation-delay: 240ms">
            <span>Folio Editorial</span>
            <span class="flex items-center gap-2">
              <span class="hidden sm:inline">Jakarta, ID</span>
              <span class="w-5 h-px bg-[#121316]/20"></span>
              <span class="text-[#121316]">01 / 06</span>
            </span>
          </div>
        </div>

        <!-- Central Portrait in Soft Frame -->
        <div class="hero-portrait-in relative w-full max-w-[350px] sm:max-w-[380px] mx-auto" style="animation-delay: 300ms">
          <div class="relative z-10 w-full rounded-3xl overflow-hidden bg-gradient-to-b from-[#8B5CF6]/10 via-[#8B5CF6]/5 to-transparent p-2.5 shadow-sm border border-black/5">
            <img
              src="/person-portrait.webp"
              alt="Potret Siti Nuraini Tambunan"
              width="900"
              height="1100"
              class="mx-auto h-auto max-h-[440px] w-auto max-w-full object-contain object-bottom drop-shadow-md select-none"
            />
          </div>
        </div>

        <!-- Lowered copy: intro + headline + bio -->
        <div class="hero-fade-up w-full border-t border-[#121316]/10 pt-6" style="animation-delay: 380ms">
          <div class="flex flex-col items-center mb-3">
            <div class="relative inline-block mb-2">
              <span class="font-['Caveat'] text-3xl font-bold text-[#121316] -rotate-6 inline-block">
                Halo, Saya
              </span>
              <svg class="absolute -top-3 -right-6 w-5 h-5 text-[#EAB308]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="5" y1="12" x2="2" y2="10" />
                <line x1="12" y1="5" x2="14" y2="2" />
                <line x1="17" y1="9" x2="21" y2="7" />
              </svg>
            </div>
            <span class="inline-flex items-center px-4 py-1 rounded-full bg-[#8B5CF6]/15 text-[#7C3AED] text-sm font-semibold tracking-wide">
              Pengadaan &amp; IT Support
            </span>
          </div>

          <h2 class="font-['Syne'] font-bold text-3xl sm:text-4xl leading-tight text-[#121316] mb-3">
            Mengubah Data<br />Menjadi Kejelasan Operasional
          </h2>
          <p class="font-['Plus_Jakarta_Sans'] text-sm sm:text-base leading-relaxed text-[#575965] max-w-md mx-auto">
            Lulusan Sistem Informasi dari Universitas Advent Indonesia, berfokus pada administrasi pengadaan, pengolahan data, dan dokumentasi yang menjaga operasional tetap rapi dan terukur.
          </p>
        </div>

        <!-- Key Tools Mobile -->
        <div class="hero-fade-up flex flex-wrap justify-center gap-2" style="animation-delay: 460ms">
          <span class="px-4 py-1 rounded-full bg-[#FEF08A] text-[#121316] text-xs font-['Space_Grotesk'] font-bold uppercase">Excel</span>
          <span class="px-4 py-1 rounded-full bg-[#8B5CF6]/15 text-[#6B21A8] text-xs font-['Space_Grotesk'] font-bold uppercase">SAP (Dasar)</span>
          <span class="px-4 py-1 rounded-full bg-white text-[#121316] text-xs font-['Space_Grotesk'] font-bold uppercase border border-black/10">Inventaris IT</span>
          <span class="px-4 py-1 rounded-full bg-white text-[#121316] text-xs font-['Space_Grotesk'] font-bold uppercase border border-black/10">Pengolahan Data</span>
        </div>

        <!-- Quick Links Mobile Grid -->
        <div class="hero-fade-up grid grid-cols-2 gap-2.5 w-full max-w-sm mx-auto pt-2" style="animation-delay: 540ms">
          <button
            @click="$emit('navigate-page', { id: 'projects', name: 'Karya Pilihan', chapter: 'BAB 03', href: '#projects' })"
            class="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-black/5 text-left text-xs font-semibold text-[#121316] shadow-2xs cursor-pointer"
          >
            <div class="w-7 h-7 rounded-full bg-[#8B5CF6]/15 flex items-center justify-center text-[#7C3AED] shrink-0">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            </div>
            <span>Karya Pengadaan</span>
          </button>
          <button
            @click="$emit('navigate-page', { id: 'experience', name: 'Pengalaman', chapter: 'BAB 04', href: '#experience' })"
            class="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-black/5 text-left text-xs font-semibold text-[#121316] shadow-2xs cursor-pointer"
          >
            <div class="w-7 h-7 rounded-full bg-[#8B5CF6]/15 flex items-center justify-center text-[#7C3AED] shrink-0">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <span>Organisasi</span>
          </button>
          <button
            @click="$emit('navigate-page', { id: 'about', name: 'Tentang Saya', chapter: 'BAB 02', href: '#about' })"
            class="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-black/5 text-left text-xs font-semibold text-[#121316] shadow-2xs cursor-pointer"
          >
            <div class="w-7 h-7 rounded-full bg-[#8B5CF6]/15 flex items-center justify-center text-[#7C3AED] shrink-0">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            </div>
            <span>Pendidikan</span>
          </button>
          <button
            @click="$emit('navigate-page', { id: 'contact', name: 'Kontak', chapter: 'BAB 06', href: '#contact' })"
            class="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-black/5 text-left text-xs font-semibold text-[#121316] shadow-2xs cursor-pointer"
          >
            <div class="w-7 h-7 rounded-full bg-[#8B5CF6]/15 flex items-center justify-center text-[#7C3AED] shrink-0">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <span>Kontak</span>
          </button>
        </div>

      </div>

    </div>

    <!-- BOTTOM BAR: Action Banner & Organic Wave -->
    <div class="hero-fade-up relative w-full z-20 mt-6 lg:mt-10" style="animation-delay: 700ms">
      <div class="w-full flex items-end justify-between">

        <!-- Left: Dark Charcoal Action Banner -->
        <div class="w-full sm:w-auto">
          <button
            @click="$emit('navigate-page', { id: 'projects', name: 'Karya Pilihan', chapter: 'BAB 03', href: '#projects' })"
            class="group inline-flex items-center gap-5 px-6 sm:px-10 py-5 bg-[#121316] text-[#FAF9FD] rounded-tr-[32px] sm:rounded-r-full shadow-lg transition-all duration-300 hover:bg-[#1D4ED8] cursor-pointer"
          >
            <!-- Circle Arrow Icon Button -->
            <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-white text-white group-hover:text-[#1D4ED8]">
              <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
            <div class="flex items-center gap-3">
              <span class="font-['Space_Grotesk'] text-sm tracking-wider uppercase font-semibold">
                Jelajahi Karya Saya
              </span>
              <span class="hidden sm:inline-block w-14 h-[1.5px] bg-white/30 transition-all duration-300 group-hover:w-20 group-hover:bg-white"></span>
            </div>
          </button>
        </div>

        <!-- Right: Purple Organic Wave with "Gulir ke Bawah" -->
        <div class="hidden sm:block relative">
          <button
            @click="$emit('navigate-page', { id: 'about', name: 'Tentang Saya', chapter: 'BAB 02', href: '#about' })"
            class="group relative flex items-center justify-center pl-20 pr-12 py-5 bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white rounded-tl-[48px] shadow-lg transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
          >
            <div class="flex items-center gap-2.5">
              <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
              <span class="font-['Space_Grotesk'] text-sm font-semibold tracking-wide">
                Gulir ke Bawah
              </span>
            </div>
          </button>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineEmits(['navigate-page'])

const heroSection = ref(null)
const wordLayer = ref(null)
const mobileWordLayer = ref(null)
const glowLayer = ref(null)
const portraitLayer = ref(null)
const copyLayer = ref(null)
const navLayer = ref(null)

let frame = 0
let reduceMotion = false
let isDesktop = true
let motionQuery = null
let sizeQuery = null

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

const applyParallax = (element, offset, scale = null) => {
  if (!element) return
  const scalePart = scale ? ` scale(${scale.toFixed(4)})` : ''
  element.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)${scalePart}`
}

const updateLayers = () => {
  frame = 0
  const section = heroSection.value
  if (!section || reduceMotion) return

  const rect = section.getBoundingClientRect()
  const scrolled = clamp(-rect.top, 0, isDesktop ? 620 : 460)
  const progress = isDesktop ? scrolled / 620 : scrolled / 460
  const depth = isDesktop ? 1 : 0.45

  applyParallax(wordLayer.value, progress * 90 * depth)
  applyParallax(mobileWordLayer.value, progress * 32 * depth)
  applyParallax(glowLayer.value, progress * 60 * depth)
  applyParallax(portraitLayer.value, progress * 24 * depth, 1 + progress * 0.025)
  applyParallax(copyLayer.value, progress * -20 * depth)
  applyParallax(navLayer.value, progress * -14 * depth)
}

const requestUpdate = () => {
  if (!frame) frame = requestAnimationFrame(updateLayers)
}

const handleMotionChange = () => {
  reduceMotion = motionQuery?.matches ?? false
  if (reduceMotion) {
    ;[wordLayer, mobileWordLayer, glowLayer, portraitLayer, copyLayer, navLayer].forEach((layer) => {
      if (layer.value) layer.value.style.transform = ''
    })
  } else {
    requestUpdate()
  }
}

const handleSizeChange = () => {
  isDesktop = sizeQuery?.matches ?? true
  requestUpdate()
}

onMounted(() => {
  motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  sizeQuery = window.matchMedia('(min-width: 1024px)')
  reduceMotion = motionQuery.matches
  isDesktop = sizeQuery.matches

  motionQuery.addEventListener?.('change', handleMotionChange)
  sizeQuery.addEventListener?.('change', handleSizeChange)
  window.addEventListener('scroll', requestUpdate, { passive: true })
  window.addEventListener('resize', requestUpdate)

  updateLayers()
})

onBeforeUnmount(() => {
  if (frame) cancelAnimationFrame(frame)
  motionQuery?.removeEventListener?.('change', handleMotionChange)
  sizeQuery?.removeEventListener?.('change', handleSizeChange)
  window.removeEventListener('scroll', requestUpdate)
  window.removeEventListener('resize', requestUpdate)
})
</script>
