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
    let waitPromise=page.waitForSelector("#input-1");
    return waitPromise;
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
}).then(function()
{
    let waitPromise=page.waitForSelector('div[data-automation="algorithms"]');
    return waitPromise;
}).then(function()
{
    let clickPromise=page.click('div[data-automation="algorithms"]');
    return clickPromise;
}).then(function()
{
    return page.waitForSelector(".filter-group");
}).then(function()
{
    let domSelectPromise = page.evaluate(function()
    {
        let allDivs = document.querySelectorAll(".filter-group");
        let div = allDivs[3];
        let clickSelector = div.querySelector(".ui-checklist-list-item input");
        clickSelector.click();
        return;
    })
    return domSelectPromise;
}).then(function()
{
    console.log("warmup Selected");
    return page.waitForSelector('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled');
})



function waitAndClick(selector){
    return new Promise(function(resolve,reject){
        let waitPromise = page.waitForSelector(selector);
        waitPromise.then(function(){
            let clickPromise = page.click(selector);
            return clickPromise;
        }).then(function(){
            resolve();
        });
    })
}