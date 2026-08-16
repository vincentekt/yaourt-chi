import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  await page.goto('https://vincentekt.github.io/yaourt-chi/', { waitUntil: 'networkidle' });
  
  const navbar = await page.$('.navbar');
  if (navbar) {
    const box = await navbar.boundingBox();
    console.log('Navbar bounding box (1440px):', box);
    await navbar.screenshot({ path: 'C:/Users/vince/.gemini/antigravity/brain/da881f4b-58cb-40bb-a592-32d95482d96c/navbar_desktop.png' });
  }

  await page.setViewportSize({ width: 1024, height: 768 });
  const navbarTablet = await page.$('.navbar');
  if (navbarTablet) {
    const boxTablet = await navbarTablet.boundingBox();
    console.log('Navbar bounding box (1024px):', boxTablet);
    await navbarTablet.screenshot({ path: 'C:/Users/vince/.gemini/antigravity/brain/da881f4b-58cb-40bb-a592-32d95482d96c/navbar_tablet.png' });
  }

  await page.setViewportSize({ width: 390, height: 844 });
  const navbarMobile = await page.$('.navbar');
  if (navbarMobile) {
    const boxMobile = await navbarMobile.boundingBox();
    console.log('Navbar bounding box (390px mobile):', boxMobile);
    await navbarMobile.screenshot({ path: 'C:/Users/vince/.gemini/antigravity/brain/da881f4b-58cb-40bb-a592-32d95482d96c/navbar_mobile.png' });
  }

  await browser.close();
  console.log('Inspection screenshots saved.');
})();
