<template>
  <div id="pendidikan" data-reveal class="mb-16 scroll-mt-28 lg:mb-24" style="--reveal-delay: 120ms">

    <div class="academic-dossier relative overflow-hidden rounded-2xl border border-black/[0.08] text-[#121316] shadow-[0_28px_70px_-48px_rgba(18,19,22,0.5)]">

      <!-- Editorial corner registration marks -->
      <span class="pointer-events-none absolute left-4 top-4 h-3 w-3 border-l border-t border-black/20"></span>
      <span class="pointer-events-none absolute right-4 top-4 h-3 w-3 border-r border-t border-black/20"></span>
      <span class="pointer-events-none absolute bottom-4 left-4 h-3 w-3 border-b border-l border-black/20"></span>
      <span class="pointer-events-none absolute bottom-4 right-4 h-3 w-3 border-b border-r border-black/20"></span>

      <div class="relative p-6 sm:p-8 lg:p-10">

        <!-- Panel Header -->
        <div class="flex flex-col gap-4 border-b border-black/[0.08] pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div class="flex items-center gap-3.5">
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FEF08A] text-[#121316] shadow-[0_6px_16px_-8px_rgba(18,19,22,0.45)] ring-1 ring-[#E8D66B]">
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </span>
            <div>
              <span class="block font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-[0.24em] text-[#7C3AED]">
                BAB 02 / CATATAN AKADEMIK
              </span>
              <h3 class="mt-0.5 font-['Syne'] text-lg font-bold tracking-tight text-[#121316] sm:text-xl">
                Pendidikan Formal
              </h3>
            </div>
          </div>

          <div class="flex items-center gap-2 self-start sm:self-auto">
            <span class="inline-flex items-center gap-2 rounded-full border border-[#121316]/10 bg-white px-3.5 py-1.5">
              <span class="relative flex h-1.5 w-1.5">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22A06B] opacity-70"></span>
                <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#22A06B]"></span>
              </span>
              <span class="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-[0.16em] text-[#434655]">
                {{ education.graduation }}
              </span>
            </span>
            <span class="hidden rounded-full bg-[#FEF08A] px-3 py-1.5 font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-[0.16em] text-[#121316] sm:inline-flex">
              IPK {{ education.gpa }}
            </span>
          </div>
        </div>

        <!-- Academic Record + Staggered Photo Collage -->
        <div class="grid grid-cols-1 gap-10 pt-8 lg:grid-cols-12 lg:gap-12">

          <!-- Left: Degree Record -->
          <div class="lg:col-span-4">
            <div class="flex items-center gap-3">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-[#F7F6FC] font-['Syne'] text-[10px] font-extrabold tracking-[0.08em] text-[#6D28D9]">
                UNAI
              </div>
              <div class="min-w-0">
                <p class="font-['Syne'] text-[15px] font-bold leading-snug text-[#121316]">
                  {{ education.institution }}
                </p>
                <p class="mt-0.5 font-['Space_Grotesk'] text-[9px] uppercase tracking-[0.2em] text-[#8F91A0]">
                  Program Studi {{ education.program }}
                </p>
              </div>
            </div>

            <div class="mt-7">
              <span class="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-[0.22em] text-[#7C3AED]">
                Gelar Akademik
              </span>
              <h4 class="mt-2 font-['Syne'] text-3xl font-extrabold leading-[1.02] tracking-tight text-[#121316] sm:text-[38px]">
                Sarjana<br />Sistem Informasi
              </h4>
              <p class="mt-3 font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.18em] text-[#8F91A0]">
                {{ education.degreeShort }} · {{ education.period }}
              </p>
            </div>

            <!-- GPA Meter -->
            <div class="mt-7 rounded-xl border border-black/[0.08] bg-[#FAF9FD] p-4 sm:p-5">
              <div class="flex items-end justify-between gap-3">
                <div>
                  <span class="block font-['Space_Grotesk'] text-[9px] uppercase tracking-[0.18em] text-[#575965]">
                    Indeks Prestasi Kumulatif
                  </span>
                  <div class="mt-1 flex items-baseline gap-1.5">
                    <span class="font-['Syne'] text-[42px] font-extrabold leading-none text-[#121316]">{{ education.gpa }}</span>
                    <span class="font-['Space_Grotesk'] text-[11px] text-[#8F91A0]">/ {{ education.gpaMax }}</span>
                  </div>
                </div>
                <span class="rounded-full border border-[#8B5CF6]/25 bg-[#8B5CF6]/10 px-2.5 py-1 font-['Space_Grotesk'] text-[9px] font-bold uppercase tracking-wider text-[#6D28D9]">
                  IPK Akhir
                </span>
              </div>
              <div class="mt-4 h-1.5 overflow-hidden rounded-full bg-[#121316]/10">
                <div
                  class="gpa-meter-fill h-full rounded-full bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#1D4ED8]"
                  :style="{ '--gpa': education.gpaPercent + '%' }"
                ></div>
              </div>
            </div>

            <!-- Quick Academic Facts -->
            <div class="mt-4 grid grid-cols-2 gap-3">
              <div class="rounded-xl border border-black/[0.08] bg-white p-3.5 shadow-[0_2px_10px_-8px_rgba(18,19,22,0.4)]">
                <span class="block font-['Space_Grotesk'] text-[9px] uppercase tracking-[0.18em] text-[#8F91A0]">
                  TOEFL
                </span>
                <span class="mt-1 block font-['Syne'] text-2xl font-bold leading-none text-[#121316]">{{ toeflScore }}</span>
              </div>
              <div class="rounded-xl border border-black/[0.08] bg-white p-3.5 shadow-[0_2px_10px_-8px_rgba(18,19,22,0.4)]">
                <span class="block font-['Space_Grotesk'] text-[9px] uppercase tracking-[0.18em] text-[#8F91A0]">
                  Sertifikasi
                </span>
                <span class="mt-1 block font-['Syne'] text-2xl font-bold leading-none text-[#121316]">{{ certificationCount }}</span>
              </div>
            </div>

            <button
              type="button"
              @click="$emit('open-cv')"
              class="group mt-6 inline-flex items-center gap-2 font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-[0.18em] text-[#6D28D9] transition-colors hover:text-[#121316] cursor-pointer"
            >
              Lihat CV Lengkap
              <span class="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </button>
          </div>

          <!-- Right: Graduation Photo Collage -->
          <div class="lg:col-span-8">
            <div class="mb-4 flex items-center justify-between gap-3">
              <span class="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-[0.2em] text-[#575965]">
                Dokumentasi Kelulusan
              </span>
              <span class="font-['Space_Grotesk'] text-[9px] uppercase tracking-[0.18em] text-[#8F91A0]">
                03 Foto · 07.06.2026
              </span>
            </div>

            <div class="relative">
              <!-- Editorial watermark -->
              <span aria-hidden="true" class="pointer-events-none absolute -top-8 right-0 hidden select-none font-['Syne'] text-[92px] font-extrabold leading-none tracking-tighter text-[#121316]/[0.045] lg:block">
                2026
              </span>

              <div class="no-scrollbar -mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-2 md:mx-0 md:grid md:grid-cols-12 md:items-start md:gap-3 md:overflow-visible md:px-0 md:pb-20">
                <figure
                  v-for="(photo, index) in education.gallery"
                  :key="photo.src"
                  class="group relative w-[72%] shrink-0 snap-start md:w-auto"
                  :class="collageClasses[index]"
                >
                  <!-- Washi tape -->
                  <span
                    aria-hidden="true"
                    class="absolute -top-2 left-1/2 z-20 hidden h-4 w-14 -translate-x-1/2 -rotate-3 bg-[#FEF08A]/85 shadow-[0_2px_6px_-3px_rgba(18,19,22,0.5)] md:block"
                  ></span>

                  <button
                    type="button"
                    @click="openLightbox(index)"
                    class="block w-full cursor-pointer focus:outline-none"
                    :aria-label="`Perbesar foto ${photo.label} ${photo.index}`"
                  >
                    <span class="block rounded-[3px] border border-black/[0.10] bg-white p-1.5 pb-0 shadow-[0_14px_30px_-18px_rgba(18,19,22,0.5),0_2px_6px_-3px_rgba(18,19,22,0.15)] transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_24px_45px_-22px_rgba(18,19,22,0.55)] group-focus-visible:ring-2 group-focus-visible:ring-[#7C3AED] group-focus-visible:ring-offset-2">
                      <span class="relative block overflow-hidden rounded-[2px] bg-[#F0EFF6]">
                        <img
                          :src="photo.thumb"
                          :alt="photo.alt"
                          width="600"
                          height="900"
                          loading="lazy"
                          decoding="async"
                          draggable="false"
                          class="aspect-[2/3] w-full select-none object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                        />

                        <span class="absolute left-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#121316]/85 font-['Space_Grotesk'] text-[8px] font-bold tracking-wider text-white backdrop-blur-sm">
                          {{ photo.index }}
                        </span>
                        <span class="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-white/40 bg-black/25 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                          <svg class="h-2.5 w-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path>
                          </svg>
                        </span>
                      </span>

                      <span class="flex items-center justify-between gap-2 px-1 py-2">
                        <span class="font-['Syne'] text-[10px] font-bold leading-tight text-[#121316]">
                          {{ photo.label }}
                        </span>
                        <span class="shrink-0 font-['Space_Grotesk'] text-[8px] uppercase tracking-[0.16em] text-[#8F91A0]">
                          {{ photo.meta }}
                        </span>
                      </span>
                    </span>
                  </button>
                </figure>
              </div>
            </div>

            <div class="mt-2 flex items-center justify-between gap-3">
              <p class="font-['Space_Grotesk'] text-[9px] uppercase tracking-[0.16em] text-[#8F91A0]">
                Arsip pribadi · Universitas Advent Indonesia
              </p>
              <p class="font-['Space_Grotesk'] text-[9px] uppercase tracking-[0.16em] text-[#8F91A0]">
                <span class="md:hidden">Geser &amp; ketuk foto</span>
                <span class="hidden md:inline">Klik foto untuk memperbesar</span>
              </p>
            </div>
          </div>
        </div>

        <!-- Academic Milestones -->
        <div class="mt-9 border-t border-black/[0.08] pt-6">
          <div class="mb-5 flex items-center justify-between gap-3">
            <span class="font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-[0.2em] text-[#575965]">
              Lini Masa Akademik
            </span>
            <span class="font-['Space_Grotesk'] text-[9px] uppercase tracking-[0.18em] text-[#8F91A0]">
              2022 — 2026
            </span>
          </div>

          <div class="relative">
            <div class="pointer-events-none absolute left-0 right-0 top-[3px] hidden h-px bg-black/10 lg:block"></div>
            <div class="relative grid grid-cols-2 gap-x-5 gap-y-5 lg:grid-cols-4">
              <div v-for="(milestone, index) in education.milestones" :key="milestone.year">
                <div class="flex items-center gap-2">
                  <span
                    class="relative z-10 h-1.5 w-1.5 rounded-full"
                    :class="index === education.milestones.length - 1 ? 'bg-[#121316] ring-2 ring-[#121316]/10' : 'bg-[#8B5CF6]'"
                  ></span>
                  <span class="font-['Syne'] text-lg font-bold leading-none text-[#121316]">{{ milestone.year }}</span>
                </div>
                <span class="mt-2 block font-['Space_Grotesk'] text-[10px] font-bold uppercase tracking-[0.14em] text-[#434655]">
                  {{ milestone.title }}
                </span>
                <span class="mt-1 block font-['Plus_Jakarta_Sans'] text-[11px] leading-snug text-[#575965]">
                  {{ milestone.detail }}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Accessible Photo Lightbox -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="lightboxIndex !== null"
          class="fixed inset-0 z-[90] flex flex-col bg-[#07070A]/95 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label="Galeri dokumentasi pendidikan"
          @click.self="closeLightbox"
        >
          <!-- Lightbox Top Bar -->
          <div class="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 px-4 py-4 sm:px-8">
            <div class="flex min-w-0 items-center gap-3">
              <span class="hidden h-2 w-2 shrink-0 rounded-full bg-[#FEF08A] sm:block"></span>
              <span class="truncate font-['Syne'] text-sm font-bold text-white sm:text-base">
                {{ currentPhoto.label }}
              </span>
              <span class="hidden font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.18em] text-white/70 sm:block">
                {{ currentPhoto.meta }}
              </span>
            </div>

            <div class="flex shrink-0 items-center gap-3 sm:gap-5">
              <span class="font-['Space_Grotesk'] text-[11px] tabular-nums tracking-[0.18em] text-white/70" aria-live="polite">
                {{ counter }}
              </span>
              <button
                ref="closeButton"
                type="button"
                @click="closeLightbox"
                class="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FEF08A] cursor-pointer"
                aria-label="Tutup galeri"
              >
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M18 6 6 18M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Lightbox Stage -->
          <div
            class="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden px-4 py-4 sm:px-20 sm:py-6"
            @click.self="closeLightbox"
          >
            <button
              type="button"
              @click="prevPhoto"
              class="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#121316] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FEF08A] cursor-pointer sm:left-6 sm:h-12 sm:w-12"
              aria-label="Foto sebelumnya"
            >
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </button>

            <Transition name="fade" mode="out-in">
              <img
                :key="currentPhoto.src"
                :src="currentPhoto.src"
                :alt="currentPhoto.alt"
                width="1200"
                height="1800"
                draggable="false"
                class="max-h-full max-w-full select-none rounded-lg object-contain shadow-2xl"
              />
            </Transition>

            <button
              type="button"
              @click="nextPhoto"
              class="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#121316] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FEF08A] cursor-pointer sm:right-6 sm:h-12 sm:w-12"
              aria-label="Foto berikutnya"
            >
              <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>

          <!-- Lightbox Thumbnail Strip -->
          <div class="flex shrink-0 items-center justify-between gap-4 border-t border-white/10 px-4 py-4 sm:px-8">
            <p class="hidden font-['Plus_Jakarta_Sans'] text-xs text-white/60 sm:block">
              {{ currentPhoto.alt }}
            </p>

            <div class="mx-auto flex items-center gap-2 sm:mx-0">
              <button
                v-for="(photo, index) in education.gallery"
                :key="photo.src"
                type="button"
                @click="lightboxIndex = index"
                class="overflow-hidden rounded-md border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FEF08A] cursor-pointer"
                :class="lightboxIndex === index ? 'border-[#FEF08A] opacity-100 ring-2 ring-[#FEF08A]/25' : 'border-white/10 opacity-50 hover:opacity-90'"
                :aria-label="`Lihat foto ${photo.index}`"
                :aria-current="lightboxIndex === index ? 'true' : undefined"
              >
                <img :src="photo.thumb" alt="" width="600" height="900" class="aspect-[2/3] w-8 object-cover sm:w-10" />
              </button>
            </div>

            <span class="hidden font-['Space_Grotesk'] text-[9px] uppercase tracking-[0.18em] text-white/50 sm:block">
              Esc · ← →
            </span>
          </div>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
  education: {
    type: Object,
    required: true
  }
})

