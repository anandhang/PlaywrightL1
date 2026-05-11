import {test, expect} from "@playwright/test"

test.describe("", async () => {

    test("test1", async ({page}) => 
      {
        await page.goto("url/");

      });
});