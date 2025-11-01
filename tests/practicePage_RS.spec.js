// @ts-check
import { test, expect } from '@playwright/test';

test ('TC: 01: verify list box functionality', async ({ page }) => {

let URL = " https://rahulshettyacademy.com/AutomationPractice/"


//header//

await page.goto(URL);

let pageTile = await page.title();
 
await expect(pageTile).toBe('Practice Page');

await page.getByRole("heading", {name: 'Practice Page'}) .isVisible();

//checkbox//
const checkBox1 = page.getByRole('checkbox', {name: 'option1         '});

await checkBox1.click;

//button//

const buttonOpenWin = page.getByRole("button", {name:'Open Window'});

await buttonOpenWin .click();

//link//

const link = page.getByRole('link', {name:"opentab"});

await link.click;


})