defineEmits(['open-cv'])

// Staggered collage: big frame dropped, middle frame high, small frame lowest.
const collageClasses = [
  'md:col-span-5 md:mt-10 lg:rotate-[-2deg] hover:z-30',
  'md:col-span-4 md:mt-0 lg:-ml-3 lg:rotate-[1.5deg] hover:z-30',
  'md:col-span-3 md:mt-24 lg:-ml-6 lg:rotate-[-1.5deg] hover:z-30'
]

const lightboxIndex = ref(null)
const closeButton = ref(null)
let previouslyFocused = null
let previousOverflow = ''

const currentPhoto = computed(() => {
  const index = lightboxIndex.value ?? 0
  return props.education.gallery[index] ?? props.education.gallery[0]
})

const toeflScore = computed(
  () => props.education.credentials.find((item) => item.label === 'TOEFL')?.value ?? '—'
)

const certificationCount = computed(
  () => String(props.education.credentials.filter((item) => item.label !== 'TOEFL').length).padStart(2, '0')
)

const counter = computed(() => {
  const current = (lightboxIndex.value ?? 0) + 1
  return `${String(current).padStart(2, '0')} / ${String(props.education.gallery.length).padStart(2, '0')}`
})

const openLightbox = (index) => {
  previouslyFocused = document.activeElement
  lightboxIndex.value = index
  nextTick(() => closeButton.value?.focus())
}

