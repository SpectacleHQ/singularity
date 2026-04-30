<script setup lang="ts">
import { ref } from 'vue'
import { useElementVisibility } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const sectionRef = ref<HTMLElement | null>(null)
const isVisible = useElementVisibility(sectionRef)

const projectKeys = ['nebula', 'aether', 'prism', 'echo'] as const

const gradients = [
  'from-amber-900/40 via-yellow-900/20 to-transparent',
  'from-orange-900/40 via-amber-900/20 to-transparent',
  'from-yellow-900/30 via-orange-900/20 to-transparent',
  'from-amber-950/40 via-yellow-950/20 to-transparent',
]
</script>

<template>
  <section id="showcase" ref="sectionRef" class="relative py-24 md:py-40">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <!-- Section header -->
      <div
        class="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 transition-all duration-700 ease-out"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <div>
          <span class="font-mono text-[10px] tracking-[0.3em] uppercase text-gold/60 block mb-4">{{ t('showcase.label') }}</span>
          <h2 class="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground/90 leading-[1.1]">
            {{ t('showcase.title', { italic: '' }) }}<span class="italic text-gradient-gold">{{ t('showcase.titleItalic') }}</span>
          </h2>
        </div>
        <p class="font-sans text-sm text-foreground/40 max-w-sm leading-relaxed">
          {{ t('showcase.description') }}
        </p>
      </div>

      <!-- Projects list -->
      <div class="space-y-px">
        <div
          v-for="(key, index) in projectKeys"
          :key="key"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'"
          :style="{ transitionDelay: `${120 * index}ms` }"
          class="group relative border border-border/30 bg-surface/30 p-6 md:p-10 overflow-hidden transition-all duration-700 ease-out hover:bg-surface-raised/50 hover:border-gold/20 cursor-pointer"
        >
          <!-- Background gradient on hover -->
          <div
            class="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            :class="gradients[index]"
          />

          <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8">
            <!-- Left -->
            <div class="flex items-baseline gap-4 md:gap-8">
              <span class="font-mono text-xs text-foreground/20">{{ String(index + 1).padStart(2, '0') }}</span>
              <div>
                <h3 class="font-serif text-2xl md:text-4xl text-foreground/90 group-hover:text-gradient-gold transition-all duration-300">
                  {{ t(`showcase.projects.${key}.title`) }}
                </h3>
                <p class="font-sans text-sm text-foreground/40 mt-1 md:mt-2 max-w-md">
                  {{ t(`showcase.projects.${key}.description`) }}
                </p>
              </div>
            </div>

            <!-- Right -->
            <div class="flex items-center gap-6 md:gap-8 pl-10 md:pl-0">
              <span class="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/30">
                {{ t(`showcase.projects.${key}.category`) }}
              </span>
              <span class="font-mono text-xs text-foreground/20">
                {{ t(`showcase.projects.${key}.year`) }}
              </span>
              <span class="text-gold/0 group-hover:text-gold/60 transition-all duration-500 text-lg translate-x-0 group-hover:translate-x-2">
                →
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
