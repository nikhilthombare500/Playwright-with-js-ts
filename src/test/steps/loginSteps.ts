import{Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
setDefaultTimeout(60 * 1000 * 2)


Given('User navigates to the application', async function () {
   await pageFixture.page.goto("https://rahulshettyacademy.com/client");
});

Given('User enter the username as {string}', async function (username) {
await pageFixture.page.locator("#userEmail").fill(username);;
});

Given('User enter the password as {string}', async function (password) {
  await pageFixture.page.locator("#userPassword").fill(password);
});

When('User click on the login button', async function () {
await pageFixture.page.locator("[value='Login']").click();
await pageFixture.page.waitForTimeout(2000);
});

Then('Login should be success', async function () {
   await pageFixture.page.waitForLoadState();
const titles = await pageFixture.page.locator(".card-body b").allTextContents();
   console.log("Login should be success:---" + titles);
   await pageFixture.page.close(); 
});

Then('Login should fail', async function () {
   await pageFixture.page.waitForTimeout(2000);
    const failtitles = await pageFixture.page.locator("invalid-feedback ng-star-inserted").allTextContents();
   console.log("Login should fail:---" + failtitles);
   await pageFixture.page.close(); 
});
