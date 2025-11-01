// @ts-check

// 7th class, if condition, case switch//


import { test, expect } from '@playwright/test';

test ('verify facebook login page', async ({ page }) => {
  await page.goto('https://www.google.com//');


let expectedTitle = await page.title ();
console.log( expectedTitle);

if( expectedTitle == 'Facebook – log in or sign up') 
{

console.log(" My URL is correct")

}

else

{

  console.log(" MY URL IS Not CORRECT")

}

  










});
