let cp=require('child_process');
// cp.execSync("open -a calculator");
let content=cp.execSync("node test.js");
console.log("Output:- "+content); //This always require string before printing content
