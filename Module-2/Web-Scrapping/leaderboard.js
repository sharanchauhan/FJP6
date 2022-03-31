const request = require('request');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const url="https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";

request(url,cb);
function cb(error,response,html)
{
    if(error)
    {
        console.log("Error:- "+error);
    }
    else
    {
        const dom=new JSDOM(html);
        const document=dom.window.document;
        let allScorecardsTags=document.querySelectorAll('a[data-hover="Scorecard"]');
        for(let i=0;i<allScorecardsTags.length;i++)
        {
            let link="https://www.espncricinfo.com"+allScorecardsTags[i].href;
            console.log(link);
            request(link,cb1);

        }
    }
}

function cb1(error,response,html)
{
    if(error)
    {
        console.log("Error:- "+error);
    }
    else
    {
        const dom = new JSDOM(html);
        const document = dom.window.document;
    }
}
