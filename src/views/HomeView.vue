<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import MarqueeDivider from '@/components/MarqueeDivider.vue'
import BentoGrid from '@/components/BentoGrid.vue'
import StatsSection from '@/components/StatsSection.vue'
import ShowcaseSection from '@/components/ShowcaseSection.vue'
import FooterSection from '@/components/FooterSection.vue'

const marqueeWords1 = ['Design', 'Code', 'Create', 'Innovate', 'Build', 'Dream']
const marqueeWords2 = ['Pixel', 'Motion', 'Light', 'Form', 'Flow', 'Balance']
</script>

<template>
  <main>
    <HeroSection />
    <MarqueeDivider :words="marqueeWords1" />
    <BentoGrid />
    <MarqueeDivider :words="marqueeWords2" :reverse="true" />
    <StatsSection />
    <ShowcaseSection />
    <FooterSection />
  </main>
</template>
