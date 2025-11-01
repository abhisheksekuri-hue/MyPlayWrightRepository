// @ts-check
import { test, expect } from '@playwright/test';

test ('verify list box functionality', async ({ page }) => {

let URL = " https://rahulshettyacademy.com/AutomationPractice/"
await page.goto(URL);

let pageTile = await page.title();


const textSwitchExample = page.getByPlaceholder("Enter Your Name");
await textSwitchExample.fill ("Karthi");

})
