import {Before, After, BeforeAll, AfterAll} from "@cucumber/cucumber";
import { chromium, Page, Browser, BrowserContext } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers/browserManager";


let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
browser = await invokeBrowser();

});

Before(async function () {
context = await browser.newContext();
const page= await context.newPage();
pageFixture.page = page;
});

After(async function () {   
await pageFixture.page.close(); 
await context.close();
});

AfterAll(async function () {   

await browser.close();
});