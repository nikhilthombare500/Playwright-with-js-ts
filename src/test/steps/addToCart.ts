import{Given, When, Then} from "@cucumber/cucumber";
import { chromium, Page, Browser, Expect, expect } from "@playwright/test";

let browser: Browser;
let page: Page;

browser = await chromium.launch({headless: false});
page= await browser.newPage();

Then('user add the {string} to the add to cart', async function (Product) {
const productName = 'Product';
const products = await page.locator(".card-body");
const count = await products.count();
   for (let i = 0; i < count; ++i) {
      if (await products.nth(i).locator("b").textContent() === productName) {
         //add to cart
         await products.nth(i).locator("text= Add To Cart").click();
         break;
      }
   }
});

Then('the cart badge should get updated', async function () {
 const count = await page.locator("[routerlink*='cart']").textContent();
 expect(Number(count?.length)).toBeGreaterThan(0);
});