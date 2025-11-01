// @ts-check

// 7th class, if condition, case switch//


import { test, expect } from '@playwright/test';

test ('verify facebook login page', async ({ page }) => {
  await page.goto('https://www.facebook.com/login/');


let expectedTitle = await page.title ();

await page.locator ("input[id='email']").fill ("viratabhishek@gmial.com");


await page.locator ("input[id='pass']").fill ("Abhishek@4590");

await page.locator ("button[name='login']").click ;



});
