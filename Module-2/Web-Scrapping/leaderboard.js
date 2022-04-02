const request = require('request');
const fs=require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const url="https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";
let leaderboard=[];
let counter=0;
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
            counter++;
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
                processPlayer(name,runs,balls,fours,sixes);
                // console.log(name+" "+runs+" "+balls+" "+fours+" "+sixes);
            }
        }
        counter--;
        if(counter==0)
        {
            // console.log(leaderboard);
            let data=JSON.stringify(leaderboard);
            fs.writeFileSync('BatsmenStats.json',data);
        }
    }
}

function processPlayer(name,runs,balls,fours,sixes){
    runs = Number(runs);
    balls = Number(balls);
    fours = Number(fours);
    sixes = Number(sixes);
    for(let i=0;i<leaderboard.length;i++){
        let playerObj = leaderboard[i];
        if(playerObj.Name == name){
            //will do some work here
            playerObj.Runs+=runs;
            playerObj.Innings+=1;
            playerObj.Balls+=balls;
            playerObj.Fours+=fours;
            playerObj.Sixes+=sixes;
            return;
        }
    }
    // code coming here means we did not find our player inside leaderboard
    let obj = {
        Name:name,
        Runs:runs,
        Innings:1,
        Balls:balls,
        Fours:fours,
        Sixes:sixes
    }
    leaderboard.push(obj);
}
