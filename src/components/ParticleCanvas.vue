<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)
let animationId = 0

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  hue: number
}

onMounted(() => {
  const el = canvas.value
  if (!el) return
  const ctx = el.getContext('2d')
  if (!ctx) return

  let w = 0
  let h = 0
  const particles: Particle[] = []
  const mouse = { x: -1000, y: -1000 }

  function resize() {
    const dpr = window.devicePixelRatio || 1
    w = el!.clientWidth
    h = el!.clientHeight
    el!.width = w * dpr
    el!.height = h * dpr
    ctx!.scale(dpr, dpr)
  }

  function createParticle(): Particle {
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      hue: 40 + Math.random() * 20,
    }
  }

  function init() {
    resize()
    const count = Math.min(Math.floor((w * h) / 8000), 120)
    particles.length = 0
    for (let i = 0; i < count; i++) {
      particles.push(createParticle())
    }
  }

  function draw() {
    ctx!.clearRect(0, 0, w, h)

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]!
      const dx = mouse.x - p.x
      const dy = mouse.y - p.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 150) {
        const force = (150 - dist) / 150
        p.vx -= (dx / dist) * force * 0.02
        p.vy -= (dy / dist) * force * 0.02
      }

      p.x += p.vx
      p.y += p.vy
      p.vx *= 0.99
      p.vy *= 0.99

      if (p.x < 0) p.x = w
      if (p.x > w) p.x = 0
      if (p.y < 0) p.y = h
      if (p.y > h) p.y = 0

      ctx!.beginPath()
      ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx!.fillStyle = `oklch(0.78 0.16 ${p.hue} / ${p.opacity})`
      ctx!.fill()

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j]!
        const dx2 = p.x - p2.x
        const dy2 = p.y - p2.y
        const d = Math.sqrt(dx2 * dx2 + dy2 * dy2)
        if (d < 120) {
          ctx!.beginPath()
          ctx!.moveTo(p.x, p.y)
          ctx!.lineTo(p2.x, p2.y)
          ctx!.strokeStyle = `oklch(0.75 0.15 85 / ${0.06 * (1 - d / 120)})`
          ctx!.lineWidth = 0.5
          ctx!.stroke()
        }
      }
    }

    animationId = requestAnimationFrame(draw)
  }

  function onMouseMove(e: MouseEvent) {
    mouse.x = e.clientX
    mouse.y = e.clientY
  }

  window.addEventListener('resize', init)
  window.addEventListener('mousemove', onMouseMove)
  init()
  draw()

  onUnmounted(() => {
    cancelAnimationFrame(animationId)
    window.removeEventListener('resize', init)
    window.removeEventListener('mousemove', onMouseMove)
  })
})
</script>

<template>
  <canvas
    ref="canvas"
    class="absolute inset-0 w-full h-full pointer-events-none"
  />
</template>
