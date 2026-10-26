<template>
  <footer class="bg-[#FAF9FD] border-t border-black/10 py-16 text-[#121316]">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      
      <!-- Top Row: Masthead & Folio -->
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-black/[0.08]">
        
        <div class="flex items-center gap-3">
          <div class="w-7 h-7 flex items-center justify-center">
            <svg viewBox="0 0 32 32" class="w-6 h-6" fill="none">
              <g fill="#8B5CF6">
                <rect x="13.5" y="2" width="5" height="28" rx="2.5" />
                <rect x="2" y="13.5" width="28" height="5" rx="2.5" />
                <rect x="13.5" y="2" width="5" height="28" rx="2.5" transform="rotate(45 16 16)" />
                <rect x="13.5" y="2" width="5" height="28" rx="2.5" transform="rotate(-45 16 16)" />
              </g>
            </svg>
          </div>
          <div>
            <span class="font-['Syne'] font-bold text-xl tracking-tight text-[#121316]">
              {{ personal.name }}
            </span>
            <span class="block font-['Space_Grotesk'] text-[11px] text-[#8F91A0] uppercase tracking-wider">
              Sistem Informasi • Pengadaan &amp; IT Support
            </span>
          </div>
        </div>

        <!-- Editorial Folio Stamp -->
        <div class="flex items-center gap-4 text-xs font-['Space_Grotesk'] tracking-widest text-[#575965] uppercase">
          <span>VOL. 26</span>
          <span class="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"></span>
          <span>NO. 03</span>
          <span class="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"></span>
          <span>EDISI 2026</span>
        </div>

        <!-- Back to Top Button -->
        <button
          @click="$emit('navigate-page', { id: 'home', name: 'Beranda', chapter: 'BAB 01', href: '#home' })"
          class="inline-flex items-center gap-2 text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider text-[#121316] hover:text-[#8B5CF6] transition-colors group cursor-pointer"
        >
          <span>Kembali ke Atas</span>
          <span class="transition-transform group-hover:-translate-y-1">↑</span>
        </button>

      </div>

      <!-- Bottom Row: Navigation & Copyright -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-['Plus_Jakarta_Sans'] text-[#8F91A0]">
        <p>
          © 2026 {{ personal.name }}. Portofolio editorial interaktif dirancang dengan Vue, Vite &amp; Tailwind.
        </p>
        <div class="flex items-center gap-6 font-['Space_Grotesk'] uppercase tracking-wider">
          <button
            @click="$emit('navigate-page', { id: 'about', name: 'Tentang Saya', chapter: 'BAB 02', href: '#about' })"
            class="hover:text-[#121316] transition-colors cursor-pointer"
          >
            Tentang
          </button>
          <button
            @click="$emit('navigate-page', { id: 'projects', name: 'Karya Pilihan', chapter: 'BAB 03', href: '#projects' })"
            class="hover:text-[#121316] transition-colors cursor-pointer"
          >
            Karya
          </button>
          <button
            @click="$emit('navigate-page', { id: 'experience', name: 'Pengalaman', chapter: 'BAB 04', href: '#experience' })"
            class="hover:text-[#121316] transition-colors cursor-pointer"
          >
            Pengalaman
          </button>
          <button
            @click="$emit('navigate-page', { id: 'contact', name: 'Kontak', chapter: 'BAB 06', href: '#contact' })"
            class="hover:text-[#121316] transition-colors cursor-pointer"
          >
            Kontak
          </button>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { portfolioData } from '../data/portfolio.js'

defineEmits(['navigate-page'])

const personal = portfolioData.personal
</script>
