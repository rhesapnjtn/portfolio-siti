<template>
  <aside
    aria-label="Navigasi Halaman Cepat"
    class="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-3 pointer-events-auto"
  >
    <div class="bg-white/80 backdrop-blur-md p-2 rounded-full border border-black/10 shadow-lg flex flex-col items-center gap-2">
      <button
        v-for="page in pages"
        :key="page.id"
        @click="$emit('navigate', page)"
        class="group relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 cursor-pointer"
        :class="activeId === page.id ? 'bg-[#8B5CF6] text-white shadow-sm scale-110' : 'text-[#575965] hover:text-[#121316] hover:bg-black/5'"
        :aria-label="page.name"
      >
        <!-- Icon or Number -->
        <span class="text-[11px] font-['Space_Grotesk'] font-bold">
          {{ page.shortNum }}
        </span>

        <!-- Hover Tooltip Flyout -->
        <div class="absolute right-11 px-3 py-1.5 rounded-lg bg-[#121316] text-[#FAF9FD] text-xs font-['Space_Grotesk'] font-semibold tracking-wider whitespace-nowrap opacity-0 pointer-events-none translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shadow-md">
          <span class="text-[#FEF08A] mr-1.5">{{ page.chapter }}</span>
          {{ page.name }}
          <!-- Arrow pointer -->
          <div class="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-[#121316] rotate-45"></div>
        </div>
      </button>
    </div>

    <!-- Active Chapter Label -->
    <div class="px-2.5 py-1 rounded-md bg-[#121316]/80 text-[#FEF08A] backdrop-blur-xs text-[10px] font-['Space_Grotesk'] font-bold uppercase tracking-widest pointer-events-none shadow-xs">
      {{ activeChapter }}
    </div>
  </aside>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  activeId: {
    type: String,
    default: 'home'
  }
})

defineEmits(['navigate'])

const pages = [
  { id: 'home', shortNum: '01', chapter: 'BAB 01', name: 'Beranda', href: '#home' },
  { id: 'about', shortNum: '02', chapter: 'BAB 02', name: 'Tentang Saya', href: '#about' },
  { id: 'projects', shortNum: '03', chapter: 'BAB 03', name: 'Karya Pilihan', href: '#projects' },
  { id: 'experience', shortNum: '04', chapter: 'BAB 04', name: 'Pengalaman', href: '#experience' },
  { id: 'skills', shortNum: '05', chapter: 'BAB 05', name: 'Keahlian', href: '#skills' },
  { id: 'contact', shortNum: '06', chapter: 'BAB 06', name: 'Kontak', href: '#contact' }
]

const activeChapter = computed(() => {
  const current = pages.find(p => p.id === props.activeId)
  return current ? `${current.shortNum} / 06` : '01 / 06'
})
</script>
