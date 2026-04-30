<script setup lang="ts">
withDefaults(defineProps<{
  words: string[]
  speed?: number
  reverse?: boolean
}>(), {
  speed: 30,
})
</script>

<template>
  <div class="relative overflow-hidden py-6 md:py-10 border-y border-border/30">
    <div
      class="flex w-max gap-8 md:gap-16"
      :class="reverse ? 'animate-[marquee-reverse_var(--marquee-duration)_linear_infinite]' : 'animate-[marquee_var(--marquee-duration)_linear_infinite]'"
      :style="{ '--marquee-duration': `${speed}s` }"
    >
      <template v-for="n in 3" :key="n">
        <span
          v-for="(word, i) in words"
          :key="`${n}-${i}`"
          class="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground/10 whitespace-nowrap select-none italic"
        >
          {{ word }}
          <span class="text-gold/20 mx-4 md:mx-8">✦</span>
        </span>
      </template>
    </div>
  </div>
</template>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.333%); }
}
@keyframes marquee-reverse {
  0% { transform: translateX(-33.333%); }
  100% { transform: translateX(0); }
}
</style>
