import { Browser, chromium } from "playwright";


async function main(browser: Browser) {
    try {
        const page = await browser.newPage();
        await page.goto('https://example.com/');
        const title = await page.textContent('title', { timeout: 1000});
        console.log({title});
    } finally {
        await browser.close();
    }
}

(async () => {
    const browser = await chromium.launch();
    try {
        await main(browser);
    } finally {
        browser.close();
    }
})().catch(console.log);

