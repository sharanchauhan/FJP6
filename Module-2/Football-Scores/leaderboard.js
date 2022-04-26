const fs=require('fs');
const { request } = require('http');
const jsdom=require('jsdom');
const { JSDOM } = jsdom;
const path=require('path');

const link="http://www.espn.in/football/scoreboard/_/league/all/date/20220413";
let leaderboard=[];
let counter=0;

request(link,cb);
function cb(error,response,html)
{
    if(error)
    {
        console.log("Error:- "+error);
    }
    else
    {
        const dom=new JSDOM(html);
        const document=dom.window.Document;
        console.log("Body:- "+html);
    }
}