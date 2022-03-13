//copy index.html file from module1 to a new folder inside module2 having name html.
let fs=require('fs');
let path=require('path');
let source="/Users/sharanchauhan/Documents/FJP6/Module-1/project/index.html";
let destination=path.join("/Users/sharanchauhan/Documents/FJP6/Module-2/New Folder","html.html");

fs.copyFileSync(source,destination);