const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";
request(link,cb);
function cb(error,response,html)
{
    if(error)
    {
        console.log("Error:-"+error);
    }
    else
    {
        // console.log("HTML:-"+html);
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let table=document.querySelectorAll("table.bowler");
        console.log(table.length);
    }
}