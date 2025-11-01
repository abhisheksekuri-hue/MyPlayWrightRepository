// @ts-check
import { test, expect } from '@playwright/test';

test ('verify list box functionality', async ({ page }) => {

let URL = " https://rahulshettyacademy.com/AutomationPractice/"
await page.goto(URL);

let pageTile = await page.title();


await expect(pageTile).toBe('Practice Page');

await page.getByRole("heading", {name: 'Practice Page'}) .isVisible();

const checkBox1 = page.getByRole('checkbox', {name: 'option1'});
await checkBox1.check();

const radioButtonText = page.getByText('Radio Button Example');
await expect (radioButtonText).toBeVisible

const suggesionClassText = page.getByText("Suggession Class Example");
await expect (suggesionClassText).toBeVisible

const textSwitchExample = page.getByPlaceholder("Enter Your Name");
await textSwitchExample.fill ("Karthi");

})
