// example.js
const { chromium } = require('playwright');

(async () => {
  // Launch a browser
  const browser = await chromium.launch({ headless: false }); // Set headless: true for headless mode
  const page = await browser.newPage();

  // Navigate to a website
  await page.goto('http://192.168.2.56/qa_test_20241116/index.html');

  // perform testcase with 7 + 5 = 

  // Perform actions - click button 7
  await page.click('button[data-char="7"]');

  // Perform actions - click button +
  await page.click('button[data-char="+"]');

  // Perform actions - click button 5
  await page.click('button[data-char="5"]');

  // Perform actions - click button 5
  await page.click('button[data-action="calculate"]');

  const ansValue = await page.textContent('#result');
  console.log(ansValue);

  // Perform actions - screenshot
   await page.screenshot({ path: 'screenshot.png' });

  // Close the browser
  await browser.close();
})();