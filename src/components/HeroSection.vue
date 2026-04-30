<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import ParticleCanvas from './ParticleCanvas.vue'

const { t } = useI18n()
const loaded = ref(false)

const roles = computed(() => t('hero.roles') as unknown as string[])
const currentRole = ref(0)
let roleTimer = 0

onMounted(() => {
  loaded.value = true
  roleTimer = window.setInterval(() => {
    currentRole.value = (currentRole.value + 1) % roles.value.length
  }, 2400)
})

onUnmounted(() => {
  clearInterval(roleTimer)
})
</script>

<template>
  <section class="relative min-h-[100dvh] flex items-center overflow-hidden">
    <!-- Aurora Background -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gold/8 blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" />
      <div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gold-dim/6 blur-[100px] animate-[pulse_12s_ease-in-out_infinite_2s]" />
      <div class="absolute top-[30%] right-[20%] w-[30%] h-[30%] rounded-full bg-accent/4 blur-[80px] animate-[pulse_10s_ease-in-out_infinite_4s]" />
    </div>

    <!-- Particles -->
    <ParticleCanvas />

    <!-- Grid lines (decorative) -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.03]">
      <div class="absolute top-0 left-1/4 w-px h-full bg-foreground" />
      <div class="absolute top-0 left-1/2 w-px h-full bg-foreground" />
      <div class="absolute top-0 left-3/4 w-px h-full bg-foreground" />
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
      <!-- Top tag -->
      <div class="mb-8 md:mb-12 anim-fade-up">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 border border-gold/20 rounded-full font-mono text-[10px] tracking-[0.2em] uppercase text-gold/80">
          <span class="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          {{ t('hero.tagline') }}
        </span>
      </div>

      <!-- Main heading -->
      <div class="relative">
        <div class="anim-fade-up">
          <h1 class="font-serif text-[clamp(2.2rem,8vw,9rem)] leading-[1.0] tracking-tight text-foreground">
            {{ t('hero.where') }}
          </h1>
        </div>

        <div class="mt-2 md:mt-4 anim-fade-up">
          <h1 class="font-serif text-[clamp(2.2rem,8vw,9rem)] leading-[1.0] tracking-tight">
            <span class="text-gradient-gold italic">{{ t('hero.imagination') }}</span>
          </h1>
        </div>

        <div class="mt-2 md:mt-4 anim-fade-up">
          <div class="font-serif text-[clamp(2.2rem,8vw,9rem)] leading-[1.0] tracking-tight text-foreground/90 flex flex-wrap items-baseline gap-x-0 w-fit">
            <span>{{ t('hero.meets') }}</span>
            <span class="font-mono text-[clamp(1rem,4vw,3.5rem)] text-gold/60">[</span>
            <span class="w-fit h-[1em] overflow-hidden align-bottom">
              <span
                class="block transition-all duration-500 ease-in-out text-gradient-gold whitespace-nowrap"
                :style="{ transform: `translateY(-${currentRole * 100}%)` }"
              >
                <span v-for="(role, i) in roles" :key="i" class="block h-[1em] font-serif italic">
                  {{ role }}
                </span>
              </span>
            </span>
            <span class="font-mono text-[clamp(1rem,4vw,3.5rem)] text-gold/60">]</span>
          </div>
        </div>
      </div>

      <!-- Bottom info -->
      <div class="mt-16 md:mt-24 flex flex-col md:flex-row md:items-end justify-between gap-8 anim-fade-up">
        <p class="font-sans text-sm md:text-base text-foreground/40 max-w-md leading-relaxed">
          {{ t('hero.description') }}
        </p>

        <div class="flex items-center gap-6">
          <div class="text-right">
            <p class="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/30">{{ t('hero.basedIn') }}</p>
            <p class="font-serif text-lg text-foreground/70 italic">{{ t('hero.location') }}</p>
          </div>
          <div class="w-px h-10 bg-border" />
          <div class="text-right">
            <p class="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/30">{{ t('hero.focus') }}</p>
            <p class="font-serif text-lg text-foreground/70 italic">{{ t('hero.role') }}</p>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 anim-fade-up">
        <span class="font-mono text-[9px] tracking-[0.3em] uppercase text-foreground/20">{{ t('hero.scroll') }}</span>
        <div class="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent animate-pulse" />
      </div>
    </div>
  </section>
</template>
