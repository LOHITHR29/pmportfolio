import { chromium } from "playwright";

const URL = "http://localhost:8080/";
const OUT = "spotify-case-study.pdf";

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1280, height: 720 },
});
const page = await ctx.newPage();

await page.goto(URL, { waitUntil: "networkidle" });

// Wait for the Manrope font to load so the PDF renders with the right type.
await page.evaluate(() => document.fonts.ready);

await page.emulateMedia({ media: "print" });

await page.pdf({
  path: OUT,
  width: "1280px",
  height: "720px",
  printBackground: true,
  preferCSSPageSize: true,
  margin: { top: 0, bottom: 0, left: 0, right: 0 },
});

await browser.close();
console.log(`Wrote ${OUT}`);
