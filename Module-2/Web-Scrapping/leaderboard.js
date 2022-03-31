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
            // console.log(link);
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
        let batsmanRow=document.querySelectorAll(".table.batsman tbody tr");
        for(let i=0;i<batsmanRow.length;i++)
        {
            let cells=batsmanRow[i].querySelectorAll("td");
            if(cells.length==8)
            {
                let name=cells[0].textContent;
                let runs=cells[2].textContent;
                let balls=cells[3].textContent;
                let fours=cells[5].textContent;
                let sixes=cells[6].textContent;
                console.log(name+" "+runs+" "+balls+" "+fours+" "+sixes);
            }
        }
    }
}