const closeLightbox = () => {
  lightboxIndex.value = null
  nextTick(() => {
    if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
      previouslyFocused.focus()
    }
  })
}

const nextPhoto = () => {
  if (lightboxIndex.value === null) return
  lightboxIndex.value = (lightboxIndex.value + 1) % props.education.gallery.length
}

const prevPhoto = () => {
  if (lightboxIndex.value === null) return
  lightboxIndex.value = (lightboxIndex.value - 1 + props.education.gallery.length) % props.education.gallery.length
}

const focusableSelector = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

const handleKeydown = (event) => {
  if (lightboxIndex.value === null) return

  if (event.key === 'Tab') {
    const dialog = document.querySelector('[role="dialog"]')
    if (!dialog) return

    const focusable = Array.from(dialog.querySelectorAll(focusableSelector))
    if (!focusable.length) return

    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
    return
  }

  if (event.key === 'Escape') {
    closeLightbox()
  } else if (event.key === 'ArrowRight') {
    event.preventDefault()
    nextPhoto()
  } else if (event.key === 'ArrowLeft') {
    event.preventDefault()
    prevPhoto()
  }
}

watch(lightboxIndex, (value, oldValue) => {
  if (value !== null && oldValue === null) {
    previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
  } else if (value === null && oldValue !== null) {
    document.body.style.overflow = previousOverflow
  }
})

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = previousOverflow
})
</script>
