<script setup lang="ts">
import { ref, watch } from 'vue'
import { useElementVisibility } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const sectionRef = ref<HTMLElement | null>(null)
const isVisible = useElementVisibility(sectionRef)
const hasAnimated = ref(false)

const statKeys = ['experience', 'projects', 'clients', 'satisfaction'] as const

watch(isVisible, (v) => {
  if (v && !hasAnimated.value) {
    hasAnimated.value = true
  }
})

function useCounter(target: number) {
  const current = ref(0)
  watch(
    hasAnimated,
    (a) => {
      if (!a) return
      const duration = 2000
      const steps = 60
      const increment = target / steps
      let step = 0
      const timer = setInterval(() => {
        step++
        current.value = Math.min(Math.round(increment * step), target)
        if (step >= steps) clearInterval(timer)
      }, duration / steps)
    },
  )
  return current
}

const counters = {
  experience: useCounter(8),
  projects: useCounter(120),
  clients: useCounter(40),
  satisfaction: useCounter(99),
}
</script>

<template>
  <section id="stats" ref="sectionRef" class="relative py-24 md:py-40">
    <!-- Background accent -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.02] to-transparent pointer-events-none" />

    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <!-- Section header -->
      <div class="text-center mb-16 md:mb-24" :class="isVisible ? 'anim-fade-up' : 'opacity-0'">
        <span class="font-mono text-[10px] tracking-[0.3em] uppercase text-gold/60 block mb-4">{{ t('stats.label') }}</span>
        <h2 class="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground/90">
          {{ t('stats.title', { italic: '' }) }}<span class="italic text-gradient-gold">{{ t('stats.titleItalic') }}</span>
        </h2>
      </div>

      <!-- Stats grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        <div
          v-for="(key, index) in statKeys"
          :key="key"
          :class="isVisible ? 'anim-fade-up' : 'opacity-0'"
          :style="{ animationDelay: `${0.1 * index}s` }"
          class="group text-center md:text-left"
        >
          <div class="font-serif text-5xl md:text-6xl lg:text-7xl text-gradient-gold leading-none mb-3">
            {{ counters[key]?.value ?? 0 }}{{ key === 'satisfaction' ? '%' : '+' }}
          </div>
          <p class="font-mono text-xs tracking-[0.15em] uppercase text-foreground/60 mb-1">
            {{ t(`stats.items.${key}.label`) }}
          </p>
          <p class="font-sans text-xs text-foreground/30">
            {{ t(`stats.items.${key}.description`) }}
          </p>
          <div class="mt-4 h-px bg-gradient-to-r from-gold/30 to-transparent w-12 group-hover:w-full transition-all duration-700" />
        </div>
      </div>
    </div>
  </section>
</template>
