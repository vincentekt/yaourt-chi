import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  console.log('Navigating to https://vincentekt.github.io/yaourt-chi/ ...');
  const response = await page.goto('https://vincentekt.github.io/yaourt-chi/', { waitUntil: 'networkidle' });
  
  console.log('Status code:', response.status());
  console.log('Page Title:', await page.title());

  await page.screenshot({ path: 'C:/Users/vince/.gemini/antigravity/brain/da881f4b-58cb-40bb-a592-32d95482d96c/live_page_screenshot.png', fullPage: true });
  console.log('Screenshot saved successfully!');

  const appHtml = await page.innerHTML('#app');
  console.log('#app HTML length:', appHtml.length);

  await browser.close();
})();
