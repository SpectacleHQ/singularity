<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const { y } = useWindowScroll()
const mounted = ref(false)

onMounted(() => {
  mounted.value = true
})

const links = computed(() => [
  { label: t('nav.work'), href: '#work' },
  { label: t('nav.systems'), href: '#systems' },
  { label: t('nav.impact'), href: '#impact' },
  { label: t('nav.contact'), href: '#contact' },
])

const languageLabel = computed(() => (locale.value === 'zh' ? 'EN' : '中'))

function toggleLocale() {
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
}
</script>

<template>
  <header
    class="site-nav"
    :class="{
      'site-nav--mounted': mounted,
      'site-nav--scrolled': y > 24,
    }"
  >
    <a class="brand" href="#" aria-label="Singularity home">
      <span class="brand__mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" role="img">
          <path d="M4 12h16M12 4v16M7 7l10 10M17 7 7 17" />
          <circle cx="12" cy="12" r="3.5" />
        </svg>
      </span>
      <span class="brand__name">Singularity</span>
    </a>

    <nav class="nav-links" aria-label="Primary navigation">
      <a v-for="link in links" :key="link.href" :href="link.href">
        {{ link.label }}
      </a>
    </nav>

    <div class="nav-actions">
      <button
        type="button"
        class="icon-button"
        :aria-label="t('nav.switchLanguage')"
        @click="toggleLocale"
      >
        {{ languageLabel }}
      </button>
      <a class="nav-cta" href="#contact">
        <span>{{ t('nav.start') }}</span>
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path d="M5 10h10M11 6l4 4-4 4" />
        </svg>
      </a>
    </div>
  </header>
</template>

<style scoped>
.site-nav {
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 24px;
  min-height: 72px;
  padding: 14px clamp(20px, 4vw, 64px);
  color: var(--ink);
  opacity: 0;
  transform: translateY(-16px);
  transition:
    opacity 500ms ease,
    transform 500ms ease,
    background 240ms ease,
    border-color 240ms ease;
}

.site-nav--mounted {
  opacity: 1;
  transform: translateY(0);
}

.site-nav--scrolled {
  border-bottom: 1px solid var(--line);
  background: color-mix(in oklch, var(--bg) 82%, transparent);
  backdrop-filter: blur(18px);
}

.brand,
.nav-links,
.nav-actions,
.nav-cta,
.icon-button {
  display: inline-flex;
  align-items: center;
}

.brand {
  justify-self: start;
  gap: 12px;
  color: inherit;
  text-decoration: none;
}

.brand__mark {
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border: 1px solid var(--line-strong);
  border-radius: 8px;
  background: var(--surface);
  color: var(--acid);
}

.brand__mark svg {
  width: 18px;
  height: 18px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.6;
}

.brand__name {
  font-size: 0.94rem;
  font-weight: 720;
  letter-spacing: 0;
}

.nav-links {
  justify-self: center;
  gap: 6px;
  padding: 5px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: color-mix(in oklch, var(--surface) 86%, transparent);
}

.nav-links a {
  border-radius: 6px;
  color: var(--muted);
  font-size: 0.78rem;
  font-weight: 650;
  line-height: 1;
  padding: 10px 12px;
  text-decoration: none;
  transition:
    background 180ms ease,
    color 180ms ease;
}

.nav-links a:hover {
  background: var(--surface-strong);
  color: var(--ink);
}

.nav-actions {
  justify-self: end;
  gap: 10px;
}

.icon-button,
.nav-cta {
  min-height: 38px;
  border-radius: 8px;
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--ink);
  font-size: 0.78rem;
  font-weight: 720;
  line-height: 1;
  text-decoration: none;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    background 180ms ease;
}

.icon-button {
  justify-content: center;
  min-width: 42px;
  cursor: pointer;
}

.nav-cta {
  gap: 8px;
  padding: 0 14px;
  background: var(--ink);
  color: var(--bg);
}

.nav-cta svg {
  width: 16px;
  height: 16px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.7;
}

.icon-button:hover,
.nav-cta:hover {
  border-color: color-mix(in oklch, var(--cyan) 72%, var(--line));
  transform: translateY(-1px);
}

@media (max-width: 820px) {
  .site-nav {
    grid-template-columns: 1fr auto;
    min-height: 64px;
    padding-inline: 16px;
  }

  .nav-links {
    display: none;
  }

  .nav-cta span {
    display: none;
  }

  .nav-cta {
    width: 42px;
    justify-content: center;
    padding: 0;
  }
}
</style>
