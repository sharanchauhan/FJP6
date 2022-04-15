// npm i puppeteer
const puppeteer=require('puppeteer');

let browser=puppeteer.launch({headless:false});// headless:false is to show the browser, if it is true the script will run but it will not show.

// console.log(browser);
browser.then(function(browserInstance)
{
    // let page=browser.newPage();
    console.log("Browser is opened");
    let page=browserInstance.newPage();
    return page;
}).then(function(pageI){
    console.log("Page is opened");
    let url=pageI.goto('https://www.google.co.in/');
    return url;
}).then(function()
{
    console.log("google is opened successfully!!");
})

