import { chromium } from '@playwright/test'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } })
await page.goto('http://localhost:5173', { waitUntil: 'networkidle' })
await page.screenshot({ path: 'screenshot.png', fullPage: true })
await browser.close()
console.log('Screenshot saved to screenshot.png')
