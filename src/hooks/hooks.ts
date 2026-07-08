import {BeforeAll, AfterAll} from "@cucumber/cucumber";
import { chromium, Page, Browser } from "@playwright/test";


// let browser: Browser;
// let page: Page;

// BeforeAll(async function () {
// browser = await chromium.launch({headless: false});
// page= await browser.newPage();
// page = page;
// });

// AfterAll(async function () {   
// await page.close(); 
// await browser.close();
// });