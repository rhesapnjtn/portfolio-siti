<template>
  <transition
    enter-active-class="transition duration-250 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div
      v-if="project"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
      @click.self="$emit('close')"
    >
      <div class="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-black/10 overflow-hidden max-h-[90vh] flex flex-col">
        
        <!-- Modal Top Bar -->
        <div class="px-6 sm:px-8 py-5 bg-[#FAF9FD] border-b border-black/[0.08] flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="font-['Syne'] font-extrabold text-xl text-[#8B5CF6]">
              {{ project.id }}
            </span>
            <span class="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-[#121316]">
              DETAIL KONTRIBUSI // {{ project.title }}
            </span>
          </div>

          <button
            @click="$emit('close')"
            class="w-8 h-8 rounded-full bg-white border border-black/10 flex items-center justify-center text-[#121316] hover:bg-black/5 cursor-pointer"
            aria-label="Tutup jendela"
          >
            ✕
          </button>
        </div>

        <!-- Content Body -->
        <div class="p-6 sm:p-10 overflow-y-auto space-y-8 flex-1">
          
          <!-- Title & Meta -->
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="px-3 py-1 rounded-full bg-[#8B5CF6]/15 text-[#7C3AED] text-xs font-['Space_Grotesk'] font-semibold uppercase">
                {{ project.category }}
              </span>
              <span class="text-xs text-[#8F91A0] font-['Space_Grotesk'] uppercase">
                {{ project.role }} • {{ project.year }}
              </span>
            </div>
            <h2 class="font-['Syne'] font-bold text-3xl sm:text-4xl text-[#121316]">
              {{ project.title }}
            </h2>
            <p class="font-['Space_Grotesk'] text-sm text-[#8B5CF6] font-semibold mt-1">
              {{ project.subtitle }}
            </p>
          </div>

          <!-- Problem & Solution -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="p-5 rounded-xl bg-[#FAF9FD] border border-black/5">
              <span class="font-['Space_Grotesk'] text-xs font-bold text-[#E11D48] uppercase tracking-wider block mb-2">
                01 / KONTEKS &amp; TANTANGAN
              </span>
              <p class="font-['Plus_Jakarta_Sans'] text-sm text-[#575965] leading-relaxed">
                {{ project.problem }}
              </p>
            </div>

            <div class="p-5 rounded-xl bg-[#FAF9FD] border border-black/5">
              <span class="font-['Space_Grotesk'] text-xs font-bold text-[#16A34A] uppercase tracking-wider block mb-2">
                02 / KONTRIBUSI SAYA
              </span>
              <p class="font-['Plus_Jakarta_Sans'] text-sm text-[#575965] leading-relaxed">
                {{ project.solution }}
              </p>
            </div>
          </div>

          <!-- System Flow Diagram -->
          <div class="p-6 rounded-xl border border-black/10 bg-[#FAF9FD]">
            <span class="font-['Space_Grotesk'] text-xs font-bold text-[#1D4ED8] uppercase tracking-wider block mb-4">
              ALUR KERJA &amp; METODOLOGI
            </span>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
              <div class="p-4 rounded-lg bg-white border border-black/10 shadow-2xs">
                <span class="font-['Space_Grotesk'] text-[11px] font-bold text-[#8B5CF6] uppercase block mb-1">PERENCANAAN</span>
                <span class="font-['Syne'] font-bold text-sm text-[#121316] block">Persiapan &amp; Penataan</span>
                <span class="text-[11px] text-[#575965] font-['Space_Grotesk']">Kebutuhan • Jadwal • Berkas</span>
              </div>
              <div class="p-4 rounded-lg bg-white border border-black/10 shadow-2xs">
                <span class="font-['Space_Grotesk'] text-[11px] font-bold text-[#1D4ED8] uppercase block mb-1">KOORDINASI</span>
                <span class="font-['Syne'] font-bold text-sm text-[#121316] block">Kolaborasi Lintas Tim</span>
                <span class="text-[11px] text-[#575965] font-['Space_Grotesk']">Panitia • Vendor • Unit Kerja</span>
              </div>
              <div class="p-4 rounded-lg bg-white border border-black/10 shadow-2xs">
                <span class="font-['Space_Grotesk'] text-[11px] font-bold text-[#16A34A] uppercase block mb-1">DOKUMENTASI</span>
                <span class="font-['Syne'] font-bold text-sm text-[#121316] block">Pencatatan &amp; Pelaporan</span>
                <span class="text-[11px] text-[#575965] font-['Space_Grotesk']">Notulen • Rekap • Laporan LPJ</span>
              </div>
            </div>
          </div>

          <!-- Key Metrics -->
          <div>
            <span class="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-[#8F91A0] block mb-3">
              SEKILAS PROYEK
            </span>
            <div class="grid grid-cols-3 gap-3">
              <div
                v-for="(metric, mIndex) in project.metrics"
                :key="mIndex"
                class="p-4 rounded-lg bg-[#FAF9FD] border border-black/5 text-center"
              >
                <span class="font-['Syne'] font-bold text-xl text-[#121316] block">
                  {{ metric.value }}
                </span>
                <span class="font-['Space_Grotesk'] text-[11px] text-[#575965] uppercase">
                  {{ metric.label }}
                </span>
              </div>
            </div>
          </div>

          <!-- Tech Stack Tags -->
          <div>
            <span class="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-[#8F91A0] block mb-3">
              TANGGUNG JAWAB &amp; FOKUS KERJA
            </span>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-4 py-1.5 rounded-full bg-[#FEF08A] text-[#121316] text-xs font-['Space_Grotesk'] font-bold tracking-wider uppercase border border-black/5"
              >
                {{ tag }}
              </span>
            </div>
          </div>

        </div>

        <!-- Modal Bottom Actions -->
        <div class="p-5 bg-[#FAF9FD] border-t border-black/[0.08] flex items-center justify-between">
          <span class="text-xs text-[#8F91A0] font-['Space_Grotesk'] uppercase">
            {{ project.id }} // Rekam Jejak Portofolio
          </span>
          <div class="flex items-center gap-3">
            <button
              @click="$emit('close')"
              class="px-4 py-2 rounded-sm border border-black/20 text-[#121316] text-xs font-['Space_Grotesk'] font-bold uppercase hover:bg-black/5 transition-colors cursor-pointer"
            >
              Tutup
            </button>
            <button
              @click="$emit('close'); $emit('navigate-contact')"
              class="px-5 py-2 rounded-sm bg-[#121316] text-white text-xs font-['Space_Grotesk'] font-bold uppercase hover:bg-[#1D4ED8] transition-colors btn-hard-offset cursor-pointer"
            >
              Hubungi Saya →
            </button>
          </div>
        </div>

      </div>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    default: null
  }
})

defineEmits(['close', 'navigate-contact'])
</script>
