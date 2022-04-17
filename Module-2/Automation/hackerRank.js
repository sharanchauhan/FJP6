const puppeteer=require('puppeteer');
const email="napoboj633@hhmel.com";
const pass="Hello@123";

let browserPromise=puppeteer.launch({headless:false});
let page;
browserPromise.then(function(browser)
{
    let pagePromise=browser.newPage();
    return pagePromise;
}).then(function(pageInstance)
{
    console.log("New Page is Opened!");
    page=pageInstance;
    let urlPromise=page.goto("https://www.hackerrank.com");
    return urlPromise;
}).then(function()
{
    console.log("HackerRank Page is opened!");
    let waitPromise=page.waitForSelector("ul.menu a");
    return waitPromise;
}).then(function()
{
    let clickPromise=page.click("ul.menu a");
    return clickPromise;
}).then(function()
{
    console.log("Login Clicked");
    let waitPromise=page.waitForSelector(".fl-module-content.fl-node-content .fl-button");
    // let waitPromise=page.waitForSelector(".fl-module-content.fl-node-content .fl-button-wrap.fl-button-width-auto.fl-button-left a");
    return waitPromise;
}).then(function()
{
    let domPromise=page.evaluate(function()
    {
        let buttons=document.querySelectorAll(".fl-module-content.fl-node-content .fl-button");
        buttons[1].click();
        return;
    });
    return domPromise;
}).then(function()
{
    let waitForSelector=page.waitForSelector("#input-1");
    return waitForSelector;
}).then(function()
{
    let typeMail=page.type("#input-1",email,{delay:100});
    return typeMail;
}).then(function()
{
    let typePass=page.type("#input-2",pass,{delay:100});
    return typePass;
}).then(function()
{
    let clickPromise=page.click('button[data-analytics="LoginPassword"]');
    return clickPromise;
})