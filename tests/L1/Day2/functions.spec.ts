import { test, type Browser, type BrowserContext, type Page, expect } from '@playwright/test';
/*
    1st: test name (string)
    2nd: test function (callback)
*/
test('Testcase name', async ({page}) => {});

test('Testcase name', async function testmethodName({page})  {});

const functionName2 = async function openBrowserTest(){};

const functionName3 = async () => {};

const functionNameo = function openBrowser(
  { browser: b, context: c, page: p }: { browser: Browser; context: BrowserContext; page: Page }
) {};

test('Testcase name', async function functionName({browser, context, page})  {});

