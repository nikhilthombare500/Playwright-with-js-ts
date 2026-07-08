import{Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Page, Browser } from "@playwright/test";
import {BeforeAll, AfterAll} from "@cucumber/cucumber";
setDefaultTimeout(60 * 1000 * 2)

let browser: Browser;
let page: Page;
BeforeAll(async () => {
browser = await chromium.launch({headless: false});
page= await browser.newPage();
page = page;
});

Given('User navigates to the application', async ({page}) => {
   // browser = await chromium.launch({headless: false});
   // page= await browser.newPage();
await page.goto("https://rahulshettyacademy.com/client");
});

Given('User enter the username as {string}', async ({page}, username) => {
await page.locator("#userEmail").fill(username);;
});

Given('User enter the password as {string}', async ({page}, password) => {
  await page.locator("#userPassword").fill(password);
});

When('User click on the login button', async ({page}) => {
await page.locator("[value='Login']").click();
await page.waitForTimeout(2000);
});

Then('Login should be success', async ({page}) => {
   await page.waitForLoadState();
const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles);
//    await page.close(); 
// await browser.close();
});

Then('Login should fail', async ({page}) => {
    const failtitles = await page.locator("invalid-feedback ng-star-inserted").allTextContents();
   console.log(failtitles);
//    await page.close(); 
// await browser.close();
});

AfterAll(async () => {   
await page.close(); 
await browser.close();
});