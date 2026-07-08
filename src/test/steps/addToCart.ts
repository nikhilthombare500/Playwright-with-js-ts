import{Given, When, Then, setDefaultTimeout} from "@cucumber/cucumber";
import { chromium, Page, Browser, expect } from "@playwright/test";
setDefaultTimeout(60 * 1000 * 2)
let page: Page;

Then('user add the {string} to the add to cart', async function (Product) {
const productName = Product;
const products = await this.page.locator(".card-body");
const count = await products.count();
   for (let i = 0; i < count; ++i) {
      if (await products.nth(i).locator("b").textContent() === productName) {
         //add to cart
         await products.nth(i).locator("text= Add To Cart").click();
         break;
      }
   }
   await this.page.waitForTimeout(2000);
});

Then('the cart badge should get updated', async function () {
 const count = await this.page.locator("[routerlink*='cart']").textContent();
 expect(Number(count?.length)).toBeGreaterThan(0);
});