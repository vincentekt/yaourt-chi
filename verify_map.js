import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('https://vincentekt.github.io/yaourt-chi/location-market-research.html', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  
  const mapElement = await page.$('#interactive-map');
  if (mapElement) {
    await mapElement.screenshot({ path: 'C:/Users/vince/.gemini/antigravity/brain/da881f4b-58cb-40bb-a592-32d95482d96c/live_map_markers.png' });
    console.log('Map screenshot saved successfully!');
  }

  await browser.close();
})();
