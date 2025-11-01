// @ts-check
import { test, expect } from '@playwright/test';

test.only('has title', async ({ page }) => {
  await page.goto('http://www.rahulshettyacademy.com/practice-project');

  await page.waitForTimeout(10000);

  await page.locator ("input[placeholder='Your Name*']") .fill ("abhishek");
  await page.locator ("input[id='email']") .fill ("abhisheksekuri@gmail.com");
  await page.locator ("input[id='agreeTerms']").check;
  await page.locator("button[type='submit']"). click;

  

});
