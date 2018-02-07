const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://hrfmmymt.github.io');
  await page.screenshot({path: './dest/example.png'});

  await browser.close();
})();