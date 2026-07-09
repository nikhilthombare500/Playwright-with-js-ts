import {LaunchOptions, chromium, firefox, webkit } from "playwright-core";

declare const process: {
    env: {
        BROWSER?: "chrome" | "firefox" | "webkit";
    }
};

const options: LaunchOptions = {
    headless: false,
    args: ['--start-maximized'],
}
export const invokeBrowser = ()=> {
    const browserType = process.env.BROWSER || "chrome"; // Default to Chrome if not specified
    switch(browserType) {
        case "chrome":
           return chromium.launch(options);
          
        case "firefox":
           return firefox.launch(options);
        case "webkit":
           return webkit.launch(options);   
        default:
            throw new Error(`Unsupported browser type: ${browserType}`);
    }
}