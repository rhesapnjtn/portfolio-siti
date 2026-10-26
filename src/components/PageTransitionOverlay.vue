<template>
  <div
    v-show="isActive"
    class="fixed inset-0 z-[100] pointer-events-auto flex items-center justify-center overflow-hidden"
    aria-hidden="true"
  >
    <!-- Background Backdrop / Wave Layers -->
    <div
      class="absolute inset-0 bg-[#121316] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
      :class="phase === 'in' ? 'translate-y-0' : (phase === 'out' ? '-translate-y-full' : 'translate-y-full')"
    >
      <!-- Radiant Lavender Glow in Backdrop -->
      <div class="absolute inset-0 bg-radial from-[#8B5CF6]/25 via-transparent to-transparent opacity-80 pointer-events-none"></div>
      
      <!-- Top Decorative Bar -->
      <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#8B5CF6] via-[#FEF08A] to-[#1D4ED8]"></div>
    </div>

    <!-- Secondary Accent Curtain (Slightly lagging for depth) -->
    <div
      class="absolute inset-0 bg-[#8B5CF6]/20 backdrop-blur-md transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none"
      :class="phase === 'in' ? 'translate-y-0' : (phase === 'out' ? '-translate-y-full' : 'translate-y-full')"
    ></div>

    <!-- Center Editorial Presentation -->
    <div
      class="relative z-10 flex flex-col items-center text-center px-6 max-w-lg transition-all duration-300"
      :class="phase === 'in' ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'"
    >
      <!-- Rotating Brand Star Logo -->
      <div class="w-16 h-16 mb-5 relative flex items-center justify-center">
        <div class="absolute inset-0 rounded-full bg-[#8B5CF6]/30 blur-xl animate-pulse"></div>
        <svg viewBox="0 0 32 32" class="w-12 h-12 relative animate-spin" style="animation-duration: 4s;" fill="none">
          <g fill="#FEF08A">
            <rect x="13.5" y="2" width="5" height="28" rx="2.5" />
            <rect x="2" y="13.5" width="28" height="5" rx="2.5" />
            <rect x="13.5" y="2" width="5" height="28" rx="2.5" transform="rotate(45 16 16)" />
            <rect x="13.5" y="2" width="5" height="28" rx="2.5" transform="rotate(-45 16 16)" />
          </g>
        </svg>
      </div>

      <!-- Chapter Folio Tag -->
      <span class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#FEF08A] text-xs font-['Space_Grotesk'] font-bold tracking-[0.25em] uppercase mb-3 border border-white/15">
        <span class="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"></span>
        {{ targetChapter || 'MEMUAT HALAMAN' }}
      </span>

      <!-- Target Section Title -->
      <h3 class="font-['Syne'] font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
        {{ targetTitle || 'Portofolio' }}
      </h3>

      <!-- Animated Progress Tracker Line -->
      <div class="w-48 h-1 bg-white/15 rounded-full overflow-hidden relative">
        <div class="absolute inset-y-0 left-0 bg-gradient-to-r from-[#8B5CF6] via-[#FEF08A] to-white rounded-full w-full animate-[progressLine_0.4s_ease-out_forwards]"></div>
      </div>
      
      <span class="mt-3 text-[11px] font-['Space_Grotesk'] tracking-widest text-[#FAF9FD]/60 uppercase">
        Menampilkan Halaman...
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isActive = ref(false)
const phase = ref('idle') // 'idle' | 'in' | 'out'
const targetTitle = ref('')
const targetChapter = ref('')

const triggerTransition = (title, chapter, onMidpoint) => {
  // If reduced motion is preferred, execute immediately
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    if (onMidpoint) onMidpoint()
    return
  }

  targetTitle.value = title
  targetChapter.value = chapter
  isActive.value = true
  phase.value = 'idle'

  // Small next tick to ensure initial position is rendered before sliding in
  requestAnimationFrame(() => {
    phase.value = 'in'
  })

  // Midpoint: screen is fully covered -> scroll instantly and trigger reveal
  setTimeout(() => {
    if (onMidpoint) onMidpoint()

    // Slide out
    setTimeout(() => {
      phase.value = 'out'
      // Clean up after slide out finishes
      setTimeout(() => {
        isActive.value = false
        phase.value = 'idle'
      }, 500)
    }, 180)
  }, 360)
}

defineExpose({
  triggerTransition
})
</script>

<style scoped>
@keyframes progressLine {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0%); }
}
</style>
