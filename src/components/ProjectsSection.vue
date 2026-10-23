<template>
  <section id="projects" class="py-24 lg:py-32 bg-[#FAF9FD] border-t border-black/[0.06] relative">
    
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      
      <!-- Section Header -->
      <div data-reveal class="flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 pb-6 mb-16">
        <div>
          <span class="font-['Space_Grotesk'] text-xs font-bold tracking-[0.2em] text-[#8B5CF6] uppercase block mb-2">
            CHAPTER 02 / SELECTED WORKS
          </span>
          <h2 class="font-['Syne'] font-bold text-4xl sm:text-5xl text-[#121316] tracking-tight">
            03 / Exhibition
          </h2>
        </div>
        <p class="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#575965] max-w-md mt-4 md:mt-0">
          A closer look at the procurement, organizational, and event work behind the CV—documented, coordinated, and delivered.
        </p>
      </div>

      <!-- Category Filter Pills -->
      <div data-reveal style="--reveal-delay: 100ms" class="flex flex-wrap items-center gap-2 mb-12">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="activeCategory = cat"
          class="px-5 py-2 rounded-full text-xs font-['Space_Grotesk'] font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer"
          :class="activeCategory === cat ? 'bg-[#121316] text-[#FAF9FD] shadow-sm' : 'bg-white border border-black/10 text-[#575965] hover:border-black/30 hover:text-[#121316]'"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Project Cards Grid (Asymmetric Editorial Style) -->
      <div data-reveal style="--reveal-delay: 180ms" class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        
        <article
          v-for="project in filteredProjects"
          :key="project.id"
          class="card-editorial bg-white rounded-xl p-8 sm:p-10 flex flex-col justify-between relative group overflow-hidden"
        >
          <!-- Subtle Accent Stripe on top -->
          <div
            class="absolute top-0 left-0 right-0 h-1 transition-all duration-300"
            :style="{ backgroundColor: project.colorAccent }"
          ></div>

          <div>
            <!-- Header: Giant Faded Number Index & Meta -->
            <div class="flex items-start justify-between mb-6">
              <span class="font-['Syne'] font-extrabold text-5xl sm:text-6xl text-[#121316]/20 group-hover:text-[#121316]/40 transition-colors">
                {{ project.id }}
              </span>
              <div class="flex flex-col items-end gap-1">
                <span class="px-3 py-1 rounded-full bg-[#FAF9FD] border border-black/10 text-[11px] font-['Space_Grotesk'] font-semibold tracking-wider uppercase text-[#121316]">
                  {{ project.category }}
                </span>
                <span class="font-['Space_Grotesk'] text-[11px] text-[#8F91A0] tracking-widest">
                  {{ project.year }}
                </span>
              </div>
            </div>

            <!-- Project Title & Subtitle -->
            <div class="mb-4">
              <h3 class="font-['Syne'] font-bold text-2xl sm:text-3xl text-[#121316] mb-2 group-hover:text-[#1D4ED8] transition-colors">
                {{ project.title }}
              </h3>
              <p class="font-['Space_Grotesk'] text-xs font-semibold text-[#8B5CF6] tracking-wide uppercase">
                {{ project.subtitle }}
              </p>
            </div>

            <!-- Description -->
            <p class="font-['Plus_Jakarta_Sans'] text-sm sm:text-[15px] leading-relaxed text-[#575965] mb-6">
              {{ project.description }}
            </p>

            <!-- Key Metrics Bar -->
            <div class="grid grid-cols-3 gap-3 py-3 px-4 rounded-lg bg-[#FAF9FD] border border-black/[0.05] mb-6">
              <div v-for="(metric, mIndex) in project.metrics" :key="mIndex" class="text-center">
                <span class="font-['Syne'] font-bold text-base sm:text-lg text-[#121316] block">
                  {{ metric.value }}
                </span>
                <span class="font-['Space_Grotesk'] text-[10px] sm:text-[11px] text-[#8F91A0] uppercase tracking-wider block">
                  {{ metric.label }}
                </span>
              </div>
            </div>

            <!-- Tech Badges (Butter Yellow Pills from DESIGN.md) -->
            <div class="flex flex-wrap gap-2 mb-8">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-3.5 py-1 rounded-full bg-[#FEF08A] text-[#121316] text-xs font-['Space_Grotesk'] font-bold tracking-wider uppercase border border-black/5"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- Bottom Actions -->
          <div class="pt-6 border-t border-black/[0.08] flex items-center justify-between gap-4">
            
            <!-- Inspect Architecture Modal Button -->
            <button
              @click="$emit('inspect-project', project)"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#121316] text-[#FAF9FD] text-xs font-['Space_Grotesk'] font-bold tracking-wider uppercase btn-hard-offset cursor-pointer"
            >
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
              View Details
            </button>

            <!-- Inspect Code / Details -->
            <button
              @click="$emit('inspect-project', project)"
              class="inline-flex items-center gap-1.5 text-xs font-['Space_Grotesk'] font-bold tracking-wider uppercase text-[#121316] hover:text-[#1D4ED8] transition-colors group/link cursor-pointer"
            >
              <span>Process &amp; Context</span>
              <span class="transition-transform group-hover/link:translate-x-1">→</span>
            </button>

          </div>

        </article>

      </div>

    </div>

  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { portfolioData } from '../data/portfolio.js'

defineEmits(['inspect-project'])

const activeCategory = ref('All')
const categories = ['All', 'Procurement', 'Organization', 'Event Operations']

const projects = portfolioData.projects

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') return projects
  return projects.filter(p => p.category === activeCategory.value)
})
</script>
