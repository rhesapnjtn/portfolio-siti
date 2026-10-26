<template>
  <section id="about" class="py-24 lg:py-32 bg-[#FAF9FD] border-t border-black/[0.06] relative">
    
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      
      <!-- Editorial Header / Folio Notation -->
      <div data-reveal class="flex flex-col sm:flex-row sm:items-end justify-between border-b border-black/10 pb-6 mb-16">
        <div>
          <span class="font-['Space_Grotesk'] text-xs font-bold tracking-[0.2em] text-[#8B5CF6] uppercase block mb-2">
            BAB 02 / PENDIDIKAN &amp; LATAR AKADEMIK
          </span>
          <h2 class="font-['Syne'] font-bold text-4xl sm:text-5xl text-[#121316] tracking-tight">
            02 / Pendidikan &amp; Profil
          </h2>
        </div>
        <div class="font-['Space_Grotesk'] text-xs text-[#575965] tracking-widest uppercase mt-4 sm:mt-0">
          <span>VOL. 26</span>
          <span class="mx-2">•</span>
          <span>FOLIO NO. 02</span>
          <span class="mx-2">•</span>
          <span>SIAP BERKONTRIBUSI</span>
        </div>
      </div>

      <!-- Education dossier & graduation gallery -->
      <EducationShowcase
        :education="education"
        @open-cv="$emit('open-cv')"
      />

      <!-- Asymmetric Editorial Grid (12-column layout) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        <!-- Left Column: Architectural Narrative & Pull Quote (Cols 1-7) -->
        <div data-reveal style="--reveal-delay: 100ms" class="lg:col-span-7 space-y-8">
          
          <div class="space-y-4">
            <h3 class="font-['Syne'] font-bold text-2xl sm:text-3xl lg:text-[34px] leading-snug text-[#121316]">
              Menjembatani Operasional Pengadaan dengan Teknologi Informasi.
            </h3>
            <p class="font-['Plus_Jakarta_Sans'] text-base sm:text-lg leading-relaxed text-[#434655]">
              Sebagai sarjana Sistem Informasi dari Universitas Advent Indonesia, saya memadukan pemahaman teknologi dan sistem informasi dengan pengalaman terapan dalam administrasi pengadaan barang/jasa, pengolahan data, serta ketertiban manajemen dokumen.
            </p>
          </div>

          <!-- Pull Quote with Lavender border and Butter Yellow highlight -->
          <div class="pl-6 border-l-[3px] border-[#8B5CF6] py-2 my-6 bg-[#8B5CF6]/[0.02]">
            <p class="font-['Plus_Jakarta_Sans'] italic text-lg sm:text-xl text-[#121316] leading-relaxed">
              "Operasional yang berjalan unggul berakar pada <mark class="bg-[#FEF08A] text-[#121316] px-1.5 py-0.5 rounded-xs not-italic font-medium">alur proses yang terstruktur</mark>, keakuratan data, dan sistem dokumentasi yang dapat ditelusuri kapan pun dibutuhkan."
            </p>
          </div>

          <div class="space-y-4 font-['Plus_Jakarta_Sans'] text-base leading-relaxed text-[#575965]">
            <p>
              Selama menjalani program magang di PTPN IV Regional III, saya mendampingi proses administrasi pengadaan TI—mulai dari menyiapkan surat permintaan, menganalisis penawaran vendor, berkoordinasi aktif dengan unit terkait, hingga menyusun rekap data pelaporan untuk monitoring dan evaluasi.
            </p>
            <p>
              Saya memiliki ketelitian tinggi, cepat beradaptasi dengan lingkungan baru, serta nyaman bekerja secara mandiri maupun kolaboratif dalam tim. Saat ini saya terbuka untuk peluang kerja di bidang pengadaan, administrasi, maupun IT support.
            </p>
          </div>

          <!-- Three Core Engineering Principles -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div class="p-5 rounded-lg bg-white border border-black/[0.08] card-editorial">
              <span class="font-['Space_Grotesk'] text-xs font-bold text-[#8B5CF6] tracking-wider uppercase block mb-1">01 / PROSES</span>
              <h4 class="font-['Syne'] font-bold text-base text-[#121316] mb-1">Alur Kerja Tertib</h4>
              <p class="text-xs text-[#575965] leading-relaxed">Dokumen pengadaan, surat permohonan, dan korespondensi tersusun rapi serta sistematis.</p>
            </div>

            <div class="p-5 rounded-lg bg-white border border-black/[0.08] card-editorial">
              <span class="font-['Space_Grotesk'] text-xs font-bold text-[#1D4ED8] tracking-wider uppercase block mb-1">02 / DATA</span>
              <h4 class="font-['Syne'] font-bold text-base text-[#121316] mb-1">Pelaporan Akurat</h4>
              <p class="text-xs text-[#575965] leading-relaxed">Rekapitulasi data terstruktur yang mempermudah evaluasi berkala dan pengambilan keputusan.</p>
            </div>

            <div class="p-5 rounded-lg bg-white border border-black/[0.08] card-editorial">
              <span class="font-['Space_Grotesk'] text-xs font-bold text-[#7C3AED] tracking-wider uppercase block mb-1">03 / KOLABORASI</span>
              <h4 class="font-['Syne'] font-bold text-base text-[#121316] mb-1">Koordinasi Andal</h4>
              <p class="text-xs text-[#575965] leading-relaxed">Komunikasi proaktif dengan tim internal, mitra kerja, penyedia vendor, dan peserta acara.</p>
            </div>
          </div>

        </div>

        <!-- Right Column: Engineering Spec Sheet (Cols 8-12) -->
        <div data-reveal style="--reveal-delay: 220ms" class="lg:col-span-5 bg-white p-7 sm:p-9 rounded-xl border border-black/[0.08] shadow-sm relative">
          
          <div class="flex items-center justify-between pb-5 border-b border-black/[0.08] mb-6">
            <div class="flex items-center gap-2.5">
              <span class="w-2.5 h-2.5 rounded-full bg-[#1D4ED8]"></span>
              <h3 class="font-['Space_Grotesk'] font-bold text-xs tracking-[0.15em] text-[#121316] uppercase">
                LEMBAR SPESIFIKASI KANDIDAT
              </h3>
            </div>
            <span class="font-['Space_Grotesk'] text-[11px] text-[#8F91A0] tracking-widest uppercase">
              SPEC // 2026
            </span>
          </div>

          <!-- Quick Info Key-Value Grid -->
          <div class="divide-y divide-black/[0.06]">
            
            <div
              v-for="(spec, index) in specData"
              :key="index"
              class="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm"
            >
              <span class="font-['Space_Grotesk'] text-xs font-semibold text-[#575965] tracking-wider uppercase">
                {{ spec.label }}
              </span>
              
              <div v-if="spec.highlight" class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/12 border border-[#8B5CF6]/20 text-[#7C3AED] text-xs font-semibold">
                <!-- Pulsing Live Dot -->
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B5CF6] opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-[#8B5CF6]"></span>
                </span>
                {{ spec.value }}
              </div>
              
              <span v-else class="font-['Plus_Jakarta_Sans'] font-medium text-[#121316] sm:text-right">
                {{ spec.value }}
              </span>
            </div>

          </div>

          <!-- Bottom Action in Spec Sheet -->
          <div class="mt-8 pt-6 border-t border-black/[0.08] flex items-center justify-between">
            <div class="text-xs text-[#575965]">
              Ingin meninjau CV lengkap?
            </div>
            <button
              @click="$emit('open-cv')"
              class="inline-flex items-center gap-2 text-xs font-['Space_Grotesk'] font-bold tracking-wider uppercase text-[#1D4ED8] hover:text-[#121316] transition-colors group cursor-pointer"
            >
              Lihat / Unduh CV
              <span class="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>

        </div>

      </div>


    </div>

  </section>
</template>

<script setup>
import { portfolioData } from '../data/portfolio.js'
import EducationShowcase from './EducationShowcase.vue'

defineEmits(['open-cv'])

const specData = portfolioData.specSheet
const education = portfolioData.education
</script>
