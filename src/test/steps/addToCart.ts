import{Given, When, Then, setDefaultTimeout} from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
setDefaultTimeout(60 * 1000 * 2)


Then('user add the {string} to the add to cart', async function (Product) {
const productName = Product;
const products = await pageFixture.page.locator(".card-body");
const count = await products.count();
   for (let i = 0; i < count; ++i) {
      if (await products.nth(i).locator("b").textContent() === productName) {
         //add to cart
         await products.nth(i).locator("text= Add To Cart").click();
         break;
      }
   }
   await pageFixture.page.waitForTimeout(2000);
});

Then('the cart badge should get updated', async function () {
 const count = await pageFixture.page.locator("[routerlink*='cart'] label").allTextContents();
 console.log("Cart badge count:---" + count);
//  expect(Number(count?.length)).toBeGreaterThan(0);
});