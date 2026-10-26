<template>
  <section id="skills" class="py-24 lg:py-32 bg-[#FAF9FD] border-t border-black/[0.06] relative">
    
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      
      <!-- Section Header -->
      <div data-reveal class="flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 pb-6 mb-16">
        <div>
          <span class="font-['Space_Grotesk'] text-xs font-bold tracking-[0.2em] text-[#8B5CF6] uppercase block mb-2">
            BAB 05 / KEMAMPUAN UTAMA &amp; TEKNOLOGI
          </span>
          <h2 class="font-['Syne'] font-bold text-4xl sm:text-5xl text-[#121316] tracking-tight">
            05 / Keahlian &amp; Kompetensi
          </h2>
        </div>
        <p class="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#575965] max-w-md mt-4 md:mt-0">
          Kombinasi kemampuan praktis untuk administrasi pengadaan, pengolahan data, manajemen arsip, dan kolaborasi kerja.
        </p>
      </div>

      <!-- Categories Grid -->
      <div data-reveal style="--reveal-delay: 100ms" class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        
        <div
          v-for="(cat, index) in skillCategories"
          :key="index"
          class="bg-white rounded-xl p-8 sm:p-9 border border-black/[0.08] card-editorial flex flex-col justify-between"
        >
          
          <div>
            <!-- Category Header -->
            <div class="flex items-center justify-between pb-4 border-b border-black/[0.08] mb-6">
              <div>
                <span class="font-['Space_Grotesk'] text-[11px] font-bold text-[#8B5CF6] uppercase tracking-widest block mb-1">
                  BIDANG KOMPETENSI 0{{ index + 1 }}
                </span>
                <h3 class="font-['Syne'] font-bold text-xl sm:text-2xl text-[#121316]">
                  {{ cat.name }}
                </h3>
              </div>
              <div class="w-10 h-10 rounded-full bg-[#FAF9FD] border border-black/10 flex items-center justify-center text-[#121316]">
                <span class="font-['Space_Grotesk'] font-bold text-xs">#0{{ index + 1 }}</span>
              </div>
            </div>

            <p class="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-[#575965] mb-6">
              {{ cat.description }}
            </p>

            <!-- Skills List -->
            <div class="divide-y divide-black/[0.06]">
              <div
                v-for="skill in cat.skills"
                :key="skill.name"
                class="flex items-center justify-between gap-4 py-2.5"
              >
                <span class="font-['Plus_Jakarta_Sans'] font-semibold text-[#121316] text-sm">
                  {{ skill.name }}
                </span>
                <span class="px-2.5 py-0.5 rounded-full bg-[#FAF9FD] border border-black/10 font-['Space_Grotesk'] font-bold text-[#7C3AED] text-[10px] uppercase tracking-wider shrink-0">
                  {{ skill.tag }}
                </span>
              </div>
            </div>
          </div>

          <!-- Bottom Note -->
          <div class="mt-8 pt-4 border-t border-black/[0.06] flex items-center justify-between text-[11px] font-['Space_Grotesk'] text-[#8F91A0] uppercase tracking-wider">
            <span>Berdasarkan CV &amp; Pengalaman</span>
            <span>Terverifikasi CV</span>
          </div>

        </div>

      </div>

    </div>

  </section>
</template>

<script setup>
import { portfolioData } from '../data/portfolio.js'

const skillCategories = portfolioData.skillCategories
</script>
