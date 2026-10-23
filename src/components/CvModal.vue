<template>
  <transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
      @click.self="$emit('close')"
    >
      <div class="relative w-full max-w-4xl bg-[#FAF9FD] rounded-2xl shadow-2xl border border-black/10 overflow-hidden max-h-[92vh] flex flex-col">
        
        <!-- Modal Top Bar -->
        <div class="px-6 sm:px-8 py-5 bg-white border-b border-black/[0.08] flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <span class="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]"></span>
            <span class="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-[#121316]">
              CURRICULUM VITAE // {{ personal.name }}
            </span>
          </div>

          <div class="flex items-center gap-2 sm:gap-3">
            <a
              :href="cvFile"
              download
              class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121316] text-[#FAF9FD] text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider hover:bg-[#1D4ED8] transition-colors cursor-pointer"
            >
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download PDF
            </a>
            <a
              :href="cvFile"
              target="_blank"
              rel="noopener noreferrer"
              class="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF9FD] border border-black/10 text-[#121316] text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider hover:bg-black/5 transition-colors cursor-pointer"
            >
              Open in New Tab
            </a>
            <button
              @click="$emit('close')"
              class="w-8 h-8 rounded-full bg-[#FAF9FD] border border-black/10 flex items-center justify-center text-[#121316] hover:bg-black/5 cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>

        <!-- PDF Preview Body -->
        <div class="bg-[#F3F4F6] p-3 sm:p-5 flex-1 overflow-hidden">
          <iframe
            :src="cvFile"
            title="Curriculum Vitae"
            class="w-full h-[68vh] min-h-[420px] rounded-lg border border-black/10 bg-white"
          ></iframe>
          <p class="mt-3 text-center font-['Space_Grotesk'] text-[11px] uppercase tracking-wider text-[#8F91A0]">
            If the preview does not load, use “Download PDF” or “Open in New Tab”.
          </p>
        </div>

        <!-- Modal Footer -->
        <div class="px-6 sm:px-8 py-4 bg-white border-t border-black/[0.08] flex items-center justify-between">
          <span class="font-['Space_Grotesk'] text-xs text-[#8F91A0] uppercase tracking-wider">
            Official CV · {{ personal.name }}
          </span>
          <a
            :href="cvFile"
            download
            class="sm:hidden inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#121316] text-[#FAF9FD] text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider cursor-pointer"
          >
            Download PDF
          </a>
        </div>

      </div>
    </div>
  </transition>
</template>

<script setup>
import { portfolioData } from '../data/portfolio.js'

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

defineEmits(['close'])

const personal = portfolioData.personal
const cvFile = personal.cvFile
</script>