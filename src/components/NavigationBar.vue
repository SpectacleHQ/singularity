<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const { y } = useWindowScroll()
const visible = ref(false)

onMounted(() => {
  setTimeout(() => {
    visible.value = true
  }, 500)
})

const links = computed(() => [
  { label: t('nav.work'), href: '#showcase' },
  { label: t('nav.capabilities'), href: '#bento' },
  { label: t('nav.impact'), href: '#stats' },
])

const otherLang = computed(() => (locale.value === 'en' ? '中文' : 'EN'))

function toggleLocale() {
  locale.value = locale.value === 'en' ? 'zh' : 'en'
}
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
    :class="[
      visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0',
      y > 50 ? 'glass bg-surface-overlay/80 border-b border-border/50' : '',
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-3 group">
        <span class="text-gold text-xl font-serif italic">◈</span>
        <span
          class="font-mono text-xs tracking-[0.3em] uppercase text-foreground/80 group-hover:text-gold transition-colors duration-300"
        >
          Singularity
        </span>
      </a>

      <!-- Links -->
      <div class="hidden md:flex items-center gap-10">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          class="link-underline font-mono text-xs tracking-widest uppercase text-foreground/50 hover:text-foreground transition-colors duration-300"
        >
          {{ link.label }}
        </a>
      </div>

      <!-- Right side -->
      <div class="flex items-center gap-4">
        <!-- Language toggle -->
        <button
          @click="toggleLocale"
          class="px-3 py-1.5 border border-border/40 text-foreground/50 font-mono text-[10px] tracking-[0.15em] uppercase hover:border-gold/30 hover:text-gold transition-all duration-300 cursor-pointer"
        >
          {{ otherLang }}
        </button>

        <!-- CTA -->
        <a
          href="#contact"
          class="hidden sm:inline-flex px-5 py-2 border border-gold/30 text-gold font-mono text-xs tracking-widest uppercase hover:bg-gold/10 hover:border-gold/60 transition-all duration-300"
        >
          {{ t('nav.connect') }}
        </a>
      </div>
    </div>
  </nav>
</template>
