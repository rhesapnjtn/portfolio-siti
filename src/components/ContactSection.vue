<template>
  <section id="contact" class="py-24 lg:py-32 bg-[#FAF9FD] border-t border-black/[0.06] relative">
    
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      
      <!-- Section Header -->
      <div data-reveal class="flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 pb-6 mb-16">
        <div>
          <span class="font-['Space_Grotesk'] text-xs font-bold tracking-[0.2em] text-[#8B5CF6] uppercase block mb-2">
            CHAPTER 05 / INITIATE DIALOGUE
          </span>
          <h2 class="font-['Syne'] font-bold text-4xl sm:text-5xl text-[#121316] tracking-tight">
            06 / Get in Touch
          </h2>
        </div>
        <p class="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#575965] max-w-md mt-4 md:mt-0">
          Open to opportunities in procurement, administration, and IT support—or a conversation about how I can contribute.
        </p>
      </div>

      <!-- Main Layout: 12-column editorial grid -->
      <div data-reveal style="--reveal-delay: 100ms" class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        <!-- Left Column: Editorial Consultation Form (Cols 1-7) -->
        <div class="lg:col-span-7 bg-white p-8 sm:p-12 rounded-xl border border-black/[0.08] shadow-sm">
          
          <div class="mb-8">
            <h3 class="font-['Syne'] font-bold text-2xl sm:text-3xl text-[#121316] mb-2">
              Send a Message
            </h3>
            <p class="font-['Plus_Jakarta_Sans'] text-sm text-[#575965]">
              I usually respond within 24 hours.
            </p>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-8">
            
            <!-- Full Name with Floating Space Grotesk Label -->
            <div class="relative group">
              <label class="block font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-[#575965] group-focus-within:text-[#1D4ED8] transition-colors mb-2">
                01 / YOUR NAME *
              </label>
              <input
                v-model="form.name"
                type="text"
                required
                placeholder="e.g. Raditya Pratama"
                class="w-full input-editorial py-2.5 text-base text-[#121316] placeholder:text-[#8F91A0]/60 font-['Plus_Jakarta_Sans']"
              />
            </div>

            <!-- Email Address -->
            <div class="relative group">
              <label class="block font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-[#575965] group-focus-within:text-[#1D4ED8] transition-colors mb-2">
                02 / WORK OR PERSONAL EMAIL *
              </label>
              <input
                v-model="form.email"
                type="email"
                required
                placeholder="e.g. r.pratama@company.com"
                class="w-full input-editorial py-2.5 text-base text-[#121316] placeholder:text-[#8F91A0]/60 font-['Plus_Jakarta_Sans']"
              />
            </div>

            <!-- Category of Interest -->
            <div class="relative group">
              <label class="block font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-[#575965] group-focus-within:text-[#1D4ED8] transition-colors mb-2">
                03 / ENGAGEMENT SCOPE
              </label>
              <select
                v-model="form.category"
                class="w-full input-editorial py-2.5 text-base text-[#121316] font-['Plus_Jakarta_Sans'] cursor-pointer"
              >
                <option value="Procurement / Administration Opportunity">Procurement / Administration Opportunity</option>
                <option value="IT Support / Data Role">IT Support / Data Role</option>
                <option value="Internship / Entry-Level Position">Internship / Entry-Level Position</option>
                <option value="General Collaboration">General Collaboration</option>
              </select>
            </div>

            <!-- Message Field -->
            <div class="relative group">
              <label class="block font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-[#575965] group-focus-within:text-[#1D4ED8] transition-colors mb-2">
                04 / PROJECT OVERVIEW OR INVITATION *
              </label>
              <textarea
                v-model="form.message"
                rows="4"
                required
                placeholder="Describe your project, team requirements, or internship deployment timeline..."
                class="w-full input-editorial py-2.5 text-base text-[#121316] placeholder:text-[#8F91A0]/60 font-['Plus_Jakarta_Sans'] resize-none"
              ></textarea>
            </div>

            <!-- Submit Button (Primary Action from DESIGN.md) -->
            <div class="pt-4 flex items-center justify-between">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="inline-flex items-center gap-3 px-8 py-3.5 rounded-[0.25rem] bg-[#121316] text-[#FAF9FD] text-xs font-['Space_Grotesk'] font-bold tracking-[0.15em] uppercase hover:bg-[#1D4ED8] btn-hard-offset transition-colors cursor-pointer disabled:opacity-50"
              >
                <span v-if="!isSubmitting">SEND MESSAGE</span>
                <span v-else>OPENING EMAIL...</span>
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>

              <transition name="fade">
                <span v-if="submittedSuccess" class="font-['Space_Grotesk'] text-xs font-semibold text-[#16A34A] flex items-center gap-1.5">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  Your email draft is ready.
                </span>
              </transition>
            </div>

          </form>

        </div>

        <!-- Right Column: Direct Channels & Status Card (Cols 8-12) -->
        <div class="lg:col-span-5 space-y-6">
          
          <!-- Open Opportunities Banner -->
          <div class="p-7 rounded-xl bg-white border border-[#8B5CF6]/30 shadow-xs relative overflow-hidden">
            <div class="absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-[#8B5CF6]/10 blur-2xl pointer-events-none"></div>

            <div class="flex items-center gap-2.5 mb-3">
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B5CF6] opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-[#8B5CF6]"></span>
              </span>
              <span class="font-['Space_Grotesk'] text-xs font-bold text-[#8B5CF6] uppercase tracking-wider">
                PROGRAM READY
              </span>
            </div>

            <h4 class="font-['Syne'] font-bold text-xl text-[#121316] mb-2">
              Open to Opportunities
            </h4>
            <p class="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-[#575965] leading-relaxed mb-4">
              Information Systems graduate open to procurement, administration, and IT support roles.
            </p>

            <button
              @click="$emit('open-cv')"
              class="inline-flex items-center gap-2 text-xs font-['Space_Grotesk'] font-bold uppercase tracking-wider text-[#1D4ED8] hover:text-[#121316] transition-colors cursor-pointer"
            >
              <span>View / Download CV</span>
              <span>→</span>
            </button>
          </div>

          <!-- Direct Contact Cards -->
          <div class="bg-white rounded-xl p-7 border border-black/[0.08] shadow-xs space-y-5">
            
            <h4 class="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-widest text-[#8F91A0] pb-3 border-b border-black/[0.06]">
              DIRECT CHANNELS
            </h4>

            <!-- Email with Copy Toast -->
            <div class="flex items-center justify-between p-3 rounded-lg bg-[#FAF9FD] border border-black/5">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center text-[#7C3AED]">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                  <span class="text-[11px] font-['Space_Grotesk'] text-[#8F91A0] uppercase block">Email Address</span>
                  <span class="text-xs sm:text-sm font-semibold text-[#121316]">{{ personal.email }}</span>
                </div>
              </div>
              <button
                @click="copyEmail"
                class="px-3 py-1.5 rounded-sm bg-white border border-black/10 text-[11px] font-['Space_Grotesk'] font-bold uppercase hover:bg-[#121316] hover:text-white transition-colors cursor-pointer"
              >
                {{ emailCopied ? 'COPIED!' : 'COPY' }}
              </button>
            </div>

            <!-- WhatsApp Link -->
            <a
              :href="personal.whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-between p-3 rounded-lg bg-[#FAF9FD] border border-black/5 hover:border-[#16A34A]/40 transition-colors group"
            >
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-full bg-[#16A34A]/10 flex items-center justify-center text-[#16A34A]">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </div>
                <div>
                  <span class="text-[11px] font-['Space_Grotesk'] text-[#8F91A0] uppercase block">WhatsApp Messenger</span>
                  <span class="text-xs sm:text-sm font-semibold text-[#121316]">{{ personal.phone }}</span>
                </div>
              </div>
              <span class="text-xs text-[#8F91A0] group-hover:text-[#16A34A] transition-colors">Chat →</span>
            </a>

            <!-- Social Links Grid -->
            <div class="grid grid-cols-2 gap-3 pt-2">
              <a
                :href="personal.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2.5 p-3 rounded-lg bg-[#FAF9FD] border border-black/5 hover:border-[#1D4ED8]/40 transition-colors group"
              >
                <span class="font-['Space_Grotesk'] font-bold text-xs text-[#1D4ED8]">IN</span>
                <span class="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-[#121316]">LinkedIn Profile</span>
              </a>

              <div
                class="flex items-center gap-2.5 p-3 rounded-lg bg-[#FAF9FD] border border-black/5"
              >
                <span class="font-['Space_Grotesk'] font-bold text-xs text-[#121316]">ID</span>
                <span class="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-[#121316]">Matraman, Jakarta</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue'
import { portfolioData } from '../data/portfolio.js'

defineEmits(['open-cv'])

const personal = portfolioData.personal

const form = ref({
  name: '',
  email: '',
  category: 'Procurement / Administration Opportunity',
  message: ''
})

const isSubmitting = ref(false)
const submittedSuccess = ref(false)
const emailCopied = ref(false)

const handleSubmit = () => {
  isSubmitting.value = true
  const subject = `Portfolio inquiry — ${form.value.category}`
  const body = `Name: ${form.value.name}\nEmail: ${form.value.email}\nOpportunity: ${form.value.category}\n\n${form.value.message}`
  window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  setTimeout(() => {
    isSubmitting.value = false
    submittedSuccess.value = true
    form.value.name = ''
    form.value.email = ''
    form.value.message = ''
    setTimeout(() => {
      submittedSuccess.value = false
    }, 5000)
  }, 600)
}

const copyEmail = () => {
  navigator.clipboard.writeText(personal.email)
  emailCopied.value = true
  setTimeout(() => {
    emailCopied.value = false
  }, 2500)
}
</script>
