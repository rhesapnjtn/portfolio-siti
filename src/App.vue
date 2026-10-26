<template>
  <div class="min-h-screen bg-[#FAF9FD] text-[#121316] relative flex flex-col font-['Plus_Jakarta_Sans'] selection:bg-[#8B5CF6] selection:text-white">
    
    <!-- Pinned Frosted Navbar -->
    <Navbar
      :display-name="personal.displayName"
      :active-section-id="activeSectionId"
      @open-cv="isCvOpen = true"
      @navigate-page="handlePageNavigation"
    />

    <!-- Desktop Floating Quick Page Dock -->
    <PageNavDock
      :active-id="activeSectionId"
      @navigate="handlePageNavigation"
    />

    <!-- Main Content Stream -->
    <main class="flex-grow">
      
      <!-- 01 / Hero Section (Edisi Pembuka Portofolio) -->
      <HeroSection
        @navigate-page="handlePageNavigation"
      />

      <!-- 02 / Tentang Saya & Spesifikasi Profil -->
      <AboutSection
        @open-cv="isCvOpen = true"
      />

      <!-- 03 / Eksibisi Karya & Pengadaan Pilihan -->
      <ProjectsSection
        @inspect-project="openProjectDetails"
      />

      <!-- 04 / Trajektori & Pengalaman Kerja -->
      <ExperienceSection />

      <!-- 05 / Keahlian & Domain Kompetensi -->
      <SkillsSection />

      <!-- 06 / Konsultasi & Formulir Kontak -->
      <ContactSection
        @open-cv="isCvOpen = true"
      />

    </main>

    <!-- Editorial Footer -->
    <FooterSection
      @navigate-page="handlePageNavigation"
    />

    <!-- Page Transition Curtain Overlay Component -->
    <PageTransitionOverlay
      ref="transitionOverlay"
    />

    <!-- Interactive CV Preview & Download Modal -->
    <CvModal
      :is-open="isCvOpen"
      @close="isCvOpen = false"
    />

    <!-- Project Architectural Inspection Modal -->
    <ProjectModal
      :project="selectedProject"
      @close="selectedProject = null"
      @navigate-contact="handlePageNavigation({ id: 'contact', name: 'Kontak', chapter: 'BAB 06', href: '#contact' })"
    />

  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { portfolioData } from './data/portfolio.js'

import Navbar from './components/Navbar.vue'
import PageNavDock from './components/PageNavDock.vue'
import PageTransitionOverlay from './components/PageTransitionOverlay.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import CvModal from './components/CvModal.vue'
import ProjectModal from './components/ProjectModal.vue'

const personal = portfolioData.personal
const isCvOpen = ref(false)
const selectedProject = ref(null)
const activeSectionId = ref('home')
const transitionOverlay = ref(null)

const openProjectDetails = (project) => {
  selectedProject.value = project
}

const handlePageNavigation = (page) => {
  const targetId = typeof page === 'string' ? page.replace('#', '') : page.id
  const targetTitle = page.name || 'Portofolio'
  const targetChapter = page.chapter || 'BAB 01'

  activeSectionId.value = targetId

  if (transitionOverlay.value) {
    transitionOverlay.value.triggerTransition(targetTitle, targetChapter, () => {
      const element = document.getElementById(targetId)
      if (element) {
        const yOffset = -75
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: 'instant' })

        // Trigger flash highlight & guarantee reveals
        element.classList.remove('section-arrival-pulse')
        void element.offsetWidth
        element.classList.add('section-arrival-pulse')

        const reveals = element.querySelectorAll('[data-reveal]')
        reveals.forEach(el => el.classList.add('is-revealed'))
      }
    })
  } else {
    const element = document.getElementById(targetId)
    if (element) {
      const yOffset = -75
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }
}

// Track scroll spy to highlight active section in Navbar and Side Dock
const handleScrollSpy = () => {
  const sections = ['contact', 'skills', 'experience', 'projects', 'about', 'home']
  const scrollPosition = window.scrollY + 220

  for (const section of sections) {
    const el = document.getElementById(section)
    if (el) {
      const top = el.offsetTop
      const height = el.offsetHeight
      if (scrollPosition >= top && scrollPosition < top + height) {
        activeSectionId.value = section
        break
      }
    }
  }
}

let revealObserver = null

onMounted(() => {
  window.addEventListener('scroll', handleScrollSpy, { passive: true })
  handleScrollSpy()

  const targets = document.querySelectorAll('[data-reveal]')
  if (!targets.length) return

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-revealed'))
    return
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-revealed')
        revealObserver.unobserve(entry.target)
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
  )

  targets.forEach((el) => revealObserver.observe(el))
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScrollSpy)
  revealObserver?.disconnect()
})
</script>
