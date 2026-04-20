import {test, expect} from "@playwright/test"

/*
page.frame(...)  
→ நீங்கள் ஒரு specific frame‑ஐ name அல்லது URL மூலம் தேடுகிறீர்கள்.
→ அது அந்த frame object return பண்ணும் (அல்லது null).
→ இதனால் நீங்கள் target frame மட்டும் handle செய்யலாம்.

page.frames()  
→ எல்லா frames (main + child + hidden) array‑ஆ return பண்ணும்.
→ அதில் ads, analytics, sandboxed scripts, tracking pixels போன்ற hidden iframes கூட count ஆகும்.
→ அதனால் count அதிகமாக இருக்கும்.

childFrames() → அந்த frame‑க்குள் உள்ள எல்லா child frames (nested iframes) return பண்ணும்.

இது visible frames மட்டும் அல்ல; hidden/system iframes இருந்தாலும் return ஆகும்.

அதாவது, Playwright‑இல் frame hierarchy முழுவதையும் capture பண்ணும்.
*/
test("TC_12354 Use frameLocator", async ({browser}) => 
    {
        const browserContext = await browser.newContext();
        const page = await browserContext.newPage();
        await page.goto("https://demo.automationtesting.in/Frames.html")
        await page.getByRole('link', {name:'Single Iframe'}).click();
        const outerFrame = page.frameLocator("#singleframe");
        await outerFrame.locator("input[type='text']").fill("first Frame");
    });

test("TC_12354 Use frame", async ({browser}) => 
    {
        const browserContext = await browser.newContext();
        const page = await browserContext.newPage();
        await page.goto("https://demo.automationtesting.in/Frames.html")        
        await page.getByRole('link', {name:'Iframe with in an Iframe'}).click();
        await page.pause();
        const outerFrame = await page.frame({url: /MultipleFrames.html/});
        if(outerFrame)
        {
            console.log("Outer frame URL:", outerFrame.url);
            const childFrames = outerFrame.childFrames();
            console.log("Child frames count:", childFrames.length);
            const innerFarme = childFrames[0];
            await innerFarme.locator("input[type='text']").fill("Hello inner frame")
        }        
        await page.pause();
    });

test.only("TestCaseIT Use iframes", async ({browser}) => 
    {
        const browserContext = await browser.newContext();
        const page = await browserContext.newPage();
        await page.goto("https://demo.automationtesting.in/Frames.html")        
        await page.getByRole('link', {name:'Iframe with in an Iframe'}).click();

        const outerFrame = await page.frame({url: /MultipleFrames.html/});
        if(outerFrame)
        {

        }
        const frames = page.frames();
        console.log("Total frames:", frames.length);
        for(const f of frames)
        {
            console.log("Frame URL:", f.url());
        }

        for (const f of frames) {
            const url = f.url();
            if (url && !url.startsWith("about:blank")) {
                console.log("Frame URL:", url);
            }
        }
    });