<script setup lang="ts">
import { ref } from 'vue'
import { useElementVisibility } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const sectionRef = ref<HTMLElement | null>(null)
const isVisible = useElementVisibility(sectionRef)

const features = [
  {
    key: 'designSystems',
    icon: '◇',
    span: 'col-span-1 md:col-span-2 row-span-1',
    accent: true,
  },
  {
    key: 'webgl',
    icon: '△',
    span: 'col-span-1 row-span-1 md:row-span-2',
    accent: false,
  },
  {
    key: 'motion',
    icon: '○',
    span: 'col-span-1 row-span-1',
    accent: false,
  },
  {
    key: 'performance',
    icon: '⚡',
    span: 'col-span-1 row-span-1',
    accent: false,
  },
  {
    key: 'creative',
    icon: '◈',
    span: 'col-span-1 md:col-span-2 row-span-1',
    accent: true,
  },
]
</script>

<template>
  <section id="bento" ref="sectionRef" class="relative py-24 md:py-40 px-6 md:px-12">
    <div class="max-w-7xl mx-auto">
      <!-- Section header -->
      <div class="mb-16 md:mb-24" :class="isVisible ? 'anim-fade-up' : 'opacity-0'">
        <span class="font-mono text-[10px] tracking-[0.3em] uppercase text-gold/60 block mb-4">{{ t('bento.label') }}</span>
        <h2 class="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground/90 leading-[1.1]">
          {{ t('bento.title', { italic: '' }) }}<span class="italic text-gradient-gold">{{ t('bento.titleItalic') }}</span>
        </h2>
      </div>

      <!-- Bento grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        <div
          v-for="(feature, index) in features"
          :key="feature.key"
          :class="[
            feature.span,
            isVisible ? 'anim-scale-in' : 'opacity-0',
          ]"
          :style="{ animationDelay: `${0.15 * index}s` }"
          class="group relative border border-border/40 bg-surface/50 p-6 md:p-8 overflow-hidden transition-all duration-500 hover:border-gold/30 hover:bg-surface-raised/50"
        >
          <!-- Hover glow -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/5 to-transparent" />
          </div>

          <!-- Content -->
          <div class="relative z-10 h-full flex flex-col">
            <span class="text-2xl md:text-3xl mb-4" :class="feature.accent ? 'text-gold' : 'text-foreground/20'">
              {{ feature.icon }}
            </span>
            <h3 class="font-serif text-xl md:text-2xl text-foreground/90 mb-2">
              {{ t(`bento.items.${feature.key}.title`) }}
            </h3>
            <p class="font-sans text-sm text-foreground/40 leading-relaxed mt-auto">
              {{ t(`bento.items.${feature.key}.description`) }}
            </p>

            <!-- Corner accent -->
            <div
              v-if="feature.accent"
              class="absolute top-0 right-0 w-16 h-16 opacity-20"
            >
              <div class="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-gold to-transparent" />
              <div class="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-gold to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
