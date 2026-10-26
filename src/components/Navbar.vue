<template>
  <header class="fixed top-0 left-0 right-0 z-50 header-frosted transition-all duration-300">
    <!-- Top Interactive Reading Progress Line -->
    <div class="absolute bottom-0 left-0 right-0 h-[2.5px] bg-black/5 overflow-hidden">
      <div
        class="h-full bg-gradient-to-r from-[#8B5CF6] via-[#FEF08A] to-[#1D4ED8] transition-all duration-150 ease-out"
        :style="{ width: `${scrollProgress}%` }"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">
      
      <!-- Brand Logo -->
      <a
        href="#home"
        @click.prevent="handleLinkClick({ id: 'home', name: 'Beranda', chapter: 'BAB 01', href: '#home' })"
        class="flex items-center gap-3 group cursor-pointer"
      >
        <div class="w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
          <svg viewBox="0 0 32 32" class="w-7 h-7" fill="none">
            <g fill="#8B5CF6">
              <rect x="13.5" y="2" width="5" height="28" rx="2.5" />
              <rect x="2" y="13.5" width="28" height="5" rx="2.5" />
              <rect x="13.5" y="2" width="5" height="28" rx="2.5" transform="rotate(45 16 16)" />
              <rect x="13.5" y="2" width="5" height="28" rx="2.5" transform="rotate(-45 16 16)" />
            </g>
          </svg>
        </div>
        <div class="flex flex-col">
          <span class="font-['Syne'] font-bold text-2xl tracking-tight text-[#121316]">
            {{ displayName }}
          </span>
        </div>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center gap-6 lg:gap-8">
        <a
          v-for="item in navLinks"
          :key="item.href"
          :href="item.href"
          @click.prevent="handleLinkClick(item)"
          class="relative text-[14px] lg:text-[15px] font-medium transition-all duration-200 py-1 cursor-pointer"
          :class="activeSectionId === item.id ? 'text-[#121316] font-semibold' : 'text-[#575965] hover:text-[#121316]'"
        >
          <span class="flex items-center gap-1.5">
            <span class="text-[11px] font-['Space_Grotesk'] text-[#8B5CF6] font-bold" v-if="activeSectionId === item.id">•</span>
            {{ item.name }}
          </span>
          <!-- Active indicator bar with spring animation -->
          <span
            v-if="activeSectionId === item.id"
            class="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#8B5CF6] rounded-full transition-all duration-300"
          ></span>
        </a>
      </nav>

      <!-- Right Action: Download CV Button -->
      <div class="hidden md:flex items-center gap-4">
        <button
          @click="$emit('open-cv')"
          class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#121316] text-[#121316] text-xs font-['Space_Grotesk'] font-bold tracking-wider uppercase transition-all duration-200 hover:bg-[#121316] hover:text-white btn-hard-offset shadow-sm cursor-pointer"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Unduh CV
        </button>
      </div>

      <!-- Mobile Hamburger Button -->
      <button
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="md:hidden p-2 rounded-lg text-[#121316] hover:bg-black/5 focus:outline-none cursor-pointer"
        aria-label="Buka navigasi menu"
      >
        <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

    </div>

    <!-- Mobile Dropdown Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileMenuOpen" class="md:hidden bg-[#FAF9FD] border-b border-black/10 px-6 py-6 space-y-4 shadow-xl">
        <nav class="flex flex-col space-y-2">
          <a
            v-for="item in navLinks"
            :key="item.href"
            :href="item.href"
            @click.prevent="handleMobileNav(item)"
            class="flex items-center justify-between text-base font-medium py-2.5 px-3 rounded-lg transition-colors cursor-pointer"
            :class="activeSectionId === item.id ? 'bg-[#8B5CF6]/10 text-[#8B5CF6] font-semibold' : 'text-[#121316] hover:bg-black/5'"
          >
            <span>{{ item.name }}</span>
            <span class="font-['Space_Grotesk'] text-xs text-[#8F91A0] uppercase">{{ item.chapter }}</span>
          </a>
        </nav>
        <div class="pt-3 border-t border-black/10">
          <button
            @click="triggerMobileCv"
            class="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#121316] text-white text-xs font-['Space_Grotesk'] font-bold tracking-wider uppercase shadow-md active:scale-95 cursor-pointer"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Unduh CV (PDF)
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({
  displayName: {
    type: String,
    default: 'Siti'
  },
  activeSectionId: {
    type: String,
    default: 'home'
  }
})

const emit = defineEmits(['open-cv', 'navigate-page'])

const mobileMenuOpen = ref(false)
const scrollProgress = ref(0)

const navLinks = [
  { id: 'home', name: 'Beranda', chapter: 'BAB 01', href: '#home' },
  { id: 'about', name: 'Tentang Saya', chapter: 'BAB 02', href: '#about' },
  { id: 'projects', name: 'Karya Pilihan', chapter: 'BAB 03', href: '#projects' },
  { id: 'experience', name: 'Pengalaman', chapter: 'BAB 04', href: '#experience' },
  { id: 'skills', name: 'Keahlian', chapter: 'BAB 05', href: '#skills' },
  { id: 'contact', name: 'Kontak', chapter: 'BAB 06', href: '#contact' }
]

const handleLinkClick = (item) => {
  emit('navigate-page', item)
}

const handleMobileNav = (item) => {
  mobileMenuOpen.value = false
  emit('navigate-page', item)
}

const triggerMobileCv = () => {
  mobileMenuOpen.value = false
  emit('open-cv')
}

// Track scroll progress line
const handleScroll = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  if (docHeight > 0) {
    scrollProgress.value = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100))
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
