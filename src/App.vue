<template>
  <div class="min-h-screen bg-[#FAF9FD] text-[#121316] relative flex flex-col font-['Plus_Jakarta_Sans'] selection:bg-[#8B5CF6] selection:text-white">
    
    <!-- Pinned Frosted Navbar -->
    <Navbar
      :display-name="personal.displayName"
      @open-cv="isCvOpen = true"
    />

    <!-- Main Content Stream -->
    <main class="flex-grow">
      
      <!-- 01 / Hero Section (Matching Screenshot 1:1) -->
      <HeroSection />

      <!-- 02 / About Me & Engineering Spec Sheet -->
      <AboutSection
        @open-cv="isCvOpen = true"
      />

      <!-- 03 / Selected Works & Projects Exhibition -->
      <ProjectsSection
        @inspect-project="openProjectDetails"
      />

      <!-- 04 / Trajectory & Experience Timeline -->
      <ExperienceSection />

      <!-- 05 / Technical Arsenal & Skills Taxonomy -->
      <SkillsSection />

      <!-- 06 / Editorial Consultation & Contact -->
      <ContactSection
        @open-cv="isCvOpen = true"
      />

    </main>

    <!-- Editorial Footer -->
    <FooterSection />

    <!-- Interactive CV Preview & Download Modal -->
    <CvModal
      :is-open="isCvOpen"
      @close="isCvOpen = false"
    />

    <!-- Project Architectural Inspection Modal -->
    <ProjectModal
      :project="selectedProject"
      @close="selectedProject = null"
    />

  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { portfolioData } from './data/portfolio.js'

import Navbar from './components/Navbar.vue'
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

const openProjectDetails = (project) => {
  selectedProject.value = project
}

let revealObserver = null

onMounted(() => {
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
  revealObserver?.disconnect()
})
</script>
