<template>
  <header class="fixed top-0 left-0 right-0 z-50 header-frosted transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">
      
      <!-- Brand Logo -->
      <a href="#home" class="flex items-center gap-3 group">
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
        <span class="font-['Syne'] font-bold text-2xl tracking-tight text-[#121316]">
          {{ displayName }}
        </span>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center gap-8 lg:gap-10">
        <a
          v-for="item in navLinks"
          :key="item.href"
          :href="item.href"
          @click="activeSection = item.name"
          class="relative text-[15px] font-medium transition-colors duration-200 py-1"
          :class="activeSection === item.name ? 'text-[#121316] font-semibold' : 'text-[#575965] hover:text-[#121316]'"
        >
          {{ item.name }}
          <!-- Active indicator bar -->
          <span
            v-if="activeSection === item.name"
            class="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8B5CF6] rounded-full transition-all duration-300"
          ></span>
        </a>
      </nav>

      <!-- Right Action: Download CV Button -->
      <div class="hidden md:flex items-center gap-4">
        <button
          @click="$emit('open-cv')"
          class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#121316] text-[#121316] text-sm font-['Space_Grotesk'] font-semibold tracking-wide uppercase transition-all duration-200 hover:bg-[#121316] hover:text-white btn-hard-offset shadow-sm cursor-pointer"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download CV
        </button>
      </div>

      <!-- Mobile Hamburger Button -->
      <button
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="md:hidden p-2 rounded-lg text-[#121316] hover:bg-black/5 focus:outline-none"
        aria-label="Toggle navigation menu"
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
        <nav class="flex flex-col space-y-3">
          <a
            v-for="item in navLinks"
            :key="item.href"
            :href="item.href"
            @click="selectMobileNav(item.name)"
            class="text-base font-medium py-2 px-3 rounded-md transition-colors"
            :class="activeSection === item.name ? 'bg-[#8B5CF6]/10 text-[#8B5CF6] font-semibold' : 'text-[#121316] hover:bg-black/5'"
          >
            {{ item.name }}
          </a>
        </nav>
        <div class="pt-3 border-t border-black/10">
          <button
            @click="triggerMobileCv"
            class="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#121316] text-white text-sm font-['Space_Grotesk'] font-semibold tracking-wider uppercase shadow-md active:scale-95"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download CV
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
  }
})

const emit = defineEmits(['open-cv'])

const mobileMenuOpen = ref(false)
const activeSection = ref('Home')

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Work', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
]

const selectMobileNav = (name) => {
  activeSection.value = name
  mobileMenuOpen.value = false
}

const triggerMobileCv = () => {
  mobileMenuOpen.value = false
  emit('open-cv')
}

// Track scroll spy
const handleScroll = () => {
  const sections = ['contact', 'skills', 'projects', 'experience', 'about', 'home']
  const scrollPosition = window.scrollY + 200

  for (const section of sections) {
    const el = document.getElementById(section)
    if (el) {
      const top = el.offsetTop
      const height = el.offsetHeight
      if (scrollPosition >= top && scrollPosition < top + height) {
        const found = navLinks.find(l => l.href === `#${section}`)
        if (found) activeSection.value = found.name
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
