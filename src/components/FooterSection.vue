<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const loaded = ref(false)
onMounted(() => {
  loaded.value = true
})

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer id="contact" class="relative border-t border-border/30">
    <!-- Big CTA -->
    <div class="px-6 md:px-16 lg:px-24 py-24 md:py-40">
      <div class="text-center" :class="loaded ? 'anim-fade-up' : 'opacity-0'">
        <span class="font-mono text-[10px] tracking-[0.3em] uppercase text-gold/60 block mb-6">{{
          t('footer.label')
        }}</span>
        <h2
          class="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground/90 leading-[1.05] mb-8"
        >
          {{ t('footer.title') }}<br />
          {{ t('footer.titleLine2', { italic: '' })
          }}<span class="italic text-gradient-gold">{{ t('footer.titleItalic') }}</span>
        </h2>
        <a
          href="mailto:niyouguanyu@gmail.com"
          class="inline-flex items-center gap-3 px-8 py-4 border border-gold/30 text-gold font-mono text-xs tracking-[0.2em] uppercase hover:bg-gold/10 hover:border-gold/60 transition-all duration-500 group"
        >
          <span>{{ t('footer.cta') }}</span>
          <span class="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </a>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-border/20">
      <div
        class="max-w-7xl mx-auto px-6 md:px-12 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <div class="flex items-center gap-3">
          <span class="text-gold text-sm font-serif italic">◈</span>
          <span class="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/30">
            {{ t('footer.copyright', { year: currentYear }) }}
          </span>
        </div>

        <div class="flex items-center gap-8">
          <a
            v-for="link in ['GitHub', 'Twitter', 'LinkedIn']"
            :key="link"
            href="#"
            class="link-underline font-mono text-[10px] tracking-[0.15em] uppercase text-foreground/30 hover:text-foreground/60 transition-colors duration-300"
          >
            {{ link }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
