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
        let table=document.querySelectorAll(".table.bowler");
        let highestWicket=0,taker="";
        for(let i=0;i<table.length;i++)
        {
            let rows=table[i].querySelectorAll("tbody tr");
            for(let j=0;j<rows.length;j++)
            {
                let data=rows[j].querySelectorAll("td");
                if(data.length>1)
                {
                    let name=data[0].textContent;
                    let wicket=data[4].textContent;
                    // console.log("Bowler Name -> "+name);
                    // console.log("Wickets     -> "+wicket);
                    if(highestWicket<wicket)
                    {
                        highestWicket=wicket;
                        taker=name;
                    }
                }
            }
        }
        console.log(taker+" --> "+highestWicket);
    }
}