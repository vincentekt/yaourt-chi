import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('https://vincentekt.github.io/yaourt-chi/location-market-research.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  
  await page.screenshot({ path: 'map_test.png', fullPage: false });
  console.log('OK');
  await browser.close();
})();
