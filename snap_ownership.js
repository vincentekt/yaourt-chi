import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('https://vincentekt.github.io/yaourt-chi/foreign-ownership-tax.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  
  await page.screenshot({ path: 'ownership_page.png', fullPage: true });
  console.log('Ownership full screenshot saved');
  await browser.close();
})();
