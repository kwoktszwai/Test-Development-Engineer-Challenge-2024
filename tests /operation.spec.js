// login.spec.js
const { test, expect } = require('@playwright/test');
const path = require('path');

test.describe('Calculator Tests', () => {
  test('7+5=12 test', async ({ page }) => {
    const filePath = path.join(__dirname, '../html/index.html');
    const fileUrl = `file://${filePath}`;

    console.log(fileUrl);
    await page.goto(fileUrl);

    // Perform actions for 7 + 5
    await page.click('button[data-char="7"]');
    await page.click('button[data-char="+"]');
    await page.click('button[data-char="5"]');
    await page.click('button[data-action="calculate"]');

    const ansValue = await page.textContent('#result');
    console.log(ansValue);
    expect(ansValue).toBe("12");
  });

  test('7-2=5 test', async ({ page }) => {
    const filePath = path.join(__dirname, '../html/index.html');
    const fileUrl = `file://${filePath}`;

    console.log(fileUrl);
    await page.goto(fileUrl);

    // Perform actions for 7 - 2
    await page.click('button[data-char="7"]');
    await page.click('button[data-char="-"]');
    await page.click('button[data-char="2"]');
    await page.click('button[data-action="calculate"]');

    const ansValue = await page.textContent('#result');
    console.log(ansValue);
    expect(ansValue).toBe("5");
  });

  test('9*9=81 test', async ({ page }) => {
    const filePath = path.join(__dirname, '../html/index.html');
    const fileUrl = `file://${filePath}`;

    console.log(fileUrl);
    await page.goto(fileUrl);

    // Perform actions for 9 * 9
    await page.click('button[data-char="9"]');
    await page.click('button[data-char="*"]'); // Click the multiplication button
    await page.click('button[data-char="9"]');
    await page.click('button[data-action="calculate"]');

    const ansValue = await page.textContent('#result');
    console.log(ansValue);
    expect(ansValue).toBe("81");
  });

  test('50/5=10 test', async ({ page }) => {
    const filePath = path.join(__dirname, '../html/index.html');
    const fileUrl = `file://${filePath}`;

    console.log(fileUrl);
    await page.goto(fileUrl);

    // Perform actions for 50 / 5
    await page.click('button[data-char="5"]');  // Click 5 for the tens place
    await page.click('button[data-char="0"]');  // Click 0 for the units place
    await page.click('button[data-char="/"]');   // Click the division button
    await page.click('button[data-char="5"]');   // Click 5
    await page.click('button[data-action="calculate"]');

    const ansValue = await page.textContent('#result');
    console.log(ansValue);
    expect(ansValue).toBe("10");
  });
});