# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vue 3 + TypeScript SPA scaffolded with `create-vue`. Extended with Tailwind CSS v4, vue-i18n, and CSS-based entrance animations.

Node: `^20.19.0 || >=22.12.0` | Package manager: npm

## Commands

```bash
npm run dev          # Vite dev server with HMR
npm run build        # Type-check + production build (parallel via npm-run-all2)
npm run build-only   # Vite build only (no type check)
npm run preview      # Serve production build locally
npm run type-check   # vue-tsc --build (incremental)
npm run test:unit    # Vitest (watch mode in dev, run once using --run flag)
npm run test:e2e     # Playwright E2E tests (requires dev server on :5173 or preview on :4173)
npm run lint         # OxLint (fast) then ESLint, both with --fix
npm run format       # Prettier on src/
```

Run a single unit test: `npx vitest run src/path/to/file.spec.ts`

**Screenshot for visual review:** Run `node scripts/screenshot.mjs` to capture a full-page PNG of `http://localhost:5173` (requires dev server running). Image saved to `screenshot.png` in project root.

## Architecture

**Stack:** Vue 3 Composition API (`<script setup lang="ts">`), Vue Router 5 (HTML5 history), vue-i18n 11 (non-legacy mode).

**Styling:** Tailwind CSS v4 via `@tailwindcss/vite` plugin (not PostCSS). Dark mode uses `.dark` class variant. Theme tokens are CSS custom properties with oklch values defined in `src/assets/base.css`. `tw-animate-css` provides animation utilities.

**Animations:** CSS-only entrance animations using `@keyframes` defined in `src/assets/main.css`. Animation classes: `anim-fade-up`, `anim-fade`, `anim-blur-in`, `anim-slide-left`, `anim-scale-in`. Scroll-triggered animations use `useElementVisibility` from `@vueuse/core` to toggle classes.

**Path alias:** `@` maps to `./src`

**Key directories:**
- `src/views/` - Route-level page components (eagerly imported)
- `src/components/` - Shared components
- `src/i18n/` - Internationalization setup and locale files (`lang/en.ts`, `lang/zh.ts`)
- `src/assets/` - Global CSS (`base.css` for Tailwind/theme, `main.css` for layout/animations)
- `e2e/` - Playwright E2E tests

## Code Style

- Prettier: no semicolons, single quotes, 100 char print width
- 2-space indentation, UTF-8, LF line endings
- ESLint flat config with Vue essential rules + TypeScript recommended
- OxLint runs first (faster), ESLint catches what OxLint misses
