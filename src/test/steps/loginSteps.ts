import{Given, When, Then} from "@cucumber/cucumber";
import { chromium, Page, Browser } from "@playwright/test";

let browser: Browser;
let page: Page;

Given('User navigates to the application', async function () {
browser = await chromium.launch({headless: false});
page= await browser.newPage();
await page.goto("https://rahulshettyacademy.com/client");
});

Given('User enter the username as {string}', async function (username) {
await page.locator("#userEmail").fill(username);;
});

Given('User enter the password as {string}', async function (password) {
  await page.locator("#userPassword").fill(password);
});

When('User click on the login button', async function () {
await page.locator("[value='Login']").click();
});

Then('Login should be success', async function () {
const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
await browser.close();
});

Then('Login should fail', async function () {
    const failtitles = await page.locator("invalid-feedback ng-star-inserted").allTextContents();
   console.log(failtitles); 
   
await browser.close();
});