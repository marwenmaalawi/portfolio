import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

const OUTPUT_DIR = path.join(__dirname, "../public/screenshots");

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function takeScreenshots() {
  console.log("Launching headless browser...");
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  // Desktop viewport
  await page.setViewport({ width: 1440, height: 900 });

  // 1. Storefront Screenshot
  console.log("Navigating to Storefront...");
  try {
    await page.goto("https://antigravitysneakers-staging-web.vercel.app/", {
      waitUntil: "networkidle2",
      timeout: 30000,
    });
    // Wait an additional 3 seconds for dynamic animations
    await new Promise((resolve) => setTimeout(resolve, 3000));
    await page.screenshot({ path: path.join(OUTPUT_DIR, "storefront.png") });
    console.log("Storefront screenshot saved.");
  } catch (error) {
    console.error("Error capturing storefront:", error);
  }

  // 2. Admin Dashboard Screenshot
  console.log("Navigating to Admin Dashboard...");
  try {
    await page.goto("https://antigravitysneakers-staging-admin.vercel.app/admin", {
      waitUntil: "networkidle2",
      timeout: 30000,
    });
    await new Promise((resolve) => setTimeout(resolve, 4000)); // Wait for charts/skeletons
    await page.screenshot({ path: path.join(OUTPUT_DIR, "admin.png") });
    console.log("Admin Dashboard screenshot saved.");
  } catch (error) {
    console.error("Error capturing admin dashboard:", error);
  }

  // 3. Admin Products / CMS Screenshot
  console.log("Navigating to Admin Products / CMS Page...");
  try {
    await page.goto("https://antigravitysneakers-staging-admin.vercel.app/admin/products", {
      waitUntil: "networkidle2",
      timeout: 30000,
    });
    await new Promise((resolve) => setTimeout(resolve, 4000));
    await page.screenshot({ path: path.join(OUTPUT_DIR, "cms.png") });
    console.log("CMS/Products screenshot saved.");
  } catch (error) {
    console.error("Error capturing CMS page:", error);
  }

  await browser.close();
  console.log("All screenshots captured successfully!");
}

takeScreenshots().catch((err) => {
  console.error("Global screenshot capture failure:", err);
  process.exit(1);
});
