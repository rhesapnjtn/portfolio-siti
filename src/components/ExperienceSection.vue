<template>
  <section id="experience" class="py-24 lg:py-32 bg-[#FAF9FD] border-t border-black/[0.06] relative">
    
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      
      <!-- Section Header -->
      <div data-reveal class="flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 pb-6 mb-16">
        <div>
          <span class="font-['Space_Grotesk'] text-xs font-bold tracking-[0.2em] text-[#8B5CF6] uppercase block mb-2">
            CHAPTER 03 / PROFESSIONAL &amp; ORGANIZATIONAL JOURNEY
          </span>
          <h2 class="font-['Syne'] font-bold text-4xl sm:text-5xl text-[#121316] tracking-tight">
            04 / Trajectory
          </h2>
        </div>
        <p class="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#575965] max-w-md mt-4 md:mt-0">
          Procurement exposure, campus organizations, and event operations—built around documentation, coordination, and follow-through.
        </p>
      </div>

      <!-- Experience Timeline Cards -->
      <div data-reveal style="--reveal-delay: 100ms" class="relative">
        
        <!-- Center/Left vertical hairline rule -->
        <div class="hidden md:block absolute left-8 top-4 bottom-4 w-[1px] bg-black/10"></div>

        <div class="space-y-10">
          
          <div
            v-for="(exp, index) in experiences"
            :key="index"
            class="relative flex flex-col md:flex-row gap-6 md:gap-12 items-start group"
          >
            
            <!-- Timeline Marker Icon (Desktop) -->
            <div class="hidden md:flex relative z-10 w-16 h-16 rounded-full bg-white border border-black/10 items-center justify-center shrink-0 shadow-xs group-hover:border-[#8B5CF6] group-hover:scale-105 transition-all duration-300">
              <span class="font-['Space_Grotesk'] font-bold text-xs text-[#8B5CF6]">
                0{{ index + 1 }}
              </span>
            </div>

            <!-- Content Card -->
            <div class="flex-1 w-full bg-white rounded-xl p-7 sm:p-9 border border-black/[0.08] card-editorial">
              
              <!-- Card Header -->
              <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div class="flex flex-wrap items-center gap-3">
                  <span class="px-3.5 py-1 rounded-full bg-[#8B5CF6]/12 text-[#7C3AED] text-xs font-['Space_Grotesk'] font-semibold tracking-wide uppercase">
                    {{ exp.statusPill }}
                  </span>
                  <span class="font-['Space_Grotesk'] text-xs font-semibold text-[#8F91A0] tracking-wider uppercase">
                    {{ exp.location }}
                  </span>
                </div>
                <div class="font-['Space_Grotesk'] text-xs font-bold text-[#121316] tracking-widest bg-[#FAF9FD] px-3 py-1 rounded-md border border-black/5">
                  {{ exp.period }}
                </div>
              </div>

              <!-- Role & Company -->
              <div class="mb-3">
                <h3 class="font-['Syne'] font-bold text-xl sm:text-2xl text-[#121316]">
                  {{ exp.role }}
                </h3>
                <h4 class="font-['Space_Grotesk'] text-sm font-semibold text-[#1D4ED8] mt-1">
                  {{ exp.company }} <span class="text-[#8F91A0] font-normal">• {{ exp.type }}</span>
                </h4>
              </div>

              <!-- Description -->
              <p class="font-['Plus_Jakarta_Sans'] text-sm sm:text-[15px] leading-relaxed text-[#575965] mb-5">
                {{ exp.description }}
              </p>

              <!-- Highlights / Achievements List -->
              <div class="space-y-2 pt-2 border-t border-black/[0.06]">
                <div
                  v-for="(item, hIndex) in exp.highlights"
                  :key="hIndex"
                  class="flex items-start gap-2.5 text-xs sm:text-sm text-[#121316]"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] mt-2 shrink-0"></span>
                  <span class="font-['Plus_Jakarta_Sans']">{{ item }}</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </section>
</template>

<script setup>
import { portfolioData } from '../data/portfolio.js'

const experiences = portfolioData.experiences
</script>
